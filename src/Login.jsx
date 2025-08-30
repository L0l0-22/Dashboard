import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../src/assets/login.jpg";
import logo from "../src/assets/Logo.png";
import { loginUser, userLogin } from "./api/auth";  // 👈 import both
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function Login() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
        const response = await loginUser(email, password);
        console.log("API Response:", response); 

        if (response.result === true) {
        Cookies.set("isLoggedIn", "true", { expires: 1 / 144 }); 
        Cookies.set("adminId", response.administrator_id, { expires: 1 / 144 });

        const token = await userLogin();
        console.log("User token:", token);

        // save token in cookies for later use
        if (token) {
        Cookies.set("userToken", token, { expires: 1 }); // expires in 1 day
        }

        navigate("/");
        toast.success(response.message || "Login successful");
        } else {
        toast.error(response.message || "Invalid credentials");
        }
    } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
    };

return (
    <div className="min-h-screen flex flex-col lg:flex-row">
    <div className="hidden lg:block lg:w-1/2 relative bg-beige">
    <img
        src={loginimg}
        alt="Login Visual"
        className="w-full h-screen object-cover lg:h-screen "
        />
    </div>
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:my-0 my-auto">
        <div className="max-w-md w-full">
            <Link to="/">
                <img src={logo} alt="Deit Logo" className="w-72  mb-12 mx-auto" />
            </Link>
            <h5 className="text-4xl font-semibold mb-2 text-main">
            Login
            </h5>
            <h5 className="text-gray-600 mb-9">
            Nice to see you again!
            </h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label
                    htmlFor="identifier"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email or Phone
                </label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 border border-gray-300 rounded px-3"
                    autoFocus
                />
                </div>
                <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Password
                </label>
                <div className="relative">
                    <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-12 border border-gray-300 rounded px-3"
                    required
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                    >
                    {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                </div>
                <div className="mt-9">
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-12 font-bold rounded 
                        ${loading 
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"  // disabled state
                        : "bg-sec hover:bg-hoverSec text-white"}          // active state
                    `}
                    >
                    {loading ? "Logging in..." : "Login"}
                </button>
                </div>
            </form>
        </div>
    </div>
    </div>
);
}


