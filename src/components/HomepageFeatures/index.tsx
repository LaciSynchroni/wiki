import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Focused on Self-Hosting",
		Svg: require("@site/static/img/undraw_server-down_lxs9.svg").default,
		description: (
			<>
				Laci Synchroni is focused on self-hosting. We don't want you to join one big server.
				Instead, we want to empower you to host your own, for your friends, FC or community!
			</>
		),
	},
	{
		title: "Collaboration and Compatibility",
		Svg: require("@site/static/img/undraw_remote-design-team_qfqr.svg").default,
		description: (
			<>
				We are commited to maintaining compatibility with the v33 Mare API. All features
				that are planned are not going to break that API, so that we can maintain compatibility
				with as many services as possible!
			</>
		),
	},
	{
		title: "Multi-Connect Client",
		Svg: require("@site/static/img/undraw_server-status_7viz.svg").default,
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can
				be extended while reusing the same header and footer.
			</>
		),
	},
];

function Feature({ title, Svg, description }: Readonly<FeatureItem>) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
