"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const json = require("comment-json");
const path = require("path");
const DictionarySettings_1 = require("./DictionarySettings");
const util = require("../util/util");
const ConfigStore = require("configstore");
const minimatch = require("minimatch");
const operators_1 = require("rxjs/operators");
const currentSettingsFileVersion = '0.1';
exports.sectionCSpell = 'cSpell';
const packageName = 'cspell';
exports.defaultFileName = 'cSpell.json';
const defaultSettings = {
    id: 'default',
    name: 'default',
    version: currentSettingsFileVersion,
};
let globalSettings;
const cachedFiles = new Map();
function readJsonFile(file) {
    try {
        return json.parse(fs.readFileSync(file).toString());
    }
    catch (err) {
        console.error('Failed to read "%s": %s', file, err);
    }
    return {};
}
function normalizeSettings(settings, pathToSettings) {
    // Fix up dictionaryDefinitions
    const dictionaryDefinitions = DictionarySettings_1.normalizePathForDictDefs(settings.dictionaryDefinitions || [], pathToSettings);
    const languageSettings = (settings.languageSettings || [])
        .map(langSetting => (Object.assign({}, langSetting, { dictionaryDefinitions: DictionarySettings_1.normalizePathForDictDefs(langSetting.dictionaryDefinitions || [], pathToSettings) })));
    const imports = typeof settings.import === 'string' ? [settings.import] : settings.import || [];
    const fileSettings = Object.assign({}, settings, { dictionaryDefinitions, languageSettings });
    if (!imports.length) {
        return fileSettings;
    }
    const importedSettings = imports
        .map(name => resolveFilename(name, pathToSettings))
        .map(name => importSettings(name))
        .reduce((a, b) => mergeSettings(a, b));
    const finalizeSettings = mergeSettings(importedSettings, fileSettings);
    finalizeSettings.name = settings.name || finalizeSettings.name || '';
    finalizeSettings.id = settings.id || finalizeSettings.id || '';
    return finalizeSettings;
}
function importSettings(filename, defaultValues = defaultSettings) {
    filename = path.resolve(filename);
    if (cachedFiles.has(filename)) {
        return cachedFiles.get(filename);
    }
    const id = [path.basename(path.dirname(filename)), path.basename(filename)].join('/');
    const finalizeSettings = { id };
    cachedFiles.set(filename, finalizeSettings); // add an empty entry to prevent circular references.
    const settings = Object.assign({}, defaultValues, { id }, readJsonFile(filename));
    const pathToSettings = path.dirname(filename);
    Object.assign(finalizeSettings, normalizeSettings(settings, pathToSettings));
    const finalizeSrc = finalizeSettings.source || {};
    const name = operators_1.finalize.name || path.basename(filename);
    finalizeSettings.source = Object.assign({}, finalizeSrc, { filename, name });
    cachedFiles.set(filename, finalizeSettings);
    return finalizeSettings;
}
function readSettings(filename, defaultValues) {
    return importSettings(filename, defaultValues);
}
exports.readSettings = readSettings;
function readSettingsFiles(filenames) {
    return filenames.map(filename => readSettings(filename)).reduce((a, b) => mergeSettings(a, b), defaultSettings);
}
exports.readSettingsFiles = readSettingsFiles;
/**
 * Merges two lists of strings and removes duplicates.  Order is NOT preserved.
 */
