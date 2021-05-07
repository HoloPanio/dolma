export const validationRegex = {
	url: /(https?\:\/\/[^ ]+)/gi,
	mention: /\@([a-zA-Z0-9_]+){4,}/gi,
	emote: /\:([a-z0-9]+)\:/gi,
	block: /\`(.*?)\`/gi
}