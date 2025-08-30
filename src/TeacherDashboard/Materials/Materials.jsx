import { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddMaterialModal from "./AddMaterialModal";
import EditMaterialModal from "./EditMaterialModal";
import DeleteMaterialModal from "./DeleteMaterialModal";
import FileObject from "../../assets/Materials.pdf";

export default function Materials() {
  const [materials, setMaterials] = useState([
    {
      title: "React Basics PDF",
      uploadDate: "June 10, 2025",
      course: "Pro Frontend Engineer ReactJS",
      file: FileObject,
    },
    {
      title: "Intro to Hooks",
      uploadDate: "June 12, 2025",
      course: "Advanced React",
      file: FileObject,
    },
  ]);

  const [newModalOpen, setNewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [materialToEdit, setMaterialToEdit] = useState(null);

  const handleEditSave = (updated) => {
    setMaterials((prev) =>
      prev.map((item) => (item === materialToEdit ? updated : item))
    );
  };

  const handleAddMaterial = (newMaterial) => {
    setMaterials((prev) => [...prev, newMaterial]);
  };

  const handleDeleteMaterial = () => {
    setMaterials((prev) => prev.filter((item) => item !== materialToEdit));
    setMaterialToEdit(null);
    setDeleteModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center py-5">
          <h4 className="text-2xl font-bold">Materials</h4>
          <button
            onClick={() => setNewModalOpen(true)}
            className="bg-sec text-xs px-3 py-1 md:px-4 md:py-2 md:text-base text-white rounded-lg hover:bg-hoverSec"
          >
            + Add
          </button>
          {newModalOpen && (
            <AddMaterialModal
              onClose={() => setNewModalOpen(false)}
              onAddMaterial={handleAddMaterial}
            />
          )}
        </div>

        {/* Mobile & Tablet */}
        <div className="block lg:hidden space-y-4">
          {materials.map((item, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm bg-white flex flex-col md:flex-row justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-gray-800 truncate" title={item.title}>{item.title}</h3>
                <p className="text-sm text-gray-600">{item.course}</p>
                <p className="text-sm text-gray-400">{item.uploadDate}</p>
              </div>
              <div className="flex gap-2 pt-2 flex-col">
                <button
                  onClick={() => {
                    if (item.file instanceof File) {
                      const pdfUrl = URL.createObjectURL(item.file);
                      window.open(pdfUrl, "_blank");
                    } else if (typeof item.file === "string") {
                      window.open(item.file, "_blank");
                    }
                  }}
                  className="bg-main text-white font-medium border border-main rounded-lg px-3 py-1 hover:bg-hoverMain flex items-center justify-center"
                >
                  <FaEye size={18} className="mr-1" /> View
                </button>
                <button
                  onClick={() => {
                    setMaterialToEdit(item);
                    setEditModalOpen(true);
                  }}
                  className="bg-sec text-white font-medium border border-sec rounded-lg px-3 py-1 hover:bg-hoverSec flex items-center justify-center"
                >
                  <FaEdit size={18} className="mr-1" /> Edit
                </button>
                <button
                  onClick={() => {
                    setMaterialToEdit(item);
                    setDeleteModalOpen(true);
                  }}
                  className="bg-red-700 text-white font-medium border border-red-700 rounded-lg px-3 py-1 hover:bg-red-800 flex items-center justify-center"
                >
                  <MdDelete size={18} className="mr-1" /> Delete
                </button>
                {editModalOpen && materialToEdit && (
                  <EditMaterialModal
                    onClose={() => setEditModalOpen(false)}
                    onSave={handleEditSave}
                    initialData={materialToEdit}
                  />
                )}
                {deleteModalOpen && (
                  <DeleteMaterialModal
                    onClose={() => setDeleteModalOpen(false)}
                    onDelete={handleDeleteMaterial}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-3">Title</th>
                <th>Upload Date</th>
                <th>Course / Lesson</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {materials.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="py-4 font-semibold text-gray-600 max-w-[250px] px-4 truncate cursor-default" title={item.title}>
                    {item.title}
                  </td>
                  <td className="py-4 text-gray-600 px-4">{item.uploadDate}</td>
                  <td className="py-4 text-gray-600 px-4">{item.course}</td>
                  <td className="py-4 space-x-3 flex px-4">
                    <button
                      onClick={() => {
                        if (item.file instanceof File) {
                          const pdfUrl = URL.createObjectURL(item.file);
                          window.open(pdfUrl, "_blank");
                        } else if (typeof item.file === "string") {
                          window.open(item.file, "_blank");
                        }
                      }}
                      className="bg-main text-white font-medium border border-main rounded-lg px-2 py-1 hover:bg-hoverMain flex items-center"
                    >
                      <FaEye size={22} className="mr-1" /> View
                    </button>
                    <button
                      onClick={() => {
                        setMaterialToEdit(item);
                        setEditModalOpen(true);
                      }}
                      className="bg-sec text-white font-medium border border-sec rounded-lg px-2 py-1 hover:bg-hoverSec flex items-center"
                    >
                      <FaEdit size={22} className="mr-1" /> Edit
                    </button>
                    {editModalOpen && materialToEdit && (
                      <EditMaterialModal
                        onClose={() => setEditModalOpen(false)}
                        onSave={handleEditSave}
                        initialData={materialToEdit}
                      />
                    )}
                    <button
                      onClick={() => {
                        setMaterialToEdit(item);
                        setDeleteModalOpen(true);
                      }}
                      className="bg-red-700 text-white font-medium border border-red-700 rounded-lg px-2 py-1 hover:bg-red-800 flex items-center"
                    >
                      <MdDelete size={22} className="mr-1" /> Delete
                    </button>
                    {deleteModalOpen && (
                      <DeleteMaterialModal
                        onClose={() => setDeleteModalOpen(false)}
                        onDelete={handleDeleteMaterial}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
