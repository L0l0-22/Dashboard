import { useState } from "react";

export default function EditAssessmentModal({ onClose, onSave, initialData }) {
  const [course, setCourse] = useState(initialData.course);
  const [assessment, setAssessment] = useState(initialData.assessment);
  const [pdfFile, setPdfFile] = useState(initialData.pdfFile || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...initialData, course, assessment, pdfFile });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-sm md:max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit Assessment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Course Name</label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Assessment Title</label>
            <input
              type="text"
              value={assessment}
              onChange={(e) => setAssessment(e.target.value)}
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="w-full"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-sec hover:bg-hoverSec text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
