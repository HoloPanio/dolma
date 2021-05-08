"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUnitoken = void 0;
function filterUnitoken(token) {
    var _a, _b, _c, _d;
    var keys = Object.keys(token);
    var allowedKeys = ['mention', 'emote', 'block', 'link'];
    if (keys.length > 1 || !allowedKeys.includes(keys[0]))
        return null;
    var key = keys[0];
    if (key == 'mention')
        return { t: 'mention', v: (_a = token['mention']) !== null && _a !== void 0 ? _a : "invalidMention" };
    if (key == 'emote')
        return { t: 'emote', v: (_b = token['emote']) !== null && _b !== void 0 ? _b : "invalidEmote" };
    if (key == 'block')
        return { t: 'block', v: (_c = token['block']) !== null && _c !== void 0 ? _c : "invalid block" };
    if (key == 'link')
        return { t: 'link', v: (_d = token['link']) !== null && _d !== void 0 ? _d : "https://invalid.url" };
    return null;
}
exports.filterUnitoken = filterUnitoken;
