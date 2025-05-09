type OperationType = "addCard" | "addMoney" | "payService";

export const errorContent: Record<
  OperationType,
  { title: string; description: string; button: string }
> = {
  addCard: {
    title: "Límite de tarjetas alcanzado",
    description:
      "Ya agregaste 10 tarjetas. Si querés añadir una nueva, primero eliminá una existente.",
    button: "Volver",
  },
  addMoney: {
    title: "No encontramos facturas asociadas a este dato",
    description:
      "Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura.",
    button: "Revisar dato",
  },
  payService: {
    title: "Hubo un problema con tu pago",
    description:
      "Puede deberse a fondos insuficientes. Comunicate con la entidad emisora de la tarjeta.",
    button: "Volver a intentarlo",
  },
};