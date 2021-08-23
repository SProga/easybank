import React, { useState } from "react";
import classes from "./Navigation.module.scss";
import Button from "../UI/Button/Button";
import { Logo } from "../Logo/Logo";

const Navigation = () => {
	const [isNavShown, setIsNavShown] = useState(false);
	const navToggleHandler = () => {
		setIsNavShown(!isNavShown);
	};

	return (
		<div className={`${classes.navWrapper}`}>
			<nav className={`${classes.nav} row`}>
				<div className={classes.logo}>
					<a href="#0">
						<Logo color="#2D314D" />
						<span className="sr-only">Home navigation logo</span>
					</a>
				</div>

				<button
					aria-controls="navbarDropDown"
					className={classes["nav__toggler"]}
					onClick={navToggleHandler}
					aria-expanded="false">
					<span className={classes["nav__btn"]}>
						<span className="sr-only">Toggle Navigation</span>
					</span>
				</button>

				<div
					id="navbarDropDown"
					className={`${classes["nav__centered"]} ${
						classes[isNavShown ? "show__dropdown" : ""]
					}`}>
					<a href="#2">Home</a>
					<a href="#3">About</a>
					<a href="#4">Contact</a>
					<a href="#5">Blog</a>
					<a href="#6">Careers</a>
				</div>
				<Button type="button" styles={["btn", "btn--request"]}>
					Request Invite
				</Button>
			</nav>
		</div>
	);
};

export default Navigation;
