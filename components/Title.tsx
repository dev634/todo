type TitleType = {
	text: string;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	classes?: string;
};

export default function Title({ text, as, classes }: TitleType) {
	if (as === "h2") {
		return (
			<h2 className={`${classes ? classes : "text-3xl text-center"}`}>
				{text}
			</h2>
		);
	}
	if (as === "h3") {
		return (
			<h3 className={`${classes ? classes : "text-2xl text-center"}`}>
				{text}
			</h3>
		);
	}
	if (as === "h4") {
		return (
			<h4 className={`${classes ? classes : "text-xl text-center"}`}>
				{text}
			</h4>
		);
	}
	if (as === "h5") {
		return (
			<h5 className={`${classes ? classes : "text-lg text-center"}`}>
				{text}
			</h5>
		);
	}
	if (as === "h6") {
		return (
			<h6 className={`${classes ? classes : "text-base text-center"}`}>
				{text}
			</h6>
		);
	}
	return (
		<h1 className={`${classes ? classes : "text-4xl text-center"}`}>
			{text}
		</h1>
	);
}
