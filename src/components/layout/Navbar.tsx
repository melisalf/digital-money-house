import LogoNavbar from "../common/LogoNavbar";
import Link from "../../../node_modules/next/link";
import { clsx } from "clsx";
import { UserDataType } from "@/types/user.types";

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
  isLogged?: boolean;
  userName?: string;
}

export default function Navbar({
  logoClassName,
  logoLink,
  navbarClassName,
  buttonsLinks,
  isLogged,
  userName,
}: NavbarProps) {
  return (
    <header
      className={clsx(
        "px-5 py-3 flex flex-row justify-between items-center",
        navbarClassName
      )}
    >
      <LogoNavbar className={logoClassName} href={logoLink} />
      <div className="flex flex-row gap-5">
        {buttonsLinks &&
          buttonsLinks.map((link, index) => (
            <Link
              key={`${link.text}-${index}`}
              href={link.href}
              className={clsx(
                " border-2 px-5 py-2 rounded-[5px] font-bold text-sm text-center",
                {
                  "bg-green text-black border-none": !link.outline,
                  "border-green text-green": link.outline,
                  "bg-secondary text-white": link.solid,
                }
              )}
            >
              {link.text}
            </Link>
          ))}
        {isLogged && userName && (
          <div>
            <div className="w-[43px] h-10 bg-green rounded-xl">
              <span className="text-center text-dark1 text-xl font-bold">
                {userName}
              </span>
            </div>
            <h1 className={` hidden tablet:block`}>Hola, {userName}</h1>
          </div>
        )}
      </div>
    </header>
  );
}
