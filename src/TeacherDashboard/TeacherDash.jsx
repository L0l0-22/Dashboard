import React, { useEffect, useState } from 'react';
import {
  MdOutlineDashboardCustomize,
  MdOutlinePictureAsPdf,
  MdOutlineAssessment,
  MdOutlinePeopleAlt,
  MdOutlineBook,
  MdOutlineReviews,
  MdMenu,
  MdQuiz,
  MdLogout,
  MdOutlineArchive,
  MdAttachEmail
} from 'react-icons/md';
import teacher2 from "../assets/teacher.jpg";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logoFooter.png";
import Courses from './Courses/Courses';
import TeacherCourseDetails from './Assesments/AssesmentDetails';
import EditCourseModal from './Courses/EditCourseModal';
import QuizDashboard from './Quizzes/QuizDashboard';
import Students from './Students/Students';
import Materials from './Materials/Materials';
import Reviews from './Reviews/Reviews';
import { FaRegLightbulb } from 'react-icons/fa';
import Dashboard from './Dashboard/Dahboard';
import Cookies from "js-cookie";
import Archived from './Archived/Archived';
import Emails from './Mail/Emails';
import Assesments from './Assesments/Assesments';
import AssesmentDetails from './Assesments/AssesmentDetails';

export default function TeacherDash() {
    const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(() => {
    return localStorage.getItem('selectedPage') || 'Dashboard';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // <== add this
  const [selectedOperation, setSelectedOperation] = useState(null); // <== add this
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null); // course to edit
  useEffect(() => {
    localStorage.setItem('selectedPage', selectedPage);
  }, [selectedPage]);
  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("adminId");
    localStorage.removeItem("selectedPage"); 
    console.log("✅ User logged out successfully"); 
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-[#000034] text-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:static lg:translate-x-0 lg:block lg:min-h-screen
        `}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className='max-h-12' />
        </Link>

        <div className="flex items-center space-x-4 mt-6">
          <img
            src={teacher2}
            alt="Teacher Profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h2 className="text-lg font-bold">John Doe</h2>
            <p className="text-sm text-gray-300">Instructor</p>
          </div>
        </div>

        <ul className="space-y-2 mt-10 font-medium text-sm">
          {[
            { label: 'Dashboard', icon: <MdOutlineDashboardCustomize /> },
            { label: 'Customers', icon: <MdOutlineBook /> },
            { label: 'Archived', icon: <MdOutlineArchive /> },
            { label: 'Emails', icon: <MdAttachEmail /> },
            { label: 'Operations', icon: <MdOutlineAssessment /> },
            // { label: 'Quizzes', icon: <MdQuiz /> },
            { label: 'Students', icon: <MdOutlinePeopleAlt /> },
            { label: 'Materials', icon: <MdOutlinePictureAsPdf /> },
            { label: 'Reviews', icon: <MdOutlineReviews /> },
          ].map((item) => (
            <li
              key={item.label}
              onClick={() => {
                setSelectedPage(item.label);
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
              className={`flex items-center p-2 rounded-md transition cursor-pointer ${
                selectedPage === item.label ? 'bg-sec text-white' : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </li>
          ))}
        </ul>
        <Link to="/teachingtips">
          <button
            className="mt-7 bg-sec hover:bg-hoverSec text-white w-full py-2 rounded-lg font-medium transition flex items-center"
          >
            <FaRegLightbulb className='ml-8 mr-1' size={18}/>
              Teaching Tips
          </button>
        </Link>
        <Link to="/login">
          <button
            onClick={handleLogout}
            className="mt-7 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-lg font-medium transition flex items-center justify-center"
          >
              Logout            
              <MdLogout className=' ml-2' size={18}/>
          </button>
        </Link>
      </aside>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#000034] text-white p-2 rounded-md"
      >
        <MdMenu size={24} />
      </button>
      {/* Main Content */}
      <main className="flex-1 pb-8 px-8 pt-4 h-screen overflow-y-scroll">
        {selectedPage === 'Dashboard' && (
          <Dashboard/>
        )}
        {selectedPage === 'Customers' && !selectedCourse && (
          <Courses
            onViewCourse={(course) => setSelectedCourse(course)}
            onEditCourse={(course) => {
              setEditingCourse(course);
              setIsEditModalOpen(true);
            }}
          />
        )}
        {selectedPage === 'Archived' && (
          <Archived 
            onViewCourse={(course) => setSelectedCourse(course)}
          />
        )} 
        {selectedPage === 'Emails' && (
          <Emails/>
        )}
        {selectedPage === 'Operations' && !selectedOperation && (
          <Assesments
            onViewOperation={(operations) => setSelectedOperation(operations)}
          />
        )}
        {selectedPage === 'Operations' && selectedOperation && (
          <AssesmentDetails operation={selectedOperation} onBack={() => setSelectedOperation(null)} />
        )} 
        {/* {selectedPage === 'Quizzes' && (
          <QuizDashboard/>
        )} */}
        {selectedPage === 'Students' && (
          <Students/>
        )}
        {selectedPage === 'Materials' && (
          <Materials/>
        )}
        {selectedPage === 'Reviews' && (
          <Reviews/>
        )}
      </main>
      {isEditModalOpen && (
        <EditCourseModal
          course={editingCourse}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
}
