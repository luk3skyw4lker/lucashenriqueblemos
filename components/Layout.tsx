import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/layout.module.css';

const avatar_url = 'https://avatars2.githubusercontent.com/u/48929501?v=4';
export const siteTitle = 'Lucas Henrique';
const name = 'Lucas Henrique';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Lucas Henrique portfolium. See my projects!'
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>

			<header className={styles.header}>
				{home ? (
					<>
						<img
							src={avatar_url}
							className={`${styles.headerHomeImage} ${styles.borderCircle}`}
							alt={name}
						/>
						<h1 className={styles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<img
									src={avatar_url}
									className={`${styles.headerImage} ${styles.borderCircle}`}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={styles.headingLg}>
							<Link href='/'>
								<a className={styles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>

			<main>{children}</main>

			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
