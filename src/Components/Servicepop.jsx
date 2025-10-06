import { useState, useEffect } from "react";

const services = [
  "Solar, Inverters & Batteries",
  "CCTV & Security Systems",
  "Home Automation & Smart Gates",
  "Computers & Peripherals",
  "Interactive Panels & Home Theaters",
  "Printers & Scanners",
  "Installations, AMC & Support Services",
  "Others"
];

const ContactServicespop = ({ onClose }) => {
  const phoneNumber = "918943201000"; // your WhatsApp number

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  const handleSelect = (service) => {
    const message = `Hi, I'm interested in your *${service}* service. Could you please tell me more?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose(); // optionally close the modal after click
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[999] p-4">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 animate-fadeIn">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl sm:text-3xl mb-5 sm:mb-6 text-center text-gray-800">
          Our Services
        </h2>

        {/* Scrollable list */}
        <ul className="space-y-2 sm:space-y-3 max-h-[60vh] overflow-y-auto">
          {services.map((service, index) => (
            <li
              key={index}
              onClick={() => handleSelect(service)}
              className="p-3 sm:p-4 border rounded-sm cursor-pointer transition duration-300 hover:bg-gray-100"
            >
              <p className="font-medium text-gray-700 text-sm sm:text-base">{service}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ContactServicespop;

