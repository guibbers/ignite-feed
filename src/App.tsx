import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
					commodi aliquam dolor facere unde sit fugit perspiciatis fugiat
					molestiae magni assumenda. Reprehenderit eum architecto eaque culpa
					ratione harum consequatur odio?
				</main>
			</div>
		</>
	);
}

export default App;
