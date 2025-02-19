import Navbar from "@/components/layout/Navbar";
import Cookies from "js-cookie";


export const metadata = {
	title: "Home",
	description: "Digital Money Home",
};

export default async function HomeLayout({
	children,
}: {
	children: React.ReactNode;
	}) {

        const isLogged = Cookies.get("")
	
	return (
		<>
              	<Navbar
				logoLink="/"
				logoClassName="fill-primary"
                isLogged
				userName={`${userInfo.firstname} ${userInfo.lastname}`}
			/>
			<div className="w-full h-full flex flex-row grow">
				<main className="w-full p-5 flex flex-col grow gap-5 items-center bg-gray1 md:p-10 xl:px-20">
					{children}
				</main>
			</div>
			</>
	);
}
