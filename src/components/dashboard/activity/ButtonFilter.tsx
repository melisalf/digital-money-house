"use client";
import FilterIcon from "@/components/common/Icons/FilterIcon";
import { useState } from "react";
import PeriodFilter from "./PeriodFilter";

const ButtonFilter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPeriodFilter = () => {
    setIsOpen(true);
  };

  const closePeriodFilter = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className=" relative md:rounded-[10px] md:p-5  md:bg-green md:shadow-md">
        <button className="gap-3 md:gap-16 flex justify-between items-center"
        onClick={openPeriodFilter}>
          <span className="text-black underline decoration-1 md:no-underline text-base font-semibold md:font-bold">Filtrar</span>
          <FilterIcon
          className="items-center" />
        </button>
      </div>

      {isOpen && (
        <>
         {/* <div
          onClick={() => setIsOpen(false)}
          className=
            "fixed inset-0 z-30 bg-black/50 transition-opacity duration-500"
          
        /> */}
        <PeriodFilter
        closePeriodFilter={closePeriodFilter}
        isOpen = {isOpen}
        setIsOpen = {setIsOpen}
        />
        </>
      )}
    </>
  );
};

export default ButtonFilter;
