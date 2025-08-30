import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { RiBarChart2Line } from "react-icons/ri";
import AddQuizModal from "./AddQuizModal";
import AddQuestionsModal from "./AddQuestionModal";
import { useNavigate } from "react-router-dom";
import EditQuestionModal from "./EditQuestionModal";

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      course: "React Fundamentals",
      quizTitle: "Hooks Basics Quiz",
      totalQuestions: 10,
      attempts: 25,
      averageScore: 82,
      dueDate: "July 10, 2025",
      questions: [
        {
          questionText: "What is useState used for?",
          options: ["Data fetching", "Managing state", "Styling", "Routing"],
          correctAnswerIndex: 1,
        },
        {
          questionText: "What is React.memo used for?",
          options: ["State update", "Performance boost", "Routing", "Context API"],
          correctAnswerIndex: 3,
        },
      ],
    },
    {
      id: 2,
      course: "Advanced React",
      quizTitle: "Performance Patterns",
      totalQuestions: 8,
      attempts: 40,
      averageScore: 77,
      dueDate: "July 15, 2025",
      questions: [
        {
          questionText: "What is React.memo used for?",
          options: ["State update", "Performance boost", "Routing", "Context API"],
          correctAnswerIndex: 1,
        },
      ],
    },
  ]);

  const [newModalOpen, setNewModalOpen] = useState(false);
  const [addQuestionModalOpen, setAddQuestionModalOpen] = useState(false);
  const [editQuestionModalOpen, setEditQuestionModalOpen] = useState(false);
  const [quizForQuestions, setQuizForQuestions] = useState(null);
  const navigate = useNavigate();

  const handleAddQuiz = (newQuiz) => {
    const fullQuiz = {
      ...newQuiz,
      id: quizzes.length + 1,
    };
    setQuizzes((prev) => [...prev, fullQuiz]);
  };

  const handleAddQuestions = (quiz) => {
    setQuizForQuestions(quiz);
    setAddQuestionModalOpen(true);
  };

  const handleAddQuestion = () => {
    console.log("Question added!");
    setAddQuestionModalOpen(false);
  };

  const handleEditQuestion = (updatedQuiz) => {
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) =>
        quiz.id === updatedQuiz.id ? updatedQuiz : quiz
      )
    );
    console.log("Question updated!");
    setEditQuestionModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {[
          { icon: <PiStudentDuotone size={32} />, label: "Quiz Attempts", value: "175" },
          { icon: <MdOutlineRocketLaunch size={32} />, label: "Active Quizzes", value: "5" },
          { icon: <AiOutlineCheckCircle size={32} />, label: "Completed Quizzes", value: "12" },
          { icon: <RiBarChart2Line size={32} />, label: "Avg. Score", value: "79%" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 w-full lg:w-1/4"
          >
            <div className="bg-sec text-white rounded-full p-2 ml-4">{stat.icon}</div>
            <div>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-sm font-bold text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quiz Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center py-5">
          <h4 className="text-2xl font-bold">Quizzes</h4>
          <button
            onClick={() => setNewModalOpen(true)}
            className="bg-sec text-xs px-3 py-1 md:px-4 md:py-2 md:text-base text-white rounded-lg hover:bg-hoverSec"
          >
            + Add
          </button>
          {newModalOpen && (
            <AddQuizModal
              onClose={() => setNewModalOpen(false)}
              onAddQuiz={handleAddQuiz}
            />
          )}
        </div>

        {/* Mobile & Tablet */}
        <div className="block lg:hidden space-y-4">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="border rounded-lg p-4 shadow-sm flex flex-col md:flex-row justify-between">
              <div className="space-y-2 ">
                <div className="font-bold text-gray-700">{quiz.course}</div>
                  <div className="text-sm text-gray-600">{quiz.quizTitle}</div>
                  <div className="flex items-center">
                    <p className="text-sm mr-2 text-gray-950">Avg. Score : </p>
                    <span className="px-3 py-1 text-[#b25d5d] bg-[#ffe6e5] rounded-full text-sm">
                      {quiz.averageScore}%
                    </span>
                  </div>
              </div>
             
              <div className="flex gap-2 mt-5 md:mt-0 flex-col">
                <button
                  onClick={() => handleAddQuestions(quiz)}
                  className="hover:text-sec border hover:border-sec rounded-lg px-3 py-1 text-sm bg-sec hover:bg-transparent text-white"
                >
                  Add Questions
                </button>
                <button
                  className="hover:text-main border hover:border-main rounded-lg px-3 py-1 text-sm bg-main hover:bg-transparent text-white"
                >
                  View Quiz
                </button>
                <button
                  onClick={() => {
                    setQuizForQuestions(quiz);
                    setEditQuestionModalOpen(true);
                  }}
                  className="hover:text-[#b25d5d] border hover:border-[#b25d5d] rounded-lg px-3 py-1 text-sm bg-[#b25d5d] hover:bg-transparent text-white"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-3 px-4 whitespace-nowrap min-w-[140px]">Course</th>
                <th className="px-4 whitespace-nowrap min-w-[160px]">Quiz Title</th>
                <th className="px-4 whitespace-nowrap">Avg. Score</th>
                <th className="px-4"></th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz) => (
                <tr key={quiz.id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td
                    className="py-4 px-4 font-semibold text-gray-600 whitespace-nowrap max-w-[250px] cursor-default truncate"
                    title={quiz.course}
                  >
                    {quiz.course}
                  </td>
                  <td
                    className="py-4 px-4 text-gray-600 font-medium whitespace-nowrap max-w-[250px] cursor-default truncate"
                    title={quiz.quizTitle}
                  >
                    {quiz.quizTitle}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="px-3 py-1 text-[#b25d5d] bg-[#ffe6e5] rounded-full">
                      {quiz.averageScore}%
                    </span>
                  </td>
                  <td className="py-4 whitespace-nowrap space-x-2">
                    <button
                      onClick={() => handleAddQuestions(quiz)}
                      className="hover:text-sec border hover:border-sec rounded-lg px-3 py-1 text-sm bg-sec hover:bg-transparent text-white"
                    >
                      Add Questions
                    </button>
                    <button
                      onClick={() => navigate(`/quiz`)}
                      className="hover:text-main border hover:border-main rounded-lg px-3 py-1 text-sm bg-main hover:bg-transparent text-white"
                    >
                      View Quiz
                    </button>
                    <button
                      onClick={() => {
                        setQuizForQuestions(quiz);
                        setEditQuestionModalOpen(true);
                      }}
                      className="hover:text-[#b25d5d] border hover:border-[#b25d5d] rounded-lg px-3 py-1 text-sm bg-[#b25d5d] hover:bg-transparent text-white"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {addQuestionModalOpen && quizForQuestions && (
          <AddQuestionsModal
            quiz={quizForQuestions}
            onClose={() => setAddQuestionModalOpen(false)}
            onAddQuestion={handleAddQuestion}
          />
        )}

        {editQuestionModalOpen && quizForQuestions && (
          <EditQuestionModal
            quiz={quizForQuestions}
            onClose={() => setEditQuestionModalOpen(false)}
            onEditQuestion={handleEditQuestion}
          />
        )}
      </div>
    </div>
  );
}
