import Title from "@/components/Title";

export default function Home() {
	return (
		<div className="h-screen flex flex-col items-start">
			<div className="py-4 w-full bg-slate-900">
				<Title text="My Todos" />
			</div>
			<div className="flex flex-1 w-full bg-white">TEXT</div>
			<footer className="py-2 text-center bg-slate-900 w-full">
				&copy;&nbsp;Crée par Mathieu Tourret
			</footer>
		</div>
	);
}
