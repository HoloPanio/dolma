export const tokenTypes = [ 
	'text',
	'mention',
	'link',
	'emote',
	'block'
] as const;

export type MessageTokenType = 
	| 'text'
	| 'mention'
	| 'link'
	| 'emote'
	| 'block'

export interface MessageToken {
	t: MessageTokenType;
	v: string;
}

export interface Unitoken {
	mention?: string,
	link?: string,
	emote?: string,
	block?: string
}