import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

// TYPES -----------------------------------------------------------

type props = {
	author: Author;
	content: ContentLine[];
	publishedAt: Date;
};

type ContentLine = {
	type: 'paragraph' | 'link';
	content: string;
};

type Author = {
	avatarUrl: string;
	name: string;
	role: string;
};

// ---------------------------------------------------------------------------

export function Post({ author, content, publishedAt }: props) {
	// ----------------------- CONSTANTS AND VARIABLES AND STATES -------------------------
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL à's' HH:mm'h'",
		{ locale: ptBR },
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const [comments, setComments] = useState([{}]);
	const [newCommentTest, setNewCommentText] = useState('');

	// -------------------------------------------------------------------------

	// ------------------------------ FUNCTIONS --------------------------------

	function handleCreateNewComment(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const newComment = e.target.comment.value;

		setComments([
			...comments,
			{ id: comments.length + 1, content: newComment },
		]);

		setNewCommentText('');

		console.log(comments);
	}

	function handleNewCommentChange(e) {
		setNewCommentText(e.target.value);
	}
	// -------------------------------------------------------------------------

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					}

					if (line.type === 'link') {
						return (
							<p key={line.content}>
								<a
									href="http://localhost:3000"
									target="_blank"
									rel="noreferrer"
								>
									{line.content}
								</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					onChange={handleNewCommentChange}
					value={newCommentTest}
					placeholder="Deixe um comentário"
					name="comment"
				/>
				<footer>
					<button type="submit">Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment key={comment.id} content={comment.content} />;
				})}
			</div>
		</article>
	);
}
