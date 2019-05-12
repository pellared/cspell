"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// alias for uniqueFilterFnGenerator
exports.uniqueFn = uniqueFilterFnGenerator;
function uniqueFilterFnGenerator(extractFn) {
    const values = new Set();
    const extractor = extractFn || (a => a);
    return (v) => {
        const vv = extractor(v);
        const ret = !values.has(vv);
        values.add(vv);
        return ret;
    };
}
exports.uniqueFilterFnGenerator = uniqueFilterFnGenerator;
function unique(src) {
    return [...(new Set(src))];
}
exports.unique = unique;
function clean(src) {
    const r = src;
    for (const key of Object.keys(r)) {
        if (r[key] === undefined) {
            delete r[key];
        }
    }
    return r;
}
exports.clean = clean;
//# sourceMappingURL=util.js.map