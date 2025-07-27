import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import back from '../assets/bluba.jpg'


const containerStyle = {
  width: "100%",
  height: "400px"
};
 
const center = {
  lat: 10.804048122805051,   // You can change to your location
  lng: 76.18664964170154
};

const Contact = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
    if (!formData.phone.trim()) validationErrors.phone = "Phone number is required";
    if (!formData.service.trim()) validationErrors.service = "Service is required";
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      emailjs.sendForm(
        'service_6v3jxml',
        'template_1w15xwi',
        formRef.current,
        'LKzgczmfOYLfOIrVJ'
      ).then(
        (result) => {
          setFormData({ name: "", phone: "", service: "", message: "" });
          setLoading(false);
          navigate("/success");
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error.text);
          setLoading(false);
        }
      );
    }
  };

  return (
    <>
      <Header />

      <section
        className="w-full py-10 min-h-[420px] bg-cover bg-center bg-no-repeat mt-[60px]"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

        }}
      >
        <div className="w-full">
          <h1
            data-aos="zoom-in"
            className="text-3xl mt-20 text-white text-center sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16"
          >
            GET IN TOUCH WITH US
          </h1>
          <div className="w-full font-mono bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-xl shadow-lg flex flex-col lg:flex-row gap-6 overflow-visible mt-20 min-h-[400px]">
            {/* Section 1: Quote and Address */}
            <div className="flex-1 space-y-4 bg-white/80 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-lg text-balance">
              <h2 className="text-xl font-semibold">Get a Quote</h2>
              <p className="text-sm">Call us for inquiries:</p>
              
             
              <a href="tel:974-504-5345" aria-label="Our phone" title="Our phone" className="text-black transition-colors duration-300 hover:text-blue-400 text-lg font-bold">+91 97450 45345</a>
              <br />
              <a href="tel:894-320-1000" aria-label="Our phone" title="Our phone" className="text-black transition-colors duration-300 hover:text-blue-400 text-lg font-bold">+91 89432 01000</a>

              <p className="text-sm">Email:</p>
              <a href="mailto:netmagiccomputersptb@gmail.com" aria-label="Our email" title="Our email"      className="transition-colors duration-300 hover:text-blue-400 font-bold">netmagiccomputersptb@gmail.com</a>
              <p className="text-sm  mt-4">Corporate Address:</p>
              <p className="text-sm ">
                1st Floor, Anwariya Building,<br />
                Opp. Police Station, Pattambi,<br />
                Palakkad
              </p>
            </div>

            {/* Section 2: Opening Hours */}
            <div className="flex-1   bg-white/80 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-10 mt-10 text-center " >Opening Hours</h2>
              <table className="text-sm leading-6 w-full ">
                <tbody>
                  <tr><td className="pr-4 text-red-600">Sunday</td><td className="text-right text-red-600">Closed</td></tr>
                  <tr><td className="pr-4">Monday</td><td className="text-right text-blue-500">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4">Tuesday</td><td className="text-right text-blue-500">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4">Wednesday</td><td className="text-right text-blue-500">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4">Thursday</td><td className="text-right text-blue-500">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4">Friday</td><td className="text-right text-blue-500">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4">Saturday</td><td className="text-right text-blue-500">9:30 am–7 pm</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section 3: Map */}
            <div className="w-full overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg min-h-[300px] aspect-[16/9] lg:flex-1 lg:h-auto">
              <LoadScript googleMapsApiKey="AIzaSyAQGIKzmVWKNZ7gdjOeJAmrPe2r7iBqSi0">
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  center={center}
                  zoom={16}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </section>


      {/* <div className="min-h-screen pt-24 bg-[#d1d1d1] flex flex-col justify-center items-center px-4 py-10">
        <h1
          data-aos="zoom-in"
          className="text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16"
        >
          CONTACT US
        </h1>
        <form
          ref={formRef}
          data-aos="zoom-in"
          onSubmit={handleSubmit}
          className="w-full max-w-xl text-center font-mono space-y-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 p-5 shadow-lg "
        >
          <p className="text-sm text-center break-words">
            Email us at <br /><span className="font-bold break-all ">netmagiccomputersptb@gmail.com</span><br />or message us here:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-2 outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-2 outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border-b border-black bg-transparent py-2 outline-none"
          >
            <option value="" disabled>Select a service</option>
            <option value="Solar installation">Solar Installation</option>
            <option value="CCTV">CCTV Installation</option>
            <option value="Laptop Services">Laptop Services</option>
            <option value="Home Automation">Home Automation</option>
            <option value="Networking and software">Networking and Software</option>
            <option value="Computer accessories">Computer Accessories</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}

          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-black bg-transparent py-2 outline-none"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 flex justify-center items-center align-middle gap-2 rounded-md text-white px-6 py-2 transition ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div> */}

      <Footer />
      
    </>
  );
}

export default Contact;
