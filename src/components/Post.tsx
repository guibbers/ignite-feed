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
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da RocketSeat. O nome do projeto é DoctorCare!
				</p>
				<p>
					<a href="">guibbers.design/doctorcare</a>
				</p>
				<p>
					<a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
					<a href="">#rocketseat</a>
				</p>
			</div>
		</article>
	);
}
