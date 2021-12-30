import {
	FacebookOutlined,
	InstagramOutlined,
	LinkedinOutlined,
	TwitterOutlined,
	MailOutlined
} from '@ant-design/icons';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/layout.module.css';

const avatar_url = 'https://avatars2.githubusercontent.com/u/48929501?v=4';
export const siteTitle = 'Lucas Henrique';
const name = 'Lucas Henrique';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Lucas Henrique portfolium. See my projects!'
				/>
				<meta name='og:title' content={siteTitle} />
			</Head>

			<header className={styles.header}>
				<Image
					src={avatar_url}
					className={`${styles.headerHomeImage} ${styles.borderCircle}`}
					alt={name}
					unsized
				/>
				<h1 className={styles.heading2Xl}>{name}</h1>

				<p className={styles.socialMedia}>
					<a
						href='https://www.facebook.com/lucashenriqueblemos/'
						target='_blank'
						rel='noreferrer'
					>
						<FacebookOutlined color='#fff' />
					</a>
					<a
						href='https://www.instagram.com/luk3_skyw4lker'
						target='_blank'
						rel='noreferrer'
					>
						<InstagramOutlined color='#fff' />
					</a>
					<a
						href='https://www.linkedin.com/lucashenriqueblemos'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedinOutlined color='#fff' />
					</a>
					<a
						href='https://twitter.com/luk3skyw4lker'
						target='_blank'
						rel='noreferrer'
					>
						<TwitterOutlined color='#fff' />
					</a>
					<a href='mailto:lucashenriqueblemos@gmail.com'>
						<MailOutlined color='#fff' />
					</a>
				</p>
			</header>

			<main>{children}</main>
		</div>
	);
}
