import html2pdf from 'html2pdf.js';

export const downloadReceiptPDF = (
  elementId: string,
  filename = "comprobante.pdf"
) => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error("❌ Elemento no encontrado para generar el PDF");
    return;
  }

  const opt = {
    margin: 10,
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true, 
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  // Forzamos un pequeño timeout para asegurar render
  setTimeout(() => {
    html2pdf().set(opt).from(element).save();
  }, 100);
};
