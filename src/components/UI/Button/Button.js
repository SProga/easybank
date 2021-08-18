import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
	const styles = props.styles.map((style) => {
		return classes[style];
	});

	return (
		<button
			className={styles.join(" ")}
			type={props.type}
			onClick={props.action}>
			{props.children}
		</button>
	);
};
export default Button;
