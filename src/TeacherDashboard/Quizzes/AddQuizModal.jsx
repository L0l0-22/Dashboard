import React, { useState } from "react";

export default function AddQuizModal({ onClose, onAddQuiz }) {
  const [formData, setFormData] = useState({
    course: "",
    quizTitle: "",
    totalQuestions: "",
    attempts: 0,
    averageScore: 0,
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "totalQuestions" || name === "attempts" || name === "averageScore"
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddQuiz(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New Quiz</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Quiz Title</label>
            <input
              type="text"
              name="quizTitle"
              value={formData.quizTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Total Questions</label>
            <input
              type="number"
              name="totalQuestions"
              value={formData.totalQuestions}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              required
            />
          </div>
          {/* Optional: You can hide these fields or auto-set */}
          <div className="hidden">
            <input type="number" name="attempts" value={formData.attempts} readOnly />
            <input type="number" name="averageScore" value={formData.averageScore} readOnly />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-sec text-white px-4 py-2 rounded hover:bg-hoverSec"
            >
              Add Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
