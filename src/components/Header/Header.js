import React from "react";
import classes from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
	return (
		<header className={`${classes.header} container`}>
			<Navigation />
		</header>
	);
};

export default Header;
