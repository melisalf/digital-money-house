import Card from "@/components/landingPage/Card";
import Navbar from "../components/layout/Navbar";
import { cardsData } from "@/data/landing";

const textHome = {
  title: "De ahora en adelante, haces más con tu dinero",
  subtitle1: "Tu nueva",
  subtitle2: "billetera virtual",
};

const buttonsLinks = [
  { href: "/login", text: "Ingresar", outline: true, solid: false },
  { href: "/signup", text: "Crear cuenta", outline: false },
];

export default function LandingPage() {
  return (
    <>
      <Navbar
        logoLink="/"
        logoClassName="fill-green"
        buttonsLinks={buttonsLinks}
      
      />
      <main className="relative w-full p-5 flex flex-col gap-20 grow md:px-10 bg-landing-image-desktop bg-cover bg-center bg-no-repeat 2xl:bg-[50%_25%]">
        <section className="w-3/4 py-5 flex flex-col gap-5 md:w-2/3  xl:max-w-[550px]">
          <h1 className="font-semibold text-3xl leading-9 md:font-normal text-4xl xl:font-normal text-4xl">
          De ahora en <br /> adelante, hacés <br /> más con tu
          dinero
          </h1>
          <div className="w-1/6 border-t-4 border-green md:w-1/4 md:hidden"></div>
          <h3 className=" text-xl text-green md:text-2xl xl:text-2xl">
            {textHome.subtitle1}   <span className="font-bold w-5/5">{textHome.subtitle2}</span>
          </h3>
        
        </section>
        <section className=" flex flex-col gap-5 self-center z-20 xl:flex-row">
          <Card
            title={cardsData.transfer.title}
            description={cardsData.transfer.description}
          />
          <Card
             title={cardsData.services.title}
			 description={cardsData.services.description}
          />
        </section>
        <div className="absolute bottom-0 left-0 w-full h-2/5 rounded-t-2xl bg-green z-10 md:h-1/3 xl:h-1/5"></div>
      </main>
    </>
  );
}
