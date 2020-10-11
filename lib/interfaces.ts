export interface User {
	twitter_username: string;
	avatar_url: string;
	login: string;
	name: string;
	bio: string;
}

export interface Repo {
	description: string;
	languages: string[];
	full_name: string;
	created_at: Date;
	updated_at: Date;
	html_url: string;
	fork: boolean;
	name: string;
}
