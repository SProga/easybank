import React from "react";
import classes from "./Articles.module.scss";
import articleData from "./article.data";
import Article from "./Article/Article";

const Articles = (props) => {
	const articles = articleData.map((article) => {
		return (
			<Article
				key={article.id}
				title={article.title}
				author={article.author}
				text={article.text}
				src={article.img}
				alt={article.alt}
			/>
		);
	});
	return (
		<section className={classes.articles}>
			<div className={`row ${classes["articles__content"]}`}>
				<h2 className={classes["articles__title"]}>Lastest Articles</h2>
				{articles}
			</div>
		</section>
	);
};

export default Articles;
