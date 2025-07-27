"use client";
import { useRouter } from "next/navigation";
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
	url?: string;
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
	url,
}: CtaType) {
	const router = useRouter();
	function handleClick() {
		if (typeof url !== "string") {
			return router.push("/404");
		}
		router.push(url);
	}
	if (as === "button") {
		return (
			<button
				className={`${bgColor} ${textClasses} ${customClasses} ${hoverClasses} ${transitionClasses} ${shadowClasses}`}
				onClick={handleClick}
			>
				{text && text}
				{children}
			</button>
		);
	}
	return null;
}
