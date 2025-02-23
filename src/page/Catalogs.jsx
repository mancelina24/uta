import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { TURKCE, catalogs } from "../api/dataTr";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Catalogs = () => {
  const { language } = useContext(UserContext);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const PDFPreview = ({ pdfUrl, title }) => {
    const [thumbnail, setThumbnail] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
      const generateThumbnail = async () => {
        try {
          const pdf = await pdfjs.getDocument(pdfUrl).promise;
          const page = await pdf.getPage(1);

          const viewport = page.getViewport({ scale: 1 });
          const canvas = canvasRef.current;
          const canvasContext = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext,
            viewport,
          };
          await page.render(renderContext).promise;

          const image = canvas.toDataURL("image/png");
          setThumbnail(image);
        } catch (error) {
          console.error("PDF önizleme oluşturulurken hata:", error);
        }
      };

      generateThumbnail();
    }, [pdfUrl]);

    return (
      <div>
        <canvas ref={canvasRef} style={{ display: "none" }} />
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div>Yükleniyor...</div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-center mb-12">
        {language === TURKCE ? "Catalogs" : "Kataloglar"}
      </h3>

      {!selectedPdf ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="cursor-pointer group"
              onClick={() => setSelectedPdf(catalog)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-[#f7c75e]">
                <PDFPreview pdfUrl={catalog.pdfUrl} title={catalog.title} />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {catalog.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center">
          <div className="bg-white p-4 w-full">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold">{selectedPdf.title}</h4>
              <button
                onClick={() => setSelectedPdf(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto w-full h-full">
            <Document file={selectedPdf.pdfUrl}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogs;
