import axios from "axios";

const API = axios.create({
baseURL: "https://carwashapis.gosmart.ae",
});

// Login function for dashboard
export const loginUser = async (email, password) => {
try {
    const response = await API.post("/verify_Login_dashboard", {
    email,
    password,
    });

    return response.data; // expected: { token, user, ... }
} catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
}
};

// Login function for user (to get token)
export const userLogin = async () => {
try {
    const response = await API.post("/user_login", {
    login: "+201023412334", // static phone
    flag: true              // static flag
    }, {
    headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
    }
    });
    // This will return only the token from the response
    return response.data?.access_token;
    } catch (error) {
        console.error("User login error:", error.response?.data || error.message);
        throw error;
    }
};
