import Cta from "@/components/Cta";
import InputFieldsList from "@/components/Forms/InputFieldsList";
import Title from "@/components/Title";

export default function Create() {
	return (
		<form className="w-full py-4 overflow-y-auto">
			<Title
				as="h2"
				classes="mb-4 text-3xl text-center"
				text="Create todo"
			/>
			<input
				className="mb-4 w-full border-2 border-transparent border-b-slate-700 
				focus:outline-none text-xl py-2 placeholder:text-slate-600"
				placeholder="Enter a title ..."
			/>
			<InputFieldsList number={1} />
			<Cta
				customClasses="w-full h-12 px-4 mb-4 border-none rounded cursor-pointer"
				text="ENVOYER"
			/>
		</form>
	);
}
