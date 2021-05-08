"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeTokens = void 0;
var encode_1 = require("./encode");
function decodeTokens(all) {
    var tokens = encode_1.encodeTokens(all);
    var vals = [];
    tokens.forEach(function (tkn) {
        if (tkn.t == 'text')
            return vals.push(tkn.v);
        if (tkn.t == 'block')
            return vals.push("`" + tkn.v + "`");
        if (tkn.t == 'emote')
            return vals.push(":" + tkn.v + ":");
        if (tkn.t == 'mention')
            return vals.push("@" + tkn.v);
        if (tkn.t == 'link')
            return vals.push(tkn.v);
    });
    return vals.join(' ');
}
exports.decodeTokens = decodeTokens;
