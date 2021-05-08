"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeTokens = void 0;
var decode_1 = require("./decode");
var filterString_1 = require("./filterString");
var filterUnitoken_1 = require("./filterUnitoken");
function encodeTokens(message) {
    var tokens = [];
    if (!message)
        return tokens;
    if (typeof message == 'string') {
        filterString_1.filterString(message).map(function (tk) { return tokens.push(tk); });
        return tokens;
    }
    if (typeof message == 'object') {
        message.forEach(function (item, index) {
            var unitoken = filterUnitoken_1.filterUnitoken(item);
            var isToken = Object.keys(item).includes('t') && Object.keys(item).includes('v');
            if (typeof item == 'string')
                return filterString_1.filterString(item).map(function (tk) { return tokens.push(tk); });
            if (unitoken !== null)
                return tokens.push(unitoken);
            if (isToken)
                return tokens.push(item);
            return;
        });
    }
    return tokens;
}
exports.encodeTokens = encodeTokens;
var tkns = encodeTokens(["Hello gamers!", { emote: 'pepowave' }, "I am glad to see @HoloPanio here, he likes to go `brrrrr`, but ya know, he likes to use", { t: 'link', v: 'https://google.com' }]);
console.log(tkns);
console.log(decode_1.decodeTokens("Ye Ye Bitch"));
