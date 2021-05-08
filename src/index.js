"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kefler = void 0;
var decode_1 = require("./lib/decode");
var encode_1 = require("./lib/encode");
function kefler() {
    console.log('bruh');
}
exports.kefler = kefler;
kefler['encode'] = encode_1.encodeTokens;
kefler['decode'] = decode_1.decodeTokens;
