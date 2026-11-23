import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export async function downloadBioDataPDF() {
  const page1 = document.getElementById('pdf-page-1');
  const page2 = document.getElementById('pdf-page-2');

  if (!page1 || !page2) {
    console.error("PDF page elements not found");
    return false;
  }

  try {
    // Standard A4: 210mm x 297mm
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Render Page 1
    const canvas1 = await html2canvas(page1, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    const imgData1 = canvas1.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgData1, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

    // Render Page 2
    const canvas2 = await html2canvas(page2, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    const imgData2 = canvas2.toDataURL('image/jpeg', 0.95);
    pdf.addPage();
    pdf.addImage(imgData2, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

    // Download directly without asking
    pdf.save('Bishal_Kumar_Shaw_BioData.pdf');
    return true;
  } catch (err) {
    console.error("Error generating PDF:", err);
    return false;
  }
}
