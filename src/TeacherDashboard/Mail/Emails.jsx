import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Emails() {
    const [recipientEmail, setRecipientEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
    const res = await axios.post(
        "https://carwashapis.gosmart.ae/send-email/",
        {
            to_email: recipientEmail,
            subject,
            message,
        }
        );
        console.log("✅ Mail Response:", res.data.message);
        toast.success("Email sent successfully!");
    } catch (error) {
        console.error("❌ Error sending email:", error);
        toast.error("Failed to send email.");
    }
}
return (
    <section className="p-6 mt-12 md:mt-5">
    <div className="">
        <h2 className="text-xl md:text-3xl font-bold text-main mb-4">
        Send Mail
        </h2>
        <p className="mb-8 font-light  text-gray-500 dark:text-gray-400 text-lg">
        Use this form to send an email directly to any user.  
        Simply enter the recipient’s email, subject, and your message.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label
                htmlFor="senderEmail"
                className="block mb-2 text-sm font-medium text-main dark:text-gray-300"
                >
                Sender Email
                </label>
                <input
                type="email"
                id="senderEmail"
                value="mal3bk.23@gmail.com" // static email
                readOnly
                className="shadow-sm bg-gray-100 border border-gray-300 text-main text-sm rounded-lg 
                block w-full p-2.5 cursor-not-allowed
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:shadow-sm-light"
                />
            </div>
            <div>
                <label
                htmlFor="recipientEmail"
                className="block mb-2 text-sm font-medium text-main dark:text-gray-300"
                >
                Recipient Email
                </label>
                <input
                type="email"
                id="recipientEmail"
                placeholder="recipient@example.com"
                required
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-main text-sm rounded-lg 
                focus:ring-sec focus:border-sec block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-sec dark:focus:border-sec dark:shadow-sm-light"
                />
            </div>
        </div>
        <div>
            <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-main dark:text-gray-300"
            >
            Subject
            </label>
            <input
            type="text"
            id="subject"
            placeholder="Enter the subject of your email"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block p-3 w-full text-sm text-main bg-gray-50 rounded-lg border 
            border-gray-300 shadow-sm focus:ring-sec focus:border-sec 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-sec dark:focus:border-sec dark:shadow-sm-light"
            />
        </div>
        <div className="sm:col-span-2">
            <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-main dark:text-gray-400"
            >
            Your message
            </label>
            <textarea
            id="message"
            rows="6"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block p-2.5 w-full text-sm text-main bg-gray-50 rounded-lg shadow-sm border 
            border-gray-300 focus:ring-sec focus:border-sec 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-sec dark:focus:border-sec"
            ></textarea>
        </div>
        <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg 
            bg-sec sm:w-fit hover:bg-hoverSec focus:ring-4 focus:outline-none 
            focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-sec 
            dark:focus:ring-hoverbg-hoverSec"
        >
            Send Mail
        </button>
        </form>
    </div>
    </section>
)
}
