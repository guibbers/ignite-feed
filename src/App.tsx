import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/guibbers.png',
			name: 'Guilherme Torres',
			role: 'Web developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraaa' },
			{ type: 'paragraph', content: 'O Pedro voltou!!!' },
			{ type: 'link', content: 'github.com/guibbers' },
		],
		publishedAt: new Date('2024-04-25 00:00:01'),
	},

	{
		id: 2,
		author: {
			avatarUrl:
				'https://media.licdn.com/dms/image/v2/D4D03AQH1zDw-pSTriA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722022988877?e=1751500800&v=beta&t=7DlpoROeD66Sr55NOdWUahAJK3FR9dZKkXZXNCRIc9U',
			name: 'Laura Aguiar',
			role: 'filmmaker',
		},
		content: [
			{ type: 'paragraph', content: 'Oi, gente!' },
			{ type: 'paragraph', content: 'Eu amo muito o gui' },
			{ type: 'link', content: 'gui.com' },
		],
		publishedAt: new Date('2024-04-24 00:00:01'),
	},
];

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</>
	);
}

export default App;
