import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdDelete, MdOutlineRocketLaunch } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { RiBarChart2Line } from "react-icons/ri";
import { FaEdit, FaEye } from "react-icons/fa";
import EditAssessmentModal from "./EditAssessmentModal";
import DeleteAssesmentModal from "./DeleteAssesmentModal";
import axios from "axios";
import Cookies from "js-cookie";
import ReactPaginate from "react-paginate";
import Loading from "../../Loading";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Assesments({onViewOperation}) {
  const [operations, setoperations] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1); // react-paginate is 0-based
  };
  const handleOperationsClick = (operations) => {
    onViewOperation(operations); // this sets selectedCourse inside TeacherDash
  };
  // const handleEditSave = (updatedAssessment) => {
  //   setAssessments((prev) =>
  //     prev.map((item) => (item === assessmentToEdit ? updatedAssessment : item))
  //   );
  //   toast.info("Assessment updated successfully!");
  // };

  //search 
  const filteredOperations = operations.filter(op =>
    op.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //delete
  const handleDeleteAssesment = async (id) => {
    try {
      const response = await axios.delete(
        `https://carwashapis.gosmart.ae/delete_record/carwash.operation/${id}`
      );
      console.log("API delete response:", response.data);
      toast.success("Course deleted successfully!");
      setoperations((prev) => prev.filter((course) => course.id !== id));
    } catch (err) {
      setError(err.message);
      console.error("Delete error:", err.response?.data || err.message);
      toast.error("Failed to delete course!");
    } finally {
      setDeleteModalOpen(false);
    }
  };
  //display
  useEffect(() => {
    async function fetchoperations() {
      try {
        setLoading(true);
        setError(null);
        // ⬇️ get token from cookies
        const token = Cookies.get("userToken");
        console.log("Using token:", token);
        const res = await axios.get(
          "https://carwashapis.gosmart.ae/get_all/carwash_operation",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`, // attach token
            },
          }
        );
        console.log("✅ API Response:", res.data);
        const mapped = res.data.data.map((u) => ({
          id: u.id,
          provider_id: u.provider_id,
          booking_id: u.booking_id,
          name: u.provider_name,
          status: u.status,
          create_date: u.create_date ? new Date(u.create_date).toLocaleDateString("en-GB") : "N/A",
          is_archive: u.is_archive ,
        }));
        setoperations(mapped);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchoperations();
  }, []);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentoperations = filteredOperations.slice(indexOfFirst, indexOfLast);
  if (loading) return <Loading/>
  if (error) return <p className='text-red-800 bg-red-100 w-full p-6'>Error: {error.message || error.toString()}</p>;
  return (
    <div className="p-6 space-y-6">
      {/*Search*/}
      <form className="max-w-2xl mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FiSearch className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search By Provider Name ..."
            onChange={(e) => setSearchQuery(e.target.value)}  // ✅ update state
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 
              bg-sec hover:bg-hoverSec focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm px-4 py-2 
              dark:bg-blue-600 dark:hover:bg-sec dark:focus:ring-hoverSec"
          >
            Search
          </button>
        </div>
      </form>

      {/* Assessments Table/Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center py-5">
          <h4 className="text-xl md:text-3xl font-bold text-main">Your Operations</h4>
        </div>

        {/* Mobile & Tablet */}
        <div className="block lg:hidden space-y-4">
          {currentoperations.map((item, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm flex flex-col md:flex-row justify-between">
              <div className="space-y-2">
                  <div className="font-bold text-gray-700">{item.name}</div>
                  <div className="text-sm font-medium text-gray-600 ">Booking ID : {item.booking_id}</div>
                    <div
                    className={` text-center rounded-full w-fit px-3 py-1 ${
                      item.status === "Missed"
                        ? "text-[#b25d5d] bg-[#ffe6e5]"
                        : "text-green-700 bg-green-100"
                    }`}
                  >
                    {item.status}
                  </div>
                  <div className="text-sm font-medium text-gray-600">Created Date : {item.create_date}</div>
              </div>    
              <div className="flex gap-2 pt-2 md:flex-col flex-row justify-end">
                <button  onClick={() => handleOperationsClick(item)}
                  className="text-main border border-main rounded-full p-2 text-sm hover:bg-main hover:text-white"
                >
                  <FaEye size={18} />
                </button>
                <button
                  // onClick={() => {
                  //   setAssessmentToEdit(item);
                  //   setEditModalOpen(true);
                  // }}
                  className="text-sec border border-sec rounded-full p-2 text-sm hover:bg-sec hover:text-white"
                >
                  <FaEdit size={18} />
                </button>
                  <button
                  onClick={() => {
                    setItemToDelete(item);   // save which row we want to delete
                    setDeleteModalOpen(true);
                  }}
                  className="text-red-500 border border-red-500 rounded-full p-2 text-sm hover:bg-red-500 hover:text-white"
                >
                  <MdDelete size={18} />
                </button>
              </div>
              {/* {editModalOpen && assessmentToEdit && (
                <EditAssessmentModal
                  onClose={() => setEditModalOpen(false)}
                  onSave={handleEditSave}
                  initialData={assessmentToEdit}
                />
              )} */}
              {deleteModalOpen && (
                <DeleteAssesmentModal
                  onClose={() => setDeleteModalOpen(false)}
                  onDelete={() => handleDeleteAssesment(itemToDelete?.id)}
                />
              )} 
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-3">Provider Name</th>
                <th>Booking ID</th>
                <th>Status</th>
                <th className="px-4">Created Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentoperations.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="py-4 font-semibold text-gray-600 max-w-[250px] px-3 truncate cursor-default" title={item.name}>
                    {item.name}
                  </td>
                  <td className="py-4 text-gray-600 font-medium max-w-[250px] px-3 truncate cursor-default" title={item.booking_id}>
                    {item.booking_id}
                  </td>
                  <td className="py-4">
                  <span
                    className={`px-3 py-1 ml-3 rounded-full ${
                      item.status === "Missed"
                        ? "text-[#b25d5d] bg-[#ffe6e5]"
                        : "text-green-700 bg-green-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                  <td className="py-4 text-gray-600 px-4">{item.create_date}</td>
                  <td className="py-4 space-x-3 flex px-4">
                    <button  onClick={() => handleOperationsClick(item)}
                      className="text-main border border-main rounded-full p-2 text-sm hover:bg-main hover:text-white"
                    >
                      <FaEye size={18} />
                    </button>
                    <button
                      // onClick={() => {
                      //   setAssessmentToEdit(item);
                      //   setEditModalOpen(true);
                      // }}
                      className="text-sec border border-sec rounded-full p-2 text-sm hover:bg-sec hover:text-white"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => {
                        setItemToDelete(item);   // save which row we want to delete
                        setDeleteModalOpen(true);
                      }}
                      className="text-red-700 border border-red-700 rounded-full p-2 text-sm hover:bg-red-700 hover:text-white"
                    >
                      <MdDelete size={20} />
                    </button>
                    {/* {editModalOpen && assessmentToEdit && (
                      <EditAssessmentModal
                        onClose={() => setEditModalOpen(false)}
                        onSave={handleEditSave}
                        initialData={assessmentToEdit}
                      />
                    )} */}
                    {deleteModalOpen && (
                      <DeleteAssesmentModal
                        onClose={() => setDeleteModalOpen(false)}
                        onDelete={() => handleDeleteAssesment(itemToDelete?.id)}
                      />
                    )} 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={<span className="px-3 py-1 bg-gray-200 rounded">Prev</span>}
          nextLabel={<span className="px-3 py-1 bg-gray-200 rounded">Next</span>}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredOperations.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center mt-8 space-x-2"
          pageClassName="px-3  rounded bg-gray-200"
          activeClassName="bg-sec text-white"
        />
      </div>
    </div>
  );
}
