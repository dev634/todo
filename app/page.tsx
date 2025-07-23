import Cta from "@/components/Cta";
import Icon from "@/components/Icons";

export default function Home() {
	return (
		<div className="flex flex-1 w-full bg-white justify-center items-center px-8">
			<div className="flex flex-col w-full">
				<Cta
					as="button"
					hoverClasses="hover:bg-gray-300 hover:text-slate-900 hover:shadow-xl/30"
					customClasses="flex justify-center items-center w-full h-12 px-4 border-none rounded mb-5 cursor-pointer"
					textClasses="text-gray-200 text-xl"
				>
					<p className="mr-6">Ajouter une todo</p>
					<Icon height="h-8" color="stroke-gray-200" />
				</Cta>
				<Cta
					as="button"
					text="Voir mes todos"
					customClasses="w-full h-12 px-4 border-none rounded cursor-pointer"
					textClasses="text-gray-200 text-xl"
				/>
			</div>
		</div>
	);
}
