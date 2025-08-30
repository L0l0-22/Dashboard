import React from "react";
import logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

const questions = [
  {
    id: "q1",
    question: "1. What does HTML stand for?",
    options: [
      "a) Hyper Text Markup Language",
      "b) Hyper Transfer Markup Language",
      "c) Hyperlink and Text Markup Language",
      "d) Hyper Tool Multi-language",
    ],
  },
  {
    id: "q2",
    question: "2. What does CSS stand for?",
    options: [
      "a) Cascading Style Sheet",
      "b) Computer Style Sheet",
      "c) Colorful Style Sheet",
      "d) Creative Style Sheet",
    ],
  },
  {
    id: "q3",
    question: "3. What is the purpose of HTML?",
    options: [
      "a) Hyperlink and Text Markup Language",
      "b) Computer Style Sheet",
      "c) Home Tool Markup Language",
      "d) Hyper Transfer Markup Language",
    ],
  },
  {
    id: "q4",
    question: "4. What does JavaScript primarily enable you to do?",
    options: [
      "a) Style web pages",
      "b) Program the behavior of web pages",
      "c) Define the structure of web pages",
      "d) Create databases",
    ],
  },
  {
    id: "q5",
    question: "5. Which of the following is NOT a programming language?",
    options: ["a) Python", "b) HTML", "c) Java", "d) JPEG"],
  },
  {
    id: "q6",
    question: "6. What is the purpose of a CSS selector?",
    options: [
      "a) To select elements in HTML",
      "b) To define styles for a webpage",
      "c) To create variables in JavaScript",
      "d) To structure HTML documents",
    ],
  },
  {
    id: "q7",
    question: "7. What does the acronym API stand for?",
    options: [
      "a) Advanced Programming Interface",
      "b) Application Programming Interface",
      "c) Applied Programming Interaction",
      "d) Abstract Programming Interface",
    ],
  },
];

const QuizComponent = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-6 py-8 bg-white shadow-xl rounded-lg border border-gray-200">
      <Link to="/" className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20" />
      </Link>

      <h3 className="text-3xl font-bold text-center text-[#0A2E40] mb-10">Hooks Basics Quiz</h3>

      <form id="quizForm" className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={q.id} className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              <span className="text-primaryBlue font-bold">{qIndex + 1}.</span> {q.question.replace(/^\d+\.\s*/, "")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((opt, optIndex) => {
                const optionValue = String.fromCharCode(97 + optIndex);
                return (
                  <label
                    key={optionValue}
                    htmlFor={`${q.id}${optionValue}`}
                    className="flex items-center px-4 py-2 border rounded-md hover:bg-green-50 transition cursor-pointer text-gray-700"
                  >
                    <input
                      type="radio"
                      id={`${q.id}${optionValue}`}
                      name={q.id}
                      value={optionValue}
                      className="mr-3 "
                      required
                    />
                    {opt}
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-8 w-1/2 sm:w-1/3 bg-primaryGreen hover:bg-[#76c13f] text-white text-lg font-medium py-2 rounded-md transition"
          >
            Submit Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizComponent;
