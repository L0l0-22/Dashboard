import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import axios from 'axios';
import react from "../../assets/react.jpg"
import Loading from '../../Loading';
import ReactPaginate from 'react-paginate';
import EditArchivedModal from './EditArchivedModal';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Archived({ onViewCourse }) {
const [openDropdown, setOpenDropdown] = useState(null);
const [editModalOpen, setEditModalOpen] = useState(false);
const [courseToEdit, setCourseToEdit] = useState(null); // <-- new
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // you can make it dynamic later
const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1); // react-paginate is 0-based
};

const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
};
const handleCourseClick = (course) => {
    onViewCourse(course); // this sets selectedCourse inside TeacherDash
};
const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
async function fetchCourses() {
    try {
    setLoading(true);
    setError(null);
    const res = await axios.get(
        "https://carwashapis.gosmart.ae/get_all_archive/carwash_user"
    );
    console.log("✅ API Response:", res.data);
    const mapped = res.data.data.map((u) => ({
        id: u.id,
        name: u.name,
        image: u.image,
        phone: u.phone || "N/A",
        create_date: u.create_date ? new Date(u.create_date).toLocaleDateString("en-GB") : "N/A",
        by: "Carwash User",
        is_archive: u.is_archive,  // <-- add this line
    }));
    setCourses(mapped);
    } catch (err) {
    setError(err.message);
    console.error("Fetch error:", err.response?.data || err.message);
    } finally {
    setLoading(false);
    }
}
fetchCourses();
}, []);
const indexOfLast = currentPage * itemsPerPage;
const indexOfFirst = indexOfLast - itemsPerPage;
const currentCourses = courses.slice(indexOfFirst, indexOfLast);

if (loading) return <Loading/>
if (error) return <p className='text-red-800 bg-red-100 w-full p-6'>Error: {error.message || error.toString()}</p>;

return (
    <div className="p-6 md:p-10 mt-12 md:mt-5">
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-main">Your Archived Customers</h2>
    </div>
    <div className="space-y-4">
        {currentCourses.map((course) => (
        <div
            key={course.id}
            onClick={() => handleCourseClick(course)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition relative p-4 flex flex-col md:flex-row gap-4 cursor-pointer"
        >
            <div className="w-full md:w-48">
            <img
                src={course.image || react}
                alt="course"
                className="w-full h-32 md:h-32 object-cover rounded-lg"
            />
            </div>
            <div className="flex-1">
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-[#0A2E40]">
                {course.name}
                </h3>
                <div className="relative">
                <button
                    onClick={(e) => {
                    e.stopPropagation(); // 👈 prevent card click
                    toggleDropdown(course.id);
                    }}
                    className="text-gray-600 hover:bg-sky-100 p-1.5 rounded-md"
                >
                    <BsThreeDotsVertical size={18} />
                </button>
                {openDropdown === course.id && (
                    <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md z-20 w-40">
                    <ul className="text-sm text-gray-700">
                        <li
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(null);
                            setCourseToEdit(course);   // Set selected course
                            setEditModalOpen(true);    // Open modal
                        }}

                        className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                        >
                        Edit Archived
                        </li>
                    </ul>
                    </div>
                )}
                </div>
                {editModalOpen && courseToEdit && (
                    
                    <EditArchivedModal
                        course={courseToEdit}
                        onClose={() => {
                            setEditModalOpen(false);
                            setCourseToEdit(null);
                        }}
                        onSave={(updatedCourse) => {
                            setCourses((prev) =>
                            // if the updated course is still archived → keep it in the list
                            // if not archived anymore → remove it from the archived list
                            updatedCourse.archived
                                ? prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c))
                                : prev.filter((c) => c.id !== updatedCourse.id)
                            );
                            setEditModalOpen(false);
                            setCourseToEdit(null);
                        }}
                        />
                )}
            </div>
            <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-500">📅 Created: <span className="font-medium text-main">{course.create_date}</span></p>
                <p className="text-sm text-gray-500">
                    📞 Phone: <span className="font-medium text-main">{course.phone}</span>
                </p>
                <p className="text-base mt-2 text-gray-500 flex items-center gap-2">
                    {course.is_archive ? (
                    <FaTimesCircle className="text-red-600" />  // red cross icon
                    ) : (
                    <FaCheckCircle className="text-green-600" /> // green check icon
                    )}
                    Status:{" "}
                    <span className={`font-medium ${course.is_archive ? "text-red-600" : "text-green-600"}`}>
                    {course.is_archive ? "Archived" : "Active"}
                    </span>
                </p>
            </div>
            </div>
        </div>
        ))}
    </div>
    <ReactPaginate
        previousLabel={<span className="px-3 py-1 bg-gray-200 rounded">Prev</span>}
        nextLabel={<span className="px-3 py-1 bg-gray-200 rounded">Next</span>}
        breakLabel={"..."}
        pageCount={Math.ceil(courses.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-6 space-x-2"
        pageClassName="px-3  rounded bg-gray-200"
        activeClassName="bg-sec text-white"
    />
    </div>
);
}




