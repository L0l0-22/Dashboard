import React, { useState } from "react";

export default function AddMaterialModal({ onClose, onAddMaterial }) {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileUrl = URL.createObjectURL(pdfFile); // 👈 converts File object to blob URL
    const newMaterial = {
      title,
      course,
      uploadDate: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      file: fileUrl, // 👈 only save the string URL
    };
    onAddMaterial(newMaterial);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg lg:max-w-2xl space-y-4"
      >
        <h2 className="text-xl font-bold">Add New Material</h2>

        <input
          type="text"
          placeholder="Material Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="text"
          placeholder="Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          className="w-full border rounded px-3 py-2"
        />

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
            className="px-4 py-2 bg-sec text-white rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
