"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LanguageSettings = require("./LanguageSettings");
const RegPat = require("./RegExpPatterns");
const CSpellSettingsServer_1 = require("./CSpellSettingsServer");
const Path = require("path");
const index_1 = require("./index");
// cspell:ignore filetypes
const defaultRegExpExcludeList = [
    'SpellCheckerDisable',
    'Urls',
    'PublicKey',
    'RsaCert',
    'Base64',
    'SHA',
];
const defaultConfigFile = Path.join(__dirname, '..', '..', 'config', 'cspell-default.json');
const defaultRegExpPatterns = [
    // Exclude patterns
    { name: 'Urls', pattern: RegPat.regExMatchUrls },
    { name: 'HexDigits', pattern: RegPat.regExHexDigits },
    { name: 'HexValues', pattern: RegPat.regExMatchCommonHexFormats },
    { name: 'SpellCheckerDisable', pattern: RegPat.regExSpellingGuard },
    { name: 'PublicKey', pattern: RegPat.regExPublicKey },
    { name: 'RsaCert', pattern: RegPat.regExCert },
    { name: 'EscapeCharacters', pattern: RegPat.regExEscapeCharacters },
    { name: 'Base64', pattern: RegPat.regExBase64 },
    { name: 'Email', pattern: RegPat.regExEmail },
    { name: 'SHA', pattern: RegPat.regExSha },
    { name: 'href', pattern: RegPat.regExHRef },
    // Include Patterns
    { name: 'PhpHereDoc', pattern: RegPat.regExPhpHereDoc },
    { name: 'string', pattern: RegPat.regExString },
    { name: 'CStyleComment', pattern: RegPat.regExCStyleComments },
    { name: 'Everything', pattern: '.*' },
];
const defaultDictionaryDefs = [
    { name: 'companies', file: 'companies.txt.gz', type: 'S', description: 'List of companies.' },
    { name: 'css', file: 'css.txt.gz', type: 'S', description: 'CSS Keywords.' },
    { name: 'csharp', file: 'csharp.txt.gz', type: 'S', description: 'C# Keywords and common library functions.' },
    { name: 'dotnet', file: 'dotnet.txt.gz', type: 'S', description: '.Net keywords.' },
    { name: 'filetypes', file: 'filetypes.txt.gz', type: 'S', description: 'List of file types.' },
    { name: 'fonts', file: 'fonts.txt.gz', type: 'S', description: 'List of fonts.' },
    { name: 'html', file: 'html.txt.gz', type: 'S', description: 'HTML keywords.' },
    { name: 'misc', file: 'miscTerms.txt.gz', type: 'S', description: 'List of miscellaneous terms.' },
    { name: 'node', file: 'node.txt.gz', type: 'S', description: 'List of NodeJS terms.' },
    { name: 'npm', file: 'npm.txt.gz', type: 'S', description: 'List of Top 500 NPM packages.' },
    { name: 'powershell', file: 'powershell.txt.gz', type: 'S', description: 'Powershell Keywords.' },
    { name: 'softwareTerms', file: 'softwareTerms.txt.gz', type: 'S', description: 'Common Software Terms.' },
    { name: 'typescript', file: 'typescript.txt.gz', type: 'S', description: 'JavaScript and Typescript terms.' },
];
exports._defaultSettings = {
    id: 'static_defaults',
    language: 'en',
    name: 'Static Defaults',
    enabled: true,
    enabledLanguageIds: [
        'csharp', 'go', 'javascript', 'javascriptreact', 'json', 'markdown',
        'php', 'plaintext', 'python', 'text', 'typescript', 'typescriptreact',
        'html', 'css', 'less', 'scss',
        'latex', 'rust', 'toml',
    ],
    maxNumberOfProblems: 100,
    numSuggestions: 10,
    spellCheckDelayMs: 50,
    words: [],
    userWords: [],
    ignorePaths: [],
    allowCompoundWords: false,
    patterns: defaultRegExpPatterns,
    ignoreRegExpList: defaultRegExpExcludeList,
    languageSettings: LanguageSettings.getDefaultLanguageSettings(),
    dictionaryDefinitions: defaultDictionaryDefs,
    source: { name: 'defaultSettings' },
};
const getSettings = function () {
    let settings = undefined;
    return function () {
        if (!settings) {
            const jsonSettings = CSpellSettingsServer_1.readSettings(defaultConfigFile);
            settings = index_1.mergeSettings(exports._defaultSettings, jsonSettings);
            settings.name = jsonSettings.name || settings.name;
        }
        return settings;
    };
}();
function getDefaultSettings() {
    return getSettings();
}
exports.getDefaultSettings = getDefaultSettings;
//# sourceMappingURL=DefaultSettings.js.map