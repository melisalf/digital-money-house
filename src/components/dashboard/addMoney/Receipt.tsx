const Receipt = ({ data }: { data: ReceiptDataType }) => {
    return (
      <div id="receipt-content" className="hidden">
        <h2 className="text-lg font-bold mb-4">Comprobante de operación</h2>
        <p><strong>Fecha:</strong> {data.date}</p>
        <p><strong>Monto:</strong> {data.amount}</p>
        <p><strong>Medio de pago:</strong> {data.card}</p>
        <p><strong>Servicio:</strong> {data.service}</p>
        <p><strong>ID Transacción:</strong> {data.transactionId}</p>
      </div>
    );
  };
  
  export default Receipt;
  