import { useState } from "react";
import boy1 from "../../assets/boy1.jpg";
import boy2 from "../../assets/boy2.jpg";
import boy3 from "../../assets/boy3.jpg";
import girl1 from "../../assets/girl1.jpg";
import girl2 from "../../assets/girl2.jpg";
import girl3 from "../../assets/girl3.jpg";

const students = [
  {
    id: "1",
    name: "Jason Jordan",
    email: "jason@example.com",
    avatar: boy1,
    status: "Active",
    enrolledCourses: 2,
    courses: [
      {
        title: "Pro Frontend Engineer ReactJS + TypeScript + Redux",
        score: 3.7,
        progress: 75,
        completedQuizzes: 10,
        totalHours: 120,
        lastActivity: "3 days ago",
      },
      {
        title: "Advanced UI with Tailwind",
        score: 4.1,
        progress: 45,
        completedQuizzes: 5,
        totalHours: 50,
        lastActivity: "7 days ago",
      },
    ],
  },
  {
    id: "2",
    name: "Olivia Bennett",
    email: "olivia@example.com",
    avatar: girl3,
    status: "Active",
    enrolledCourses: 1,
    courses: [
      {
        title: "Next.js 15 & React - The Complete Guide",
        score: 4.8,
        progress: 97,
        completedQuizzes: 18,
        totalHours: 130,
        lastActivity: "2 days ago",
      },
    ],
  },
  {
    id: "3",
    name: "Liam Wright",
    email: "liam@example.com",
    avatar: boy2,
    status: "Inactive",
    enrolledCourses: 1,
    courses: [
      {
        title: "JavaScript Algorithms & Data Structures",
        score: 4.2,
        progress: 60,
        completedQuizzes: 8,
        totalHours: 80,
        lastActivity: "10 days ago",
      },
    ],
  },
  {
    id: "4",
    name: "Emily Clark",
    email: "emily@example.com",
    avatar: girl1,
    status: "Active",
    enrolledCourses: 2,
    courses: [
      {
        title: "React Testing & Debugging",
        score: 4.6,
        progress: 85,
        completedQuizzes: 12,
        totalHours: 110,
        lastActivity: "1 day ago",
      },
      {
        title: "Frontend System Design",
        score: 4.4,
        progress: 50,
        completedQuizzes: 7,
        totalHours: 70,
        lastActivity: "3 days ago",
      },
    ],
  },
  {
    id: "5",
    name: "Noah Black",
    email: "noah@example.com",
    avatar: boy3,
    status: "Active",
    enrolledCourses: 1,
    courses: [
      {
        title: "TypeScript Mastery",
        score: 4.9,
        progress: 90,
        completedQuizzes: 15,
        totalHours: 100,
        lastActivity: "5 hours ago",
      },
    ],
  },
  {
    id: "6",
    name: "Sophia Davis",
    email: "sophia@example.com",
    avatar: girl2,
    status: "Inactive",
    enrolledCourses: 1,
    courses: [
      {
        title: "UI/UX Design Principles",
        score: 3.9,
        progress: 38,
        completedQuizzes: 4,
        totalHours: 40,
        lastActivity: "15 days ago",
      },
    ],
  },
];


export default function Students() {
  const [selected, setSelected] = useState(null);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Students</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24 mt-24">
        {students.map((student) => (
          <div
            key={student.id}
            onClick={() => {
              setSelected(student);
              setSelectedCourseIndex(0);
            }}
            className="relative bg-white rounded-2xl pt-20 pb-5 px-6 shadow hover:shadow-md transition cursor-pointer"
          >
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{student.name}</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-2 py-1 rounded-lg bg-sky-100 text-sky-700">
                
                Courses: {student.enrolledCourses}
              </span>
              <span
                className={` px-2 py-1 rounded-lg font-medium ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
               Status: {student.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-6 text-2xl text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            <div className="flex items-center gap-6 border-b pb-4 mb-6">
              <img
                src={selected.avatar}
                alt={selected.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{selected.name}</h3>
                <p className="text-gray-500">{selected.email}</p>
              </div>
              <p
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                  selected.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {selected.status}
              </p>
            </div>
            {selected.courses.length > 1 && (
              <div className="mb-6">
                <label className="font-medium mr-2 text-main">Select Course:</label>
                <select
                  className="border px-2 py-1 rounded"
                  value={selectedCourseIndex}
                  onChange={(e) => setSelectedCourseIndex(Number(e.target.value))}
                >
                  {selected.courses.map((course, index) => (
                    <option key={index} value={index}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {selected.courses.length > 0 && (
              <div className="text-gray-700 space-y-4">
                <p>
                  <strong>Course:</strong> {selected.courses[selectedCourseIndex].title}
                </p>
                <p>
                  <strong>Avg Score:</strong> {selected.courses[selectedCourseIndex].score} 
                  <span className="text-yellow-500 ml-1 text-xl">★</span>
                </p>
                <p>
                  <strong>Completed Quizzes:</strong>{" "}
                  {selected.courses[selectedCourseIndex].completedQuizzes}
                </p>
                <p>
                  <strong>Total Learning Hours:</strong>{" "}
                  {selected.courses[selectedCourseIndex].totalHours} hrs
                </p>
                <p>
                  <strong>Last Activity:</strong>{" "}
                  {selected.courses[selectedCourseIndex].lastActivity}
                </p>

                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-600 mb-1">Progress</p>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 bg-sec rounded-full transition-all"
                      style={{
                        width: `${selected.courses[selectedCourseIndex].progress}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-right mt-1">
                    {selected.courses[selectedCourseIndex].progress}% completed
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
