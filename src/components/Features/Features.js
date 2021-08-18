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
				<h2 className={classes["features__title"]}>Why Choose Easybank?</h2>
				<p className="paragraph--light mt-s">
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</div>
			{feature}
		</section>
	);
};

export default Features;
