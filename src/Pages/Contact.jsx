import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    if (!formData.message.trim()) validationErrors.message = "Message is required";
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic or email API here
      alert("Message sent successfully!");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-[#d1d1d1] flex flex-col justify-center items-center px-4 py-10">
        <h1
          data-aos="zoom-in"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-6 text-center"
        >
          CONTACT US
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-6 rounded-md shadow-md space-y-6">
          {/* Name */}
          <label className="block text-sm font-medium text-gray-700">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </label>

          {/* Email */}
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </label>

          {/* Message */}
          <label className="block text-sm font-medium text-gray-700">
            Message
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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
  );
}

export default Contact;
