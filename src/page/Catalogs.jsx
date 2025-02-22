import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { TURKCE, catalogs } from "../api/dataTr";

// Important: Set the pdf.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Catalogs = () => {
  const { language } = useContext(UserContext);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
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
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={catalog.image || "/placeholder.svg"}
                  alt={catalog.title}
                  className="w-full h-full object-cover"
                />
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
            <div className="flex gap-4 justify-center items-center">
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto w-full flex justify-center p-4">
            <Document
              file={selectedPdf.pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              className="max-w-full"
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-lg"
              />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogs;
