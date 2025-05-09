import { Pencil } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>

			<div className={styles.profile}>
				<Avatar src="https://github.com/guibbers.png" />
				<strong>Guilherme Torres</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<Pencil size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
