"use client";
import InputText from "@/components/form/InputText";
import SubmitButton from "@/components/form/SubmitButton";
import { CardScheme } from "@/schemes/card.scheme";
import { newCard } from "@/services/cards.service";
import { CardBodyType, CardType } from "@/types/card.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ImageCard from "./ImageCard";
import { toast, Toaster } from "sonner";

type AddCardProps = {
  account_id: number;
  token: string;
  cardsList: CardType[];
};

type CardFormData = {
  numberCard: string;
  nameTitular: string;
  expirationDate: string;
  securityCode: string;
};

const cardValues = {
  numberCard: "4556365487965698",
  nameTitular: "MELISA LUCIA FERRARIS",
  expirationDate: "1028",
  securityCode: "265",
};

const AddCard = ({ token, account_id, cardsList }: AddCardProps) => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const convertDateFormat = (dateExpiry: string): string => {
    const [month, year] = dateExpiry.split("/");
    const fullYear = year.length === 2 ? `20${year}` : year; // Agregar '20' si el año es de 2 dígitos
    return `${month}/${fullYear}`;
  };

  const CardFormMethods = useForm<CardFormData>({
    resolver: yupResolver(CardScheme),
    defaultValues: {
      numberCard: "",
      nameTitular: "",
      expirationDate: "",
      securityCode: "",
    },
    mode: "onChange",
  });
  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = CardFormMethods;

  const cardValues = watch();

  const onSubmitAddCard = async (data: CardFormData) => {
    try {
      if (cardsList.length > 9) {
        setServerError(
          "Ya no puedes agregar una nueva tarjeta. (Máximo de 10 tarjetas de credito asociadas a una cuenta)."
        );
      }

      if (cardsList.length <= 9) {
        const requestBody: CardBodyType = {
          cod: Number(data.securityCode),
          expiration_date: convertDateFormat(data.expirationDate),
          first_last_name: data.nameTitular,
          number_id: Number(data.numberCard),
        };

        const response = await newCard(account_id, token, requestBody);
        reset();
        toast.success("Tarjeta agregada con éxito");
        router.push("/dashboard/cards");
        router.refresh();
      }
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
        toast.error("Error al crear la tarjeta");
      } else {
        setServerError("Error desconocido al crear la tarjeta", error);
        toast.error("Error al crear la tarjeta");
      }
    }
  };

  return (
    <section className="w-full flex flex-col items-center gap-5 rounded-[10px] p-6  md:p-8 xl:px-28 xl:py-10  bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <ImageCard
        number={cardValues.numberCard || ""}
        name={cardValues.nameTitular || ""}
        expiry={cardValues.expirationDate || ""}
        cvc={cardValues.securityCode || ""}
      />

      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "text-dark2 bg-green border-green",
        }}
      />
      <FormProvider {...CardFormMethods}>
        <form
          className="w-[300px] md:w-full flex flex-col lg:grid lg:grid-cols-2 items-center gap-5 md:gap-4 lg:gap-6 "
          onSubmit={handleSubmit(onSubmitAddCard)}
        >
          <div className="flex flex-col gap-5 w-[300px] md:w-[360px] md:gap-4 lg:col-span-1 lg:gap-6">
            {/* Numero Tarjeta */}
            <div className="">
              <InputText
                fieldName="numberCard"
                placeholder="Número de la tarjeta*"
                errorText={errors.numberCard?.message}
                maxLength={16}
              />
            </div>

            {/* Nombre Titular */}
            <div>
              <InputText
                fieldName="nameTitular"
                type="text"
                placeholder="Nombre y apellido*"
                errorText={errors.nameTitular?.message}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-[300px] md:w-[360px] md:gap-4 md:flex-row lg:flex-col  lg:col-span-1 lg:gap-6">
            {/* Fecha de vencimiento */}
            <div>
              <InputText
                fieldName="expirationDate"
                placeholder="Fecha de vencimiento*"
                errorText={errors.expirationDate?.message}
                maxLength={5}
                inputClassName="md:leading-6 md:placeholder:whitespace-normal md:placeholder:break-words md:pt-0 lg:pt-5"
              />
            </div>

            {/* Codigo de seguridad */}
            <div>
              {" "}
              <InputText
                fieldName="securityCode"
                placeholder="Código de seguridad*"
                errorText={errors.securityCode?.message}
                maxLength={3}
                inputClassName="md:leading-6 md:placeholder:whitespace-normal md:placeholder:break-words md:pt-0 lg:pt-5"
              />
            </div>
          </div>

          {/* Disabled hasta que se validen los campos */}
          <div className="w-[300px] md:w-[360px] mt-3 lg:col-span-1 lg:gap-6 lg:col-start-2 ">
            <SubmitButton className="bg-button1" text="Continuar" />
          </div>

          {/* Mensaje de error del servidor. */}
          {serverError && (
            <p className="w-[300px] md:w-[360px]  font-semibold flex flex-col text-sm md:text-base italic text-error1 text-center mt-4">
              {serverError}
            </p>
          )}
        </form>
      </FormProvider>
    </section>
  );
};

export default AddCard;
