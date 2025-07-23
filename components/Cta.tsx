import { ReactNode } from "react";

type CtaType = {
	as: "link" | "button";
	text?: string;
	bgColor?: string;
	textClasses?: string;
	customClasses?: string;
	hoverClasses?: string;
	transitionClasses?: string;
	shadowClasses?: string;
	children?: ReactNode;
};

export default function Cta({
	as = "button",
	text = "",
	bgColor = "bg-slate-900",
	textClasses = "text-gray-200",
	customClasses = "w-full h-16 px-4 border-none rounded cursor-pointer",
	hoverClasses = "hover:bg-gray-300 hover:text-slate-900 hover:shadow-xl/30",
	transitionClasses = "duration-200",
	shadowClasses = "shadow-xl/20",
	children,
}: CtaType) {
	if (as === "button") {
		return (
			<button
				className={`${bgColor} ${textClasses} ${customClasses} ${hoverClasses} ${transitionClasses} ${shadowClasses}`}
			>
				{text && text}
				{children}
			</button>
		);
	}
	return null;
}
