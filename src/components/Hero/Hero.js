import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Hero.module.scss";

const Hero = (props) => {
	return (
		<section className={classes.hero}>
			<div className={classes["hero__left"]}></div>
			<div className={classes["hero__right"]}>
				<div className={classes["hero__right-content"]}>
					<h1 className={classes["hero__title"]}>
						Next generation digital banking
					</h1>
					<p className="paragraph--light">
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<Button type="button" styles={["btn", "btn--invite"]}>
						Request Invite
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
