import { MessageToken, MessageTokenType, Unitoken } from "../util/types/token";

export function filterUnitoken(token: any): MessageToken | null {
	const keys = Object.keys(token);
	const allowedKeys = ['mention', 'emote', 'block', 'link'];

	if (keys.length > 1 || !allowedKeys.includes(keys[0])) return null;

	const key = keys[0];

	if (key == 'mention') return { t: 'mention', v: token['mention'] ?? "invalidMention"}
	if (key == 'emote') return { t: 'emote', v: token['emote'] ?? "invalidEmote"}
	if (key == 'block') return { t: 'block', v: token['block'].trim() ?? "invalid block"}
	if (key == 'link') return { t: 'link', v: token['link'] ?? "https://invalid.url"}
	if (key == 'text') return { t: 'text', v: token['text'] ?? "invalid text block"}

	return null;
}