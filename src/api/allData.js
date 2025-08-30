import axios from "axios";

const API = axios.create({
    baseURL: "https://carwashapis.gosmart.ae",
});

// Fetch all carwash users
export const allData = async () => {
try {
    const response = await API.get("/get_all/carwash_user");
    console.log("✅ API raw response:", response);   // log full axios response
    console.log("✅ API data only:", response.data); // log parsed data
    return response.data; // should include { data: [...] }
} catch (error) {
    console.error("❌ API error:", error.response?.data || error.message);
    throw error;
}
};