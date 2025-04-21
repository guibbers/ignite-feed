import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/guibbers.png" alt="" />
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
					<a href="#">github.com/guibbers</a>
				</p>
				<p>
					<a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
					<a href="#">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário" />
				<footer>
					<button type="submit">Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
			</div>
		</article>
	);
}
