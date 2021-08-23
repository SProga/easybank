import classes from "./Article.module.scss";

const Article = (props) => {
	return (
		<div className={classes.card}>
			<figure className={classes["card__wrapper"]}>
				<img
					src={props.src}
					alt={props.title}
					className={classes["card__wrapper-img"]}
				/>
			</figure>
			<div className={classes["card__content"]}>
				<small>{props.author}</small>
				<a href={`#${props.id}`} className={classes["card__title"]}>
					{props.title}
				</a>
				<p className={classes["card__text"]}>{props.text}</p>
			</div>
		</div>
	);
};

export default Article;
