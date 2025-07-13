import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px"
};
 
const center = {
  lat: 10.804048122805051,   // You can change to your location
  lng: 76.18664964170154
};

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
          className="text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16"
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

      <section className="w-full py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="zoom-in"
            className="text-3xl mt-10 text-center sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16"
          >
            DIRECTION
          </h1>
          <div className="flex flex-col md:flex-row gap-8 mt-6 bg-[#c3c2c2] p-10 rounded-md">
            <div className="md:w-1/2 space-y-2">
            <p className="text-md mb-20">
            
                Opposite Police Station, <br />
                Pattambi, Kerala 679303
            </p>

              <div className="bg-[#adacac] p-5 rounded-xl"  >
                <p className="mb-5 underline"><strong>Working Hours:</strong></p>
                <table className="text-md leading-6 w-full">
                  <tbody>
                    <tr><td className="pr-4">Sunday</td><td>Closed</td></tr>
                    <tr><td className="pr-4">Monday</td><td>9:30 am–7 pm</td></tr>
                    <tr><td className="pr-4">Tuesday</td><td>9:30 am–7 pm</td></tr>
                    <tr><td className="pr-4">Wednesday</td><td>9:30 am–7 pm</td></tr>
                    <tr><td className="pr-4">Thursday</td><td>9:30 am–7 pm</td></tr>
                    <tr><td className="pr-4">Friday</td><td>9:30 am–7 pm</td></tr>
                    <tr><td className="pr-4">Saturday</td><td>9:30 am–7 pm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/2">
              <LoadScript googleMapsApiKey="AIzaSyAQGIKzmVWKNZ7gdjOeJAmrPe2r7iBqSi0">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={12}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
