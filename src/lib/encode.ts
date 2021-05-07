import { MessageToken, Unitoken } from "../util/types/token";

type ArrayConstraints = Unitoken | MessageToken | Unitoken[] | MessageToken[];

export function encodeTokens(message: Array<ArrayConstraints> | string, options: any): MessageToken[] {
	const tokens: MessageToken[] = [];

	if (typeof message == 'string') {
		
	}


	return tokens;
}