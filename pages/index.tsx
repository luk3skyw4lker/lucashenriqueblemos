/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

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
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={styles.headingMd}>
				<p className={styles.githubBio}>
					As it says my GitHub: <strong>{user.bio}</strong>
				</p>

				<p className={styles.bio}>
					I&apos;m 20 years old, Javascript Fullstack Developer, IoT enthusiast,
					musician, philosophy and economics self-taught having a little
					experience on teaching, as I was second coach of a robotics team of a
					local college of my city (
					<a
						className={styles.repoName}
						rel='noreferrer noopener'
						target='_blank'
						href='https://www.instagram.com/lego_ntq/'
					>
						@lego_ntq
					</a>
					). Actually working as Fullstack Developer at:&nbsp;
					<a
						className={styles.repoName}
						rel='noreferrer noopener'
						target='_blank'
						href='https://www.dialog.ci/'
					>
						Dialog.
					</a>
					&nbsp;Learning Go, Next.js and Flutter as new techs.
				</p>
			</section>

			<section className={styles.headingMd}>
				<h2>Projects:</h2>

				<ul className={styles.list}>
					{repos?.map(({ html_url, description, name, languages }, index) => (
						<li className={styles.listItem} key={index}>
							<Link href={html_url}>
								<a target='_blank' className={styles.repoName}>
									{name}
								</a>
							</Link>

							<p className={styles.repoDescription}>{description}</p>

							<small className={styles.lightText}>
								Languages: {languages.join(', ')}
							</small>
						</li>
					))}
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
		},
		revalidate: 86400
	};
};

export default Home;
