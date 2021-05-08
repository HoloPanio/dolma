import { decodeTokens } from "./lib/decode";
import { encodeTokens } from "./lib/encode";

export function kefler() {
	console.log('bruh');
}

kefler['encode'] = encodeTokens;
kefler['decode'] = decodeTokens