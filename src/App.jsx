import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TeacherDash from './TeacherDashboard/TeacherDash';
import TeachingTips from './TeachingTips';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './Login';
import Cookies from "js-cookie";
import { useState, useEffect } from 'react';
import TeacherCourseDetails from './TeacherDashboard/Assesments/AssesmentDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("isLoggedIn"));
  const location = useLocation();

  // Whenever cookies change (like after login/logout), update state
  useEffect(() => {
    setIsLoggedIn(!!Cookies.get("isLoggedIn"));
  }, [location]); 
  // 👆 re-check login status on route change

  return (
    <div className="font-poppins">
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={Cookies.get("isLoggedIn") ? <TeacherDash /> : <Navigate to="/login" />}
        />
        <Route
          path="/operationdetails"
          element={isLoggedIn ? <TeacherCourseDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/teachingtips"
          element={isLoggedIn ? <TeachingTips /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
