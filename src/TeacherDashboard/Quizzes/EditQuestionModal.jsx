import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
export default function EditQuestionModal({ quiz, onClose, onEditQuestion }) {
  const [questions, setQuestions] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  useEffect(() => {
    if (quiz?.questions?.length > 0) {
      setQuestions(quiz.questions);
    }
  }, [quiz]);

  const handleInputChange = (qIndex, field, value) => {
    const updated = [...questions];
    updated[qIndex][field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectAnswerChange = (qIndex, index) => {
    const updated = [...questions];
    updated[qIndex].correctAnswerIndex = index;
    setQuestions(updated);
  };

  const handleDeleteQuestion = (qIndex) => {
    const updated = [...questions];
    updated.splice(qIndex, 1);
    setQuestions(updated);
  };

  const handleSaveAll = () => {
    const updatedQuiz = { ...quiz, questions };
    onEditQuestion(updatedQuiz);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-full max-w-sm md:max-w-2xl lg:max-w-5xl rounded-xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Questions</h2>
          <button
            onClick={onClose}
            className="text-gray-500 font-bold hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Fallback for no questions */}
        {questions.length === 0 ? (
          <p className="text-center text-gray-500 my-10">
            No questions available.
          </p>
        ) : (
          questions.map((question, qIndex) => (
            <div key={qIndex} className="mb-6 p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Question {qIndex + 1}</h3>
                <button
                  onClick={() => {
                    setQuestionToDelete(qIndex);
                    setShowDeleteModal(true);
                  }}
                  className="bg-red-600 hover:bg-red-700 rounded-md text-white p-2"
                >
                  <MdDelete size={24}/>
                </button>
              </div>

              {/* Question Text */}
              <div className="mb-3">
                <label className="block font-medium mb-1">Question Text</label>
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) =>
                    handleInputChange(qIndex, "questionText", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>

              {/* Options */}
              <div className="mb-3">
                <label className="block font-medium mb-2">Options</label>
                {question.options.map((opt, optIndex) => (
                  <div
                    key={optIndex}
                    className="flex items-center gap-3 mb-2"
                  >
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) =>
                        handleOptionChange(qIndex, optIndex, e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />
                    <label className="flex items-center gap-1 text-sm">
                      <input
                        type="radio"
                        name={`correct-${qIndex}`}
                        checked={question.correctAnswerIndex === optIndex}
                        onChange={() =>
                          handleCorrectAnswerChange(qIndex, optIndex)
                        }
                      />
                      Correct
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveAll}
            className="px-4 py-2 bg-sec text-white rounded hover:bg-[#76c13f]"
            disabled={questions.length === 0}
          >
            Save All
          </button>
        </div>
      </div>
     {showDeleteModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
        <div className="relative p-4 w-full max-w-md">
          <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
            <button
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => setShowDeleteModal(false)}
            >
              <IoMdClose size={24} />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="flex items-center justify-center my-5">
              <RiDeleteBin6Fill className="text-gray-300" size={45} />
            </div>
            <p className="mb-4 text-gray-500">
              Are you sure you want to delete this question?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900"
              >
                No, cancel
              </button>
              <button
                onClick={() => {
                  handleDeleteQuestion(questionToDelete);
                  setShowDeleteModal(false);
                  setQuestionToDelete(null);
                }}
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
      )}


    </div>
  );
}
