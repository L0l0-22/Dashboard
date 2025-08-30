import React, { useState } from "react";

export default function AddQuestionsModal({ onClose  , onAddQuestion}) {
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      options: ["", "", "", ""],
      correctAnswerIndex: 0,
    },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    if (field === "questionText") {
      updated[index].questionText = value;
    }
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectAnswerChange = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].correctAnswerIndex = value;
    setQuestions(updated);
  };

  const addNewQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        questionText: "",
        options: ["", "", "", ""],
        correctAnswerIndex: 0,
      },
    ]);
  };
  
  const handleSubmit = () => {
  // You can validate here if needed
  if (onAddQuestion) {
    onAddQuestion(questions); // or just onAddQuestion()
  }
  onClose();
};


  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-full max-w-sm md:max-w-2xl lg:max-w-4xl rounded-xl p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Questions</h2>
          <button
            onClick={onClose}
            className="text-gray-500 font-bold hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {questions.map((q, index) => (
          <div
            key={index}
            className="mb-6 border border-gray-300 p-4 rounded-lg shadow-sm"
          >
            <label className="block font-semibold mb-2">
              Question {index + 1}:
            </label>
            <input
              type="text"
              value={q.questionText}
              onChange={(e) =>
                handleQuestionChange(index, "questionText", e.target.value)
              }
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter the question text"
            />

            {q.options.map((opt, i) => (
              <div key={i} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={`correct-${index}`}
                  checked={q.correctAnswerIndex === i}
                  onChange={() => handleCorrectAnswerChange(index, i)}
                  className="mr-2"
                />
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleOptionChange(index, i, e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder={`Option ${i + 1}`}
                />
              </div>
            ))}
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={addNewQuestion}
            className="text-main border border-main rounded-full px-2 md:px-4 py-2 text-sm hover:bg-main hover:text-white"
          >
            + Add Another Question
          </button>

          <button
            onClick={handleSubmit}
            className="bg-sec hover:bg-hoverSec text-white px-2 md:px-6 py-2 rounded-lg"
          >
            Save Questions
          </button>
        </div>
      </div>
    </div>
  );
}
