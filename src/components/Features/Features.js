import React from "react";
import classes from "./Features.module.scss";
import Feature from "./Feature/Feature";
import featuresList from "./featurelist.data";

const Features = (props) => {
	const feature = featuresList.map((feature) => {
		return (
			<Feature
				key={feature.id}
				title={feature.title}
				text={feature.text}
				src={feature.img}
			/>
		);
	});
	return (
		<section className={classes.features}>
			<div className={classes["features__intro"]}>
				<div className={`${classes["features__info"]} row`}>
					<h2 className={classes["features__title"]}>Why Choose Easybank?</h2>
					<p className={`${classes["features__text"]} paragraph--light mt-s`}>
						We leverage Open Banking to turn your bank account into your
						financial hub. Control your finances like never before.
					</p>
				</div>
			</div>
			<div className={`${classes["features__content"]} row`}>{feature}</div>
		</section>
	);
};

export default Features;
