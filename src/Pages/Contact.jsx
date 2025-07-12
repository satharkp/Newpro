import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen pt-24 bg-[#d1d1d1] flex flex-col justify-center items-center px-4 py-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h1>
        <form className="w-full max-w-xl bg-white p-6 rounded-md shadow-md space-y-6">
          {/* Name */}
          <label className="block text-sm font-medium text-gray-700">
            Name
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          {/* Email */}
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              name="Email"
              placeholder="you@example.com"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          {/* Message */}
          <label className="block text-sm font-medium text-gray-700">
            Message
            <textarea
              name="Message"
              placeholder="Your message"
              required
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </label>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Contact;
