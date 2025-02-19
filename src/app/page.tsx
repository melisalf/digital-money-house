import CardLanding from "@/components/landingPage/CardLanding";
import Navbar from "../components/layout/Navbar";
import { cardsData } from "@/data/landing";

const textHome = {
  title: "De ahora en adelante, haces más con tu dinero",
  subtitle1: "Tu nueva",
  subtitle2: "billetera virtual",
};

const buttonsLinks = [
  { href: "/login", text: "Ingresar", outline: true, solid: false },
  { href: "/register", text: "Crear cuenta", outline: false },
];

export default function LandingPage() {
  return (
    <>
      <Navbar
        logoLink="/"
        logoClassName="fill-green"
        buttonsLinks={buttonsLinks}
      />
      <main className="relative justify-between w-full p-5 flex flex-col grow bg-bg-mobile bg-cover bg-center bg-no-repeat  md:px-10 md:bg-bg-desktop md:bg-[40%_25%]  ">
        <section className="w-4/6 py-8 pr-8 flex flex-col gap-5 md:w-2/3  xl:max-w-[550px]">
          <h1 className=" text-white font-semibold pr-8 text-[27px]/8 md:font-normal md:text-4xl md:leading-[50px] xl:font-normal xl:text-5xl">
            De ahora en <br /> adelante, hacés <br /> más con tu dinero
          </h1>
          <div className="w-1/6 border-t-4 border-green md:w-1/4 md:hidden"></div>
          <h3 className="block text-xl text-green md:text-2xl md:inline xl:text-4xl">
            {textHome.subtitle1}{" "}
            <span className="block font-bold w-5/5 md:inline">{textHome.subtitle2}</span>
          </h3>
        </section>
        <section className=" flex flex-col justify-between inline-flex gap-5 self-center z-20 md:px-20 md:py-10 md:justify-center md:gap-3 xl:py-4 xl:px-40 xl:flex-row">
          <CardLanding
            title={cardsData.transfer.title}
            paragraph={cardsData.transfer.description}
          />
          <CardLanding
            title={cardsData.services.title}
            paragraph={cardsData.services.description}
          />
        </section>
        <div  className="rounded-t-[20px] absolute bottom-0 left-0 w-full h-2/5 bg-green z-10 md:rounded-t-[30px] md:h-1/3 xl:h-1/4"></div>
      </main>
    </>
  );
}