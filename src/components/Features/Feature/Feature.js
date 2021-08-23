import React from "react";
import classes from "./Feature.module.scss";

const Feature = (props) => {
	return (
		<div className={classes.feature}>
			<img className={classes["feature__img"]} src={props.src} alt={props.title} />
			<h2 className={classes["feature__title"]}>{props.title}</h2>
			<p className={classes["feature__text"]}>{props.text}</p>
		</div>
	);
};

export default Feature;
