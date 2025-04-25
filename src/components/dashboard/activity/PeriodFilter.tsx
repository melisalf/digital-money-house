"use client"
import { useState } from "react"
import clsx from "clsx"
import ArrowFilterDownIcon from "@/components/common/Icons/ArrowFilterDownIcon";
import ArrowFilterRightIcon from "@/components/common/Icons/ArrowFilterRightIcon";

const periods = [
  { label: "Hoy", value: "today" },
  { label: "Ayer", value: "yesterday" },
  { label: "Última semana", value: "week" },
  { label: "Últimos 15 días", value: "15days" },
  { label: "Último mes", value: "month" },
  { label: "Último año", value: "year" },
  { label: "Otro período", value: "" },
]

type PeriodFilterProps = {
  onApply: (value: string) => void
  onClear: () => void
}

const PeriodFilter = ({ onApply, onClear }: PeriodFilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleApply = () => {
    if (selectedFilter) {
      onApply(selectedFilter)
    }
  }


  // const handleApplyFilter = () => {
  //   const today = new Date();
  //   const filteredActivities = allActivities.filter((activity) => {
  //     const activityDate = new Date(activity.dated);

  //     switch (selectedFilter) {
  //       case "Hoy":
  //         return (
  //           activityDate.getFullYear() === today.getFullYear() &&
  //           activityDate.getMonth() === today.getMonth() &&
  //           activityDate.getDate() === today.getDate()
  //         );

  //       case "Ayer":
  //         const yesterday = new Date(today);
  //         yesterday.setDate(today.getDate() - 1);
  //         return (
  //           activityDate.getFullYear() === yesterday.getFullYear() &&
  //           activityDate.getMonth() === yesterday.getMonth() &&
  //           activityDate.getDate() === yesterday.getDate()
  //         );

  //       case "Última semana":
  //         const oneWeekAgo = new Date(today);
  //         oneWeekAgo.setDate(today.getDate() - 7);
  //         return activityDate >= oneWeekAgo && activityDate <= today;

  //       case "Últimos 15 días":
  //         const fifteenDaysAgo = new Date(today);
  //         fifteenDaysAgo.setDate(today.getDate() - 15);
  //         return activityDate >= fifteenDaysAgo && activityDate <= today;

  //       case "Último mes":
  //         const oneMonthAgo = new Date(today);
  //         oneMonthAgo.setMonth(today.getMonth() - 1);
  //         return activityDate >= oneMonthAgo && activityDate <= today;

  //       case "Último año":
  //         const oneYearAgo = new Date(today);
  //         oneYearAgo.setFullYear(today.getFullYear() - 1);
  //         return activityDate >= oneYearAgo && activityDate <= today;

  //       case "Otro período":
  //         return true;

  //       default:
  //         return true;
  //     }
  //   });

  //   setActivities(filteredActivities);
  // };

  // const handleClearFilters = () => {
  //   setActivities(allActivities);
  //   setSelectedFilter("");
  // };

  return (
    <>
      <div
        onClick={(event) => event.stopPropagation()}
        className="absolute right-5 top-52 md:right-20 bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  z-50 "
        style={{ minWidth: "280px" }}
      >
        <div className="flex justify-between items-center px-6 pt-5 pb-2">
          <div className="flex gap-2">
            <h3 className="font-bold text-dark1">Período</h3>
            <span className="flex items-center pt-1">
              <ArrowFilterDownIcon />
            </span>
          </div>

          <button
              onClick={() => {
                setSelectedFilter("")
                onClear()
              }}
            className="text-dark1/50 text-base hover:underline"
          >
            Borrar filtros
          </button>
        </div>
        <hr className="md:border-t md:border-black " />

        <div className="flex flex-col gap-4 md:gap-5 px-6 pt-4">
        {periods.map((period) => (
          <label
            key={period.value}
            className="flex items-center justify-between cursor-pointer"
          >
            <span
              className={clsx("text-sm text-black", {
                "font-bold": selectedFilter === period.value,
                "opacity-50": selectedFilter !== period.value,
              })}
            >
              {period.label}
            </span>
            <input
              type="radio"
              name="period"
              value={period.value}
              checked={selectedFilter === period.value}
              onChange={() => setSelectedFilter(period.value)}
              className={clsx(
                {
                  hidden: period.label === "Otro período",
                },
                "w-4 h-4 border border-dark1 rounded-full appearance-none checked:bg-green checked:border-dark2 checked:after:bg-black checked:after:rounded-full checked:after:w-2 checked:after:h-2 relative cursor-pointer checked:after:block checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              )}
            />
             {period.label === "Otro período" && (
                <span className="w-4 h-4 flex justify-center items-center">
                  <ArrowFilterRightIcon />
                </span>
              )}
          </label>
        ))}
        </div>

        <div className="w-full px-6 pb-6 pt-2">
      {/* Botón aplicar */}
      <button
        onClick={handleApply}
        className="w-full mt-4 bg-green text-dark1 text-sm font-bold py-2 rounded-lg shadow hover:opacity-90 transition"
        disabled={!selectedFilter}
      >
        Aplicar
      </button>
        </div>
      </div>
    </>
  );
};

export default PeriodFilter;




