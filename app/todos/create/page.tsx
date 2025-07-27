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
			{/* <ul>
				<li className="flex items-end">
					<input
						className="w-full border-2 border-transparent border-b-slate-700 
				focus:outline-none text-xl py-2 placeholder:text-slate-600 mr-4"
						placeholder="Enter a task ..."
					/>
					<Cta
						hoverClasses="hover:[&>*]:stroke-slate-900 hover:bg-transparent"
						customClasses="w-11 h-11 cursor-pointer [&>*]:stroke-white rounded-full mr-2"
					>
						<Icon
							customClasses="h-full stroke-white p-2"
							as="plus"
						/>
					</Cta>
					<Cta
						hoverClasses="hover:[&>*]:stroke-slate-900 hover:bg-transparent"
						customClasses="w-11 h-11 cursor-pointer [&>*]:stroke-white rounded-full"
					>
						<Icon
							customClasses="h-full stroke-white p-2"
							as="trash"
						/>
					</Cta>
				</li>
			</ul> */}
		</form>
	);
}
