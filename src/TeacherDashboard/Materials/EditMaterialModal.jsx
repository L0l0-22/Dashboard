import React, { useState } from "react";

export default function EditMaterialModal({ initialData, onClose, onSave }) {
  const [title, setTitle] = useState(initialData.title);
  const [course, setCourse] = useState(initialData.course);
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMaterial = {
      ...initialData,
      title,
      course,
      file: pdfFile ? URL.createObjectURL(pdfFile) : initialData.file,
    };

    onSave(updatedMaterial);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg lg:max-w-2xl space-y-4"
      >
        <div >
           <p className="text-base text-gray-600 font-semibold mb-1">Edit Material Title</p>
            <input
              type="text"
              placeholder="Material Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
        </div>
        <div >
           <p className="text-base text-gray-600 font-semibold mb-1">Edit Course Name</p>
             <input
              type="text"
              placeholder="Course Name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
        </div>
        <div >
            <p className="text-base text-gray-600 font-semibold mb-1">Replace PDF File (optional)</p>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="w-full border rounded px-3 py-2"
            />
        </div>
        <div className="flex justify-end gap-4">
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
