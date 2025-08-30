import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ViewModal({ onClose, pdfFile }) {
  const [numPages, setNumPages] = useState(null);

  const handleLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Assessment PDF</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700 font-bold">
            X
          </button>
        </div>

        {pdfFile ? (
          <div className="flex flex-col items-center">
            <Document
              file={pdfFile}
              onLoadSuccess={handleLoadSuccess}
              loading={<p>Loading PDF...</p>}
              error={<p>Failed to load PDF file.</p>}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={700}
                />
              ))}
            </Document>
          </div>
        ) : (
          <p>No PDF file available.</p>
        )}
      </div>
    </div>
  );
}
