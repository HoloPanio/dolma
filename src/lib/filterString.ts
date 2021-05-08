import { validationRegex } from "../util/regex";
import { MessageToken } from "../util/types/token";

export function filterString(message: string) {
	const tokens: MessageToken[] = []
	const vals = message.trim().split(validationRegex.global).filter(e => e != "" && e != " " && e != undefined).map(e => e.trim());

	vals.forEach(e => {
		if (e.match(validationRegex.block)) return tokens.push({ t: 'block', v: e.replace(validationRegex.block, '$1').trim() });
		if (e.match(validationRegex.mention)) return tokens.push({ t: 'mention', v: e.replace(validationRegex.mention, '$1') }); 
		if (e.match(validationRegex.emote)) return tokens.push({ t: 'emote', v: e.replace(validationRegex.emote, '$1') }); 
		if (e.match(validationRegex.link)) return tokens.push({ t: 'link', v: e.replace(validationRegex.link, '$1') }); 

		e.split(" ").forEach(str => tokens.push({ t: 'text', v: str }));
	});

	return tokens;
}