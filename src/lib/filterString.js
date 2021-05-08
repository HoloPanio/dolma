"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterString = void 0;
var regex_1 = require("../util/regex");
function filterString(message) {
    var tokens = [];
    var vals = message.trim().split(regex_1.validationRegex.global).filter(function (e) { return e != "" && e != " " && e != undefined; }).map(function (e) { return e.trim(); });
    vals.forEach(function (e) {
        if (e.match(regex_1.validationRegex.block))
            return tokens.push({ t: 'block', v: e.replace(regex_1.validationRegex.block, '$1') });
        if (e.match(regex_1.validationRegex.mention))
            return tokens.push({ t: 'mention', v: e.replace(regex_1.validationRegex.mention, '$1') });
        if (e.match(regex_1.validationRegex.emote))
            return tokens.push({ t: 'emote', v: e.replace(regex_1.validationRegex.emote, '$1') });
        if (e.match(regex_1.validationRegex.link))
            return tokens.push({ t: 'link', v: e.replace(regex_1.validationRegex.link, '$1') });
        e.split(" ").forEach(function (str) { return tokens.push({ t: 'text', v: str }); });
    });
    return tokens;
}
exports.filterString = filterString;
