import Cta from "@/components/Cta";
import Icon from "@/components/Icons";

export default function Home() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			<Cta
				as="button"
				hoverClasses="hover:bg-gray-300 hover:shadow-xl/30 hover:text-slate-900 hover:[&>.icon]:stroke-slate-900"
				customClasses="flex justify-center items-center w-24 h-24 border-none rounded mb-5 cursor-pointer rounded-full"
				textClasses="text-gray-200 text-xl"
				url="/todos/create"
			>
				<Icon
					as="plus"
					customClasses="icon"
					height="h-12"
					color="stroke-gray-200"
				/>
			</Cta>
			<Cta
				as="button"
				hoverClasses="hover:bg-gray-300 hover:shadow-xl/30 hover:text-slate-900 hover:[&>.icon]:stroke-slate-900"
				customClasses="flex justify-center items-center w-24 h-24 border-none rounded mb-5 cursor-pointer rounded-full"
				textClasses="text-gray-200 text-xl"
				url="/todos"
			>
				<Icon
					as="eye"
					customClasses="icon"
					height="h-10"
					color="stroke-gray-200"
				/>
			</Cta>
		</div>
	);
}
