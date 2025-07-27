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
};

function InputFieldText({ addClick, removeClick }: InputFieldText) {
	return (
		<li className="flex items-end mb-2">
			<input
				className="w-full border-2 border-transparent border-b-slate-700 
                focus:outline-none text-xl py-2 placeholder:text-slate-600 mr-4"
				placeholder="Enter a task ..."
			/>
			<Cta
				hoverClasses="hover:[&>*]:stroke-slate-900 hover:bg-transparent"
				customClasses="w-11 h-11 cursor-pointer [&>*]:stroke-white rounded-full mr-2"
				onClick={addClick}
			>
				<Icon customClasses="h-full stroke-white p-2" as="plus" />
			</Cta>
			<Cta
				hoverClasses="hover:[&>*]:stroke-slate-900 hover:bg-transparent"
				customClasses="w-11 h-11 cursor-pointer [&>*]:stroke-white rounded-full"
				onClick={removeClick}
			>
				<Icon customClasses="h-full stroke-white p-2" as="trash" />
			</Cta>
		</li>
	);
}

export default function InputFieldsList({ number = 1 }: InputFieldsList) {
	const [num, setNum] = useState(number);
	const [arr, setArr] = useState(Array(num).fill(undefined));
	function addHandler(e: React.MouseEvent<HTMLElement, MouseEvent>) {
		e.preventDefault();
		return setArr([...arr, undefined]);
	}

	function removeHandler() {
		return setNum(num - 1);
	}

	useEffect(() => {
		console.log(arr);
	}, [arr]);

	return (
		<ul className="overflow-y-scroll">
			{arr.map((elmt, idx) => (
				<InputFieldText
					addClick={addHandler}
					removeClick={removeHandler}
					key={`${"input-" + idx}`}
				/>
			))}
		</ul>
	);
}
