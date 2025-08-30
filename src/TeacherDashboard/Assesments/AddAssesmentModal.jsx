import { useState } from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function AddAssesmentModal({ onClose, onAddAssesment }) {
  const [formData, setFormData] = useState({
    student: "",
    assessment: "",
    status: "In Progress",
    launchDate: "",
    fulfillment: { current: 0, total: 0 },
    pdfFile: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "current" || name === "total") {
      setFormData((prev) => ({
        ...prev,
        fulfillment: { ...prev.fulfillment, [name]: Number(value) },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, pdfFile: file }));
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();
  onAddAssesment({
    course: formData.course,
    assessment: formData.assessment,
    dueDate: formData.dueDate,
    // ✅ Convert the PDF File into a local object URL
    pdfFile: formData.pdfFile ? URL.createObjectURL(formData.pdfFile) : null,
    completed: 0,
    averageScore: 0,
  });
  onClose();
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg max-h-[95vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Assessment</h2>
       <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <input
            type="text"
            name="course"
            value={formData.course || ""}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Assessment Title</label>
          <input
            type="text"
            name="assessment"
            value={formData.assessment}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate || ""}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="bg-gray-50 border border-gray-200 text-sm text-gray-600 p-3 rounded">
          <p><strong>Note:</strong> <br /> “Avg. Score” will be automatically updated once students complete the assessment.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-sec text-white rounded hover:bg-hoverSec">Add Assessment</button>
        </div>
      </form>

      </div>
    </div>
  );
}
