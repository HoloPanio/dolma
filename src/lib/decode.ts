import { MessageToken, Unitoken } from "../util/types/token";
import { encodeTokens } from "./encode";

export function decodeTokens(all: Array<Unitoken | MessageToken | string> | string): string {
	const tokens = encodeTokens(all);
	let vals: string[] = [];

	tokens.forEach(tkn => {
		if (tkn.t == 'text') return vals.push(tkn.v);
		if (tkn.t == 'block') return vals.push(`\`${tkn.v}\``);
		if (tkn.t == 'emote') return vals.push(`:${tkn.v}:`);
		if (tkn.t == 'mention') return vals.push(`@${tkn.v}`);
		if (tkn.t == 'link') return vals.push(tkn.v);
	});

	return vals.join(' ');
}