import React from "react";
import classes from "./Footer.module.scss";
import { Logo } from "../Logo/Logo";
import Button from "../UI/Button/Button";
import Socials from "../Socials/Socials";

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<div className={classes["footer__content"]}>
				<Logo color="#fff" />
				<Socials />
				<nav
					aria-label="footer navigation"
					className={classes["footer__navigation"]}>
					<a href="#8">About Us</a>
					<a href="#9">Contact</a>
					<a href="#10">Blog</a>
					<a href="#11">Careers</a>
					<a href="#12">Support</a>
					<a href="#13">Privacy Policy</a>
				</nav>
				<Button styles={["btn", "btn--invite-small"]} type="button">
					Request Invite
				</Button>
				<p className={`${classes.max} paragraph--light`}>
					&copy; Easybank.All Rights Reserved
				</p>
			</div>

			<div className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer">
					Frontend Mentor
				</a>
				. Coded by <a href="https://www.github.com/SProga">SProga</a>.
			</div>
		</footer>
	);
};

export default Footer;
