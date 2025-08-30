import axios from "axios";
import { useEffect, useState } from "react";

export default function AssessmentDetails({ operation , onBack }) {
  const [services, setServices] = useState([]);
  const [operations, setOperations] = useState([]);
  const [activeTab, setActiveTab] = useState("services"); // default tab

  // Fetch Services
  useEffect(() => {
    const fetchServices = async () => {
      if (!operation?.provider_id) return;
      try {
        const res = await axios.get(
          `https://carwashapis.gosmart.ae/available_services/${operation.provider_id}`
        );
        console.log("✅ Services Response:", res.data);
        const mapped = res.data.data.map((u) => ({
          id: u.id,
          name: u.name,
          image: u.image,
        }));
        setServices(mapped);
      } catch (err) {
        console.error("❌ Error fetching services:", err);
      }
    };
    fetchServices();
  }, [operation]);

  // Fetch Operations
  useEffect(() => {
    const fetchOperations = async () => {
      if (!operation?.provider_id) return;
      try {
        const res = await axios.get(
          `https://carwashapis.gosmart.ae/all_operations/${operation.provider_id}`
        );
        console.log("✅ Operations Response:", res.data);
        const op = res.data.data.map((u) => ({
        id: u.id,
        bookingId: u.booking_id,
        date: u.date ? new Date(u.date).toLocaleDateString("en-GB") : "N/A",
        expectedArrival: u["Expected Arrival Time"] || "N/A",
        status: u.status,
        isArrive: u.is_arrive,
        isExit: u.is_exit,
      }));
        setOperations(op);
      } catch (err) {
        console.error("❌ Error fetching operations:", err);
      }
    };
    fetchOperations();
  }, [operation]);

  return (
    <div>
      <div className="p-6 space-y-4 mb-7">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-main hover:text-hoverMain font-medium"
        >
          ← Back to Operations
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-main border-b pb-2">
          Operation Details
        </h2>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {operation?.name}
          </p>
          <p>
            <span className="font-semibold">Booking ID:</span> {operation?.booking_id}
          </p>
          <p>
            <span className="font-semibold">Provider ID:</span> {operation?.provider_id}
          </p>
          <p>
            <span className="font-semibold">Status:</span>
            <span
              className={`px-3 py-1 ml-2 rounded-full text-xs font-semibold ${
                operation.status === "Done"
                  ? "bg-green-100 text-green-700"
                  : operation.status === "Missed"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {operation?.status}
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-9 border-b mb-4">
        <button
          className={`pb-3 ${activeTab === "services" ? "border-b-2 border-sec text-sec font-bold" : ""}`}
          onClick={() => setActiveTab("services")}
        >
          Available Services
        </button>
        <button
          className={`pb-3 ${activeTab === "operations" ? "border-b-2 border-sec text-sec font-bold" : ""}`}
          onClick={() => setActiveTab("operations")}
        >
          Provider Operations
        </button>
      </div>
      {/* Tab Content */}
      {activeTab === "services" && (
        <div>
          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <p className="font-medium text-main">{service.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No services found.</p>
          )}
        </div>
      )}
      {activeTab === "operations" && (
        <div>
          {operations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {operations.map((op) => (
                <div 
                  key={op.id}
                  className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        op.status === "Done"
                          ? "bg-green-100 text-green-700"
                          : op.status === "Missed"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {op.status}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {op.date}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Booking ID:</span> {op.bookingId}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Expected Arrival:</span>{" "}
                    {op.expectedArrival || "N/A"}
                  </p>
                  <div className="flex justify-between mt-3 text-sm">
                    <p>
                      <span className="font-semibold">Arrived:</span>{" "}
                      {op.isArrive ? "✅" : "❌"}
                    </p>
                    <p>
                      <span className="font-semibold">Exited:</span>{" "}
                      {op.isExit ? "✅" : "❌"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No operations found.</p>
          )}
        </div>
      )}
    </div>
  );
}
