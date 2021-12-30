/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Repo, User } from './interfaces';

const base_url = 'https://api.github.com/users/luk3skyw4lker';
const unshowed_repos = ['luk3skyw4lker', 'github-actions-continuous-delivery'];
const fetch_config: RequestInit = {
	mode: 'no-cors',
	headers: {
		Authorization: `token ${process.env.GITHUB_TOKEN}`
	}
};

export const getUserDetails = async () => {
	const response = await fetch(base_url, fetch_config);

	const user = await response.json();

	return user as User;
};

export const getUserRepos = async () => {
	const response = await fetch(`${base_url}/repos`, fetch_config);
	const repos = (await response.json()) as Repo[];

	if (!repos.length) {
		return [];
	}

	const return_repos = repos.filter((repo) => {
		if (!unshowed_repos.includes(repo.name) && !repo.fork) {
			return repo;
		}
	});

	const languages = return_repos.map(
		(repo) =>
			// eslint-disable-next-line implicit-arrow-linebreak
			new Promise((resolve, reject) => {
				fetch(
					`https://api.github.com/repos/luk3skyw4lker/${repo.name}/languages`,
					fetch_config
				)
					.then(async (res) => resolve(await res.json()))
					.catch(reject);
			})
	);

	const all_langs_array = await Promise.all(languages);
	const formatted_repos = all_langs_array.map((lang, idx) => {
		const langs = Object.keys(lang).map((key) => key);

		return { ...return_repos[idx], languages: langs };
	});

	return formatted_repos;
};
