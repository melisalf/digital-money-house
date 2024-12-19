import LogoNavbar from "../common/LogoNavbar";
import Link from "../../../node_modules/next/link";
import { clsx } from 'clsx'



type Link = {
	href: string;
	text: string;
	outline?: boolean;
	solid?: boolean;
};

interface NavbarProps {
  	logoClassName: string;
	logoLink: string;
	navbarClassName?: string;
	buttonsLinks?: Link[];
	
}

export default function Navbar({ logoClassName, logoLink, navbarClassName, buttonsLinks }: NavbarProps) {
	
	return (
		<header className={clsx (' h-[7.5vh] px-5 py-2.5 flex flex-row justify-between md:h-[8vh]  xl:px-5 h-[10vh] ', navbarClassName)} >
			<LogoNavbar className={logoClassName} href={logoLink} />
			<div className="flex flex-row gap-5">
				{ buttonsLinks && buttonsLinks.map((link, index) => (
					<Link
					key={`${link.text}-${index}`}
					href={link.href}
					className={clsx(
						" border-2 px-4 py-2 rounded-md font-bold text-sm text-center",
						{
							"bg-green text-black border-green": !link.outline,
							"border-green text-green": link.outline,
							"bg-dark-2 text-white": link.solid,
						}
					)}

				>
					{link.text}
				</Link>
				))}
			</div>
		</header>
	);
}