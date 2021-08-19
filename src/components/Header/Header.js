import React from "react";
import classes from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";

const Header = () => {
	return (
		<header className={`${classes.header} container`}>
			<Navigation />
			<Hero />
		</header>
	);
};

export default Header;
