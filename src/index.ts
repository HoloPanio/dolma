import { decodeTokens } from "./lib/decode";
import { encodeTokens } from "./lib/encode";
import { MessageToken, Unitoken } from "./util/types/token";

interface RootMethodResponse {
	encoded: MessageToken[],
	decoded: string
}

export * from './util/types/token';

export function kefler(values?: Array<Unitoken | MessageToken | string> | string): RootMethodResponse {
	return {
		encoded: encodeTokens(values ?? ""),
		decoded: decodeTokens(values ?? "")
	}
}

kefler['encode'] = encodeTokens;
kefler['decode'] = decodeTokens