function mergeList(left = [], right = []) {
    const setOfWords = new Set([...left, ...right]);
    return [...setOfWords.keys()];
}
function tagLanguageSettings(tag, settings = []) {
    return settings.map(s => (Object.assign({ id: tag + '.' + (s.id || s.local || s.languageId) }, s)));
}
function replaceIfNotEmpty(left = [], right = []) {
    const filtered = right.filter(a => !!a);
    if (filtered.length) {
        return filtered;
    }
    return left;
}
function mergeSettings(left, ...settings) {
    const rawSettings = settings.reduce(merge, left);
    return util.clean(rawSettings);
}
exports.mergeSettings = mergeSettings;
function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function merge(left, right) {
    if (left === right) {
        return left;
    }
    if (isEmpty(right)) {
        return left;
    }
    if (isEmpty(left)) {
        return right;
    }
    if (hasLeftAncestor(right, left)) {
        return right;
    }
    if (hasRightAncestor(left, right)) {
        return left;
    }
    const leftId = left.id || left.languageId || '';
    const rightId = right.id || right.languageId || '';
    const includeRegExpList = takeRightThenLeft(left.includeRegExpList, right.includeRegExpList);
    const optionals = includeRegExpList.length ? { includeRegExpList } : {};
    return Object.assign({}, left, right, optionals, { id: [leftId, rightId].join('|'), name: [left.name || '', right.name || ''].join('|'), words: mergeList(left.words, right.words), userWords: mergeList(left.userWords, right.userWords), flagWords: mergeList(left.flagWords, right.flagWords), ignoreWords: mergeList(left.ignoreWords, right.ignoreWords), enabledLanguageIds: replaceIfNotEmpty(left.enabledLanguageIds, right.enabledLanguageIds), ignoreRegExpList: mergeList(left.ignoreRegExpList, right.ignoreRegExpList), patterns: mergeList(left.patterns, right.patterns), dictionaryDefinitions: mergeList(left.dictionaryDefinitions, right.dictionaryDefinitions), dictionaries: mergeList(left.dictionaries, right.dictionaries), languageSettings: mergeList(tagLanguageSettings(leftId, left.languageSettings), tagLanguageSettings(rightId, right.languageSettings)), enabled: right.enabled !== undefined ? right.enabled : left.enabled, source: mergeSources(left, right) });
}
function hasLeftAncestor(s, left) {
    return hasAncestor(s, left, 0);
}
function hasRightAncestor(s, right) {
    return hasAncestor(s, right, 1);
}
function hasAncestor(s, ancestor, side) {
    return s.source
        && s.source.sources
        && s.source.sources[side]
        && (s.source.sources[side] === ancestor || hasAncestor(s.source.sources[side], ancestor, side))
        || false;
}
function mergeInDocSettings(left, right) {
    const merged = Object.assign({}, mergeSettings(left, right), { includeRegExpList: mergeList(left.includeRegExpList, right.includeRegExpList) });
    return merged;
}
exports.mergeInDocSettings = mergeInDocSettings;
function takeRightThenLeft(left = [], right = []) {
    if (right.length) {
        return right;
    }
    return left;
}
function calcOverrideSettings(settings, filename) {
    const overrides = settings.overrides || [];
    const result = overrides
        .filter(override => checkFilenameMatchesGlob(filename, override.filename))
        .reduce((settings, override) => mergeSettings(settings, override), settings);
    return result;
}
exports.calcOverrideSettings = calcOverrideSettings;
function finalizeSettings(settings) {
    // apply patterns to any RegExpLists.
    const finalized = Object.assign({}, settings, { ignoreRegExpList: applyPatterns(settings.ignoreRegExpList, settings.patterns), includeRegExpList: applyPatterns(settings.includeRegExpList, settings.patterns) });
    finalized.name = 'Finalized ' + (finalized.name || '');
    finalized.source = { name: settings.name || 'src', sources: [settings] };
    return finalized;
}
exports.finalizeSettings = finalizeSettings;
function applyPatterns(regExpList = [], patterns = []) {
    const patternMap = new Map(patterns
        .map(def => [def.name.toLowerCase(), def.pattern]));
    return regExpList.map(p => patternMap.get(p.toString().toLowerCase()) || p);
}
const testNodeModules = /^node_modules\//;
function resolveFilename(filename, relativeTo) {
    if (testNodeModules.test(filename)) {
        filename = require.resolve(filename.replace(testNodeModules, ''));
    }
    return path.isAbsolute(filename) ? filename : path.resolve(relativeTo, filename);
}
function getGlobalSettings() {
    if (!globalSettings) {
        const globalConf = {};
        try {
            const cfgStore = new ConfigStore(packageName);
            Object.assign(globalConf, cfgStore.all);
        }
        catch (error) {
            console.log(error);
        }
        globalSettings = Object.assign({ id: 'global_config' }, normalizeSettings(globalConf || {}, __dirname));
    }
    return globalSettings;
}
exports.getGlobalSettings = getGlobalSettings;
function getCachedFileSize() {
    return cachedFiles.size;
}
exports.getCachedFileSize = getCachedFileSize;
function clearCachedFiles() {
    cachedFiles.clear();
}
exports.clearCachedFiles = clearCachedFiles;
function checkFilenameMatchesGlob(filename, globs) {
    if (typeof globs === 'string') {
        globs = [globs];
    }
    const matches = globs
        .filter(g => minimatch(filename, g, { matchBase: true }));
    return matches.length > 0;
}
exports.checkFilenameMatchesGlob = checkFilenameMatchesGlob;
function mergeSources(left, right) {
    const { source: a = { name: 'left' } } = left;
    const { source: b = { name: 'right' } } = right;
    return {
        name: [left.name || a.name, right.name || b.name].join('|'),
        sources: [left, right],
    };
}
/**
 * Return a list of Setting Sources used to create this Setting.
 * @param settings settings to search
 */
function getSources(settings) {
    if (!settings.source || !settings.source.sources || !settings.source.sources.length) {
        return [settings];
    }
    const left = settings.source.sources[0];
    const right = settings.source.sources[1];
    return right ? getSources(left).concat(getSources(right)) : getSources(left);
}
exports.getSources = getSources;
//# sourceMappingURL=CSpellSettingsServer.js.map