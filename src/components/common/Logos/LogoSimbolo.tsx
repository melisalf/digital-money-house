import React from "react";
import Link from "../../../../node_modules/next/link";

type LogoSimboloProps = {
  className: string;
  href: string | "/";
};

const LogoSimbolo = ({ className, href }: LogoSimboloProps) => {
  return (
    <Link href={href} className="flex items-center justify-center">
      <svg
        viewBox="0 0 87 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M63.4614 12.6817H77.3779V0H86.3076V33H77.3779V19.6942H63.4614"
          className={className}
        />
        <path
          d="M47.7787 0L43.7109 14.6506C43.5174 15.4518 43.3063 16.3242 43.0816 17.269C42.8556 18.2139 42.6459 19.1118 42.4524 19.9586C42.2589 20.8082 42.0965 21.5356 41.9679 22.1436H41.5809C41.4185 21.3746 41.225 20.5102 41.0004 19.5493C40.7744 18.5883 40.5484 17.6676 40.3224 16.7872C40.0964 15.9068 39.9029 15.2102 39.7418 14.6975L35.72 0H23.522C23.457 5.42216 23.4096 9.4257 23.4029 11.4442C23.4029 11.7623 23.3988 13.0454 23.3014 14.7432C23.2364 15.8813 23.2039 16.4503 23.1065 17.0919C22.9793 17.9294 22.7614 19.3131 21.9996 20.9142C21.6125 21.7289 21.0482 22.8871 19.8587 24.0172C19.4528 24.4037 18.6584 25.1929 17.3404 25.6989C16.339 26.0827 15.1603 26.2746 13.8044 26.2746H8.67019V6.72535C10.0803 6.73072 11.1818 6.72938 11.941 6.72535C12.6 6.72267 13.006 6.72133 13.4322 6.72535C13.6027 6.72804 13.7746 6.73072 13.9857 6.73609C15.3078 6.7683 16.0291 6.78575 16.8546 6.86225C17.2659 6.89983 17.8465 6.96559 18.5447 7.08504V0.344924C18.0035 0.259029 17.4283 0.185212 16.8207 0.130185C16.0291 0.0577111 15.2821 0.0268424 14.5906 0.022816C9.72571 0.0147633 4.86353 0.00805271 0 0V33H13.9004C17.5163 33 20.576 32.4081 23.0781 31.223C24.2486 30.6687 25.2879 29.9735 26.1973 29.1414C26.1973 29.1414 26.2027 29.1374 26.2041 29.1347C26.2217 29.1186 26.242 29.1038 26.2596 29.0864C26.3096 29.0394 26.3881 28.9642 26.4788 28.8757C26.9402 28.4355 27.5045 27.8328 28.0621 27.041C29.2759 25.315 29.8307 23.581 30.1853 21.9128C30.1866 21.9074 30.188 21.902 30.1893 21.8967C30.8633 19.1024 30.8957 16.857 30.9066 16.2168C30.9066 16.1994 30.9066 16.1792 30.9066 16.1604C30.9187 15.7847 30.9214 15.4706 30.9228 15.2505C30.9228 15.2357 30.9228 15.2223 30.9228 15.2075C30.958 13.3648 31.0148 11.1007 31.0811 8.454H31.1163C31.2774 9.09554 31.4627 9.87933 31.6738 10.8081C31.8836 11.7368 32.1015 12.6495 32.3275 13.546C32.5535 14.4425 32.747 15.2116 32.908 15.8518L37.7999 33H44.7745L49.6178 15.8518C49.8113 15.1471 50.0291 14.307 50.2714 13.3299C50.5136 12.3529 50.7396 11.408 50.9493 10.4954C51.1591 9.58272 51.312 8.88616 51.4094 8.40569H51.7965C51.7965 8.91838 51.7802 9.75049 51.7478 10.9034C51.7153 12.0562 51.6909 13.338 51.6747 14.7459C51.6584 16.1551 51.6503 17.5482 51.6503 18.9252V33H60.0769V0H47.7747H47.7787Z"
          className={className}
        />
      </svg>
    </Link>
  );
};

export default LogoSimbolo;
