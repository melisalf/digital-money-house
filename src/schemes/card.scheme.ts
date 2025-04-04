import * as yup from "yup";


const isFutureDate = (value: string) => {
  if (!value) return false;
  const [month, year] = value.split("/");
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript son 0-indexados
  const currentYear = currentDate.getFullYear();
  const fullYear = year.length === 2 ? `20${year}` : year; // Agregar '20' si el año es de 2 dígitos
  

  if ( Number(fullYear) < currentYear) return false;
  if ( Number(fullYear) === currentYear && Number(month) <= currentMonth) return false;

  return true;
};

export const CardScheme = yup
  .object({
    numberCard: yup
      .number()
      .typeError("Debe ser un número")
      .test(
        "exact-length",
        "El número de tarjeta debe tener exactamente 16 dígitos",
        (val) => val?.toString().length === 16
      )
      .required("El campo es requerido"),
    nameTitular: yup
      .string()
      .required("El campo es requerido")
      .min(3, "El campo debe tener al menos 3 caracteres")
      .matches(/^(?! )[A-Za-z\s]+$/, "El campo solo puede contener letras"),
    expirationDate: yup
      .string()
      .min(5, "Minimo 5 caracteres")
      .max(5, "Maximo 5 caracteres")
      .required()
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "La fecha de vencimiento debe ser en formato mm/aa."
      )
      .test("is-valid-date", "La fecha de vencimiento debe ser posterior al mes actual.", isFutureDate),
   
    securityCode: yup
      .number()
      .typeError("Código de seguridad debe ser un número")
      .test(
        "exact-length",
        "El código de seguridad debe tener exactamente 3 dígitos",
        (val) => val?.toString().length === 3
      )
      .required("El campo es requerido"),
  })
  .required();
