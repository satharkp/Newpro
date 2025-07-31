import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import back from '../assets/contaa.jpg'
 
const center = {
  lat: 10.804048122805051,   // You can change to your location
  lng: 76.18664964170154
};



    function Contact() {

      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
      }, []);

      return (
      <div className="overflow-hidden">
      <Header />

      <section className="relative w-full py-10 bg-gradient-to-br from-[#d7efc3] to-[#4da8ab] min-h-[420px] mt-[60px] overflow-x-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9
          }}
        />
        {/* Foreground content */}
        <div className="relative z-10 w-full font-sans">
          <h1
            data-aos="zoom-in"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight"
          >
            GET IN TOUCH WITH US
          </h1>
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6 bg-white/10 p-6 rounded-xl shadow-lg overflow-hidden mt-20 min-h-[400px] font-sans">
            {/* Section 1: Quote and Address */}
            <div className="flex-1 space-y-4 bg-white/70 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg text-balance">
              <h2 className="text-2xl font-semibold text-gray-800">Get a Quote</h2>
              <p className="text-base text-gray-700">Call us for inquiries:</p>
              
             
              <a href="tel:974-504-5345" aria-label="Our phone" title="Our phone" className="text-black transition-colors duration-300 hover:text-blue-400 text-lg font-bold">+91 97450 45345</a>
              <br />
              <a href="tel:894-320-1000" aria-label="Our phone" title="Our phone" className="text-black transition-colors duration-300 hover:text-blue-400 text-lg font-bold">+91 89432 01000</a>

              <p className="text-base text-gray-700">Email:</p>
              <a href="mailto:netmagiccomputersptb@gmail.com" aria-label="Our email" title="Our email"      className="transition-colors duration-300 hover:text-blue-400 font-bold">netmagiccomputersptb@gmail.com</a>
              <p className="text-base text-gray-700 mt-4">Corporate Address:</p>
              <p className="text-base text-gray-700">
                1st Floor, Anwariya Building,<br />
                Opp. Police Station, Pattambi,<br />
                Palakkad
              </p>
            </div>

            {/* Section 2: Opening Hours */}
            <div className="flex-1 space-y-4 bg-white/70 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-10 mt-10 text-center" >Opening Hours</h2>
              <table className="text-base leading-7 w-full font-sans">
                <tbody>
                  <tr><td className="pr-4 text-red-600 font-medium">Sunday</td><td className="text-right text-red-600 font-medium">Closed</td></tr>
                  <tr><td className="pr-4 font-medium">Monday</td><td className="text-right text-blue-500 font-medium">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4 font-medium">Tuesday</td><td className="text-right text-blue-500 font-medium">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4 font-medium">Wednesday</td><td className="text-right text-blue-500 font-medium">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4 font-medium">Thursday</td><td className="text-right text-blue-500 font-medium">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4 font-medium">Friday</td><td className="text-right text-blue-500 font-medium">9:30 am–7 pm</td></tr>
                  <tr><td className="pr-4 font-medium">Saturday</td><td className="text-right text-blue-500 font-medium">9:30 am–7 pm</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section 3: Map */}
            <div className="flex-1">
              <div className="w-full h-full overflow-hidden bg-white/10 rounded-xl shadow-lg min-h-[300px]">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
