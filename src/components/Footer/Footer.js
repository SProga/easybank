import React from "react";
import classes from "./Footer.module.scss";
import { Logo } from "../Logo/Logo";
import Button from "../UI/Button/Button";
import Socials from "../Socials/Socials";

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<div className={classes["footer__content"]}>
				<Logo color="#fff" id="footer" />
				<Socials />
				<nav
					aria-label="footer navigation"
					className={classes["footer__navigation"]}>
					<a href="/">About Us</a>
					<a href="/">Contact</a>
					<a href="/">Blog</a>
					<a href="/">Careers</a>
					<a href="/">Support</a>
					<a href="/">Privacy Policy</a>
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
