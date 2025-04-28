import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

type props = {
	content: string;
};

export function Comment({ content }: props) {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/guibbers.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Guilherme Torres</strong>
							<time title="9 de abril ao 12:08h" dateTime="2025-04-09 12:08:04">
								Cerca de 1h atrás
							</time>
						</div>

						<button type="button" title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer className="">
					<button type="button">
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
