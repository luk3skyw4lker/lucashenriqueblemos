/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Collapsible from 'react-collapsible';

import Layout, { siteTitle } from '../components/Layout';
import { getUserDetails, getUserRepos } from '../lib/fetcher';
import { Repo, User } from '../lib/interfaces';
import styles from '../styles/Home.module.css';

interface HomeProps {
	repos?: Repo[];
	user: User;
}

const Home: NextPage<HomeProps> = ({ user, repos }) => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={styles.headingMd}>
				<p>{user.bio}</p>
			</section>

			<section className={styles.headingMd}>
				<ul className={styles.list}>
					<Collapsible
						trigger='Projects'
						easing='ease-in'
						triggerTagName='div'
						triggerClassName={styles.trigger}
						triggerOpenedClassName={styles.trigger}
						className={styles.triggerContainer}
					>
						{repos?.map(({ html_url, description, name, languages }, index) => (
							<li className={styles.listItem} key={index}>
								<Link href={html_url}>
									<a target='_blank' className={styles.repoName}>
										{name}
									</a>
								</Link>

								<p>{description}</p>

								<small className={styles.lightText}>
									Languages: {languages.join(', ')}
								</small>
							</li>
						))}
					</Collapsible>
				</ul>
			</section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const user = await getUserDetails();
	const repos = await getUserRepos();

	return {
		props: {
			user,
			repos
		}
	};
};

export default Home;
