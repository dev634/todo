"use client";
import { useEffect, useState } from "react";
import Cta from "../Cta";
import Icon from "../Icons";

type InputFieldsList = {
	number: number;
};

type InputFieldText = {
	addClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	removeClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	currentIdx: number;
	listLength: number;
};

function InputFieldText({
	addClick,
	removeClick,
	listLength,
	currentIdx,
}: InputFieldText) {
	const [isVisible, setIsVisible] = useState(listLength - 1 === currentIdx);

	function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setIsVisible(false);
		return addClick(e);
	}

	return (
		<li className="flex items-end justify-between mb-2">
			<input
				className="w-full border-2 border-transparent border-b-slate-700 
                focus:outline-none text-xl py-2 placeholder:text-slate-600 mr-4"
				placeholder="Enter a task ..."
			/>
			<Cta
				hoverClasses="hover:[&>*]:stroke-slate-900 hover:bg-transparent"
				customClasses={`w-11 h-11 cursor-pointer [&>*]:stroke-white rounded-full ${
					listLength - 1 === currentIdx && "mr-2"
				}`}
				onClick={removeClick}
			>
				<Icon customClasses="h-full stroke-white p-2" as="trash" />
			</Cta>
			{listLength - 1 === currentIdx && (
				<Cta
					hoverClasses="hover:[&>*]:stroke-slate-900 hover:bg-transparent"
					customClasses="w-11 h-11 cursor-pointer [&>*]:stroke-white rounded-full"
					onClick={handleClick}
				>
					<Icon customClasses="h-full stroke-white p-2" as="plus" />
				</Cta>
			)}
		</li>
	);
}

export default function InputFieldsList({ number = 1 }: InputFieldsList) {
	const arrContent = [];
	for (let val = 0; val < number; val++) {
		arrContent.push(val);
	}
	const [arr, setArr] = useState(arrContent);
	function addHandler(
		e: React.MouseEvent<HTMLElement, MouseEvent>,
		idx: number
	) {
		e.preventDefault();
		return setArr([...arr, idx + 1]);
	}

	function removeHandler(
		e: React.MouseEvent<HTMLElement, MouseEvent>,
		idx: number
	) {
		e.preventDefault();
		if (arr.length === 1) {
			return;
		}
		const array = [...arr];
		array.splice(idx - 1, 1);
		return setArr([...array]);
	}

	return (
		<ul className="overflow-y-scroll mb-8">
			{arr.map((elmt, idx) => (
				<InputFieldText
					addClick={(e) => addHandler(e, idx)}
					removeClick={(e) => removeHandler(e, idx)}
					key={`${"input-" + idx}`}
					currentIdx={idx}
					listLength={arr.length}
				/>
			))}
		</ul>
	);
}
