export interface Dream {
	name: string;
	description: string;
	author: string;
	published: boolean;
	url: string;
	type: "memory" | "dream";
	price?: number;
}
