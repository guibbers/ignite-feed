import igniteLogo from '../assets/Ignite simbol.svg';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="logotipo do ignite" />
			<h2>Ignite Feed</h2>
		</header>
	);
}
