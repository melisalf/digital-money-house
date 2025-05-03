import html2pdf from 'html2pdf.js';

export const downloadReceiptPDF = (elementId: string, filename = "comprobante.pdf") => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error("Elemento no encontrado para generar el PDF");
    return;
  }

  const options = {
    margin:       10,
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();
};
