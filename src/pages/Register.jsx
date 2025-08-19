import React, { useState } from 'react';
import loginimg from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import 'react-phone-input-2/lib/style.css';

export default function Register() {
    const { t } = useTranslation();
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row h-screen">
            {/* Left image section */}
            <div className="hidden lg:block lg:w-1/2 relative bg-beige">
                <img
                    src={loginimg}
                    alt={t("loginImageAlt")}
                    className="w-full h-screen object-cover lg:h-screen"
                />
            </div>
            
            {/* Right form section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                <div className="w-full max-w-xl">
                    <Link to="/">
                        <img src={logo} alt={t("logoAlt")} className="w-72 mb-12 mx-auto" />
                    </Link>
                    <h5 className="text-4xl font-semibold mb-2 text-redS">
                        {t("register.title")}
                    </h5>
                    <h5 className="text-gray-600 mb-6">
                        {t("register.subtitle")}
                    </h5>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Name fields */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-medium">
                                    {t("register.firstName")}
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    required
                                    className="h-[50px] w-full bg-white border border-gray-200 rounded px-3"
                                    placeholder={t("register.firstNamePlaceholder")}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-medium">
                                    {t("register.lastName")}
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    required
                                    className="h-[50px] w-full bg-white border border-gray-200 rounded px-3"
                                    placeholder={t("register.lastNamePlaceholder")}
                                />
                            </div>
                        </div>
                        
                        {/* Email & Phone */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-2 text-sm font-medium">
                                    {t("register.email")}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="h-[50px] w-full bg-white border border-gray-200 rounded px-3"
                                    placeholder={t("register.emailPlaceholder")}
                                />
                            </div>
                            <div className="flex flex-col w-full"dir="ltr" >
                                <label className="mb-2 text-sm font-medium">
                                    {t("register.phone")}
                                </label>
                                <PhoneInput
                                    country={'eg'}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    inputStyle={{
                                        height: '50px',
                                        width: '100%',
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '0.375rem',
                                        paddingLeft: '48px',
                                        fontSize: '14px',
                                        direction: 'ltr', 
                                        textAlign: 'left',
                                    }}
                                    buttonStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                         direction: 'ltr',
                                    }}
                                />
                            </div>
                        </div>
                        
                        {/* Country select */}
                        <div className="w-full">
                            <label className="mb-2 text-sm font-medium">
                                {t("register.country")}
                            </label>
                            <select
                                name="country"
                                required
                                className="h-[50px] w-full bg-white border border-gray-200 rounded px-3"
                            >
                                <option value="">{t("register.selectCountry")}</option>
                                <option value="USA">{t("countries.usa")}</option>
                                <option value="Canada">{t("countries.canada")}</option>
                                <option value="UK">{t("countries.uk")}</option>
                                <option value="Germany">{t("countries.germany")}</option>
                                <option value="Australia">{t("countries.australia")}</option>
                            </select>
                        </div>
                        
                        {/* Password fields */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="flex flex-col w-100">
                                <label className="mb-2 text-sm font-medium">
                                    {t("register.password")}
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="h-[50px] w-full bg-white border border-gray-200 rounded px-3"
                                    placeholder={t("register.passwordPlaceholder")}
                                />
                            </div>
                            <div className="flex flex-col w-100">
                                <label className="mb-2 text-sm font-medium">
                                    {t("register.confirmPassword")}
                                </label>
                                <input
                                    type="password"
                                    name="Confirm_Password"
                                    required
                                    className="h-[50px] w-full bg-white border border-gray-200 rounded px-3"
                                    placeholder={t("register.confirmPasswordPlaceholder")}
                                />
                            </div>
                        </div>
                        
                        {/* Submit button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full h-12 bg-main hover:bg-mainHover text-white font-bold rounded"
                            >
                                {t("register.button")}
                            </button>
                        </div>
                        
                        {/* Login redirect */}
                        <div className="text-center">
                            <p className="text-sm">
                                {t("register.haveAccount")}{" "}
                                <Link to="/login" className="text-redS hover:underline ml-1">
                                    {t("register.loginHere")}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}