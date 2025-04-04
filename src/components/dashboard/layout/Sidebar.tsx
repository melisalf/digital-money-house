"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import clsx from "clsx";
import {usePathname, useRouter} from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  
}
const Sidebar = ({isOpen, setIsOpen} : SidebarProps ) => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Inicio", path: "/dashboard" },
    { name: "Actividad", path: "/dashboard/activity" },
    { name: "Tu perfil", path: "/dashboard/profile" },
    { name: "Cargar dinero", path: "/dashboard/add-money" },
    { name: "Pagar servicios", path: "/dashboard/pay-services" },
    { name: "Tarjetas", path: "/dashboard/cards" },
  ];

  const logoutHandle = () => {
    localStorage.removeItem("authToken");
    Cookies.remove("authToken");
    router.push("/");
  };

  return (
    <nav className="w-full pl-8 py-4 md:pt-12 md:px-10 flex flex-col grow bg-green gap-3 items-start">
      {menuItems && menuItems.map((item, index) => (
        <Link
          key={`${item.name}-${index}`}
          href={item.path}
          className={clsx("text-[17px] text-dark1 hover:font-extrabold", {
            "font-extrabold": pathname === item.path && pathname.includes(item.path),
            "font-semibold": pathname !== item.path,
          })}
        >
          {item.name}
        </Link>
      ))}

      <button
        onClick={logoutHandle}
        className="text-[17px] font-semibold text-dark1/50 hover:font-extrabold"
      >
        Cerrar sesion
      </button>
    </nav>
  );
};

export default Sidebar;
