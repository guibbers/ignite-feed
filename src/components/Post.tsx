import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/guibbers.png"
						alt=""
					/>
					<div className={styles.authorInfo}>
						<strong>Guilherme Torres</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="9 de abril ao 12:08h" dateTime="2025-04-09 12:08:04">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraaa</p>
				<p>O Pedro voltou!!!</p>
				<p>
					<a>github.com/guibbers</a>
				</p>
				<p>
					<a>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a>
				</p>
			</div>
		</article>
	);
}
