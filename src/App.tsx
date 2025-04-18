import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post />
				</main>
			</div>
		</>
	);
}

export default App;
