import './global.css';
import { Post } from './Post';
import { Header } from './components/Header';

function App() {
	return (
		<>
			<Header />
			<h1>Hello World</h1>

			<Post author="Guilherme" content="lorem" />
		</>
	);
}

export default App;
