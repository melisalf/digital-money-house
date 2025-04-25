"use client"
import { useState } from "react"
import clsx from "clsx"

const periods = [
  { label: "Hoy", value: "today" },
  { label: "Ayer", value: "yesterday" },
  { label: "Última semana", value: "week" },
  { label: "Últimos 15 días", value: "15days" },
  { label: "Último mes", value: "month" },
  { label: "Último año", value: "year" },
]

type PeriodFilterProps = {
  onApply: (value: string) => void
  onClear: () => void
}

const PeriodFilter = ({ onApply, onClear }: PeriodFilterProps) => {
  const [selected, setSelected] = useState<string>("")

  const handleApply = () => {
    if (selected) {
      onApply(selected)
    }
  }

  return (
    <div className="w-full md:w-72 p-5 bg-white rounded-lg border border-gray-300 shadow-md flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
        <span className="font-semibold text-base">Período</span>
        <button
          onClick={() => {
            setSelected("")
            onClear()
          }}
          className="text-sm font-semibold text-gray-500 hover:underline"
        >
          Borrar filtros
        </button>
      </div>

      {/* Opciones */}
      <div className="flex flex-col gap-3">
        {periods.map((period) => (
          <label
            key={period.value}
            className="flex items-center justify-between cursor-pointer"
          >
            <span
              className={clsx("text-sm text-black", {
                "font-bold": selected === period.value,
                "opacity-50": selected !== period.value,
              })}
            >
              {period.label}
            </span>
            <input
              type="radio"
              name="period"
              value={period.value}
              checked={selected === period.value}
              onChange={() => setSelected(period.value)}
              className={clsx(
                {
                  hidden: period.value === "Otro período",
                },
                "w-4 h-4 cursor-pointer appearance-none border-[1.6px] border-dark1 border-opacity-50 checked:bg-green rounded-full relative"
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

      {/* Botón aplicar */}
      <button
        onClick={handleApply}
        className="mt-4 bg-green text-dark1 text-sm font-bold py-2 rounded-lg shadow hover:opacity-90 transition"
        disabled={!selected}
      >
        Aplicar
      </button>
    </div>
  )
}

export default PeriodFilter
