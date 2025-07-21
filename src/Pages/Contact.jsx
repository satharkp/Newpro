import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

 
const center = {
  lat: 10.804048122805051,   // You can change to your location
  lng: 76.18664964170154
};

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);



  return (
    <>
      <Header />

      <section className="w-full py-10 min-h-[420px]">
        <div className="w-full">
          <h1
            data-aos="zoom-in"
            className="text-3xl mt-20 text-center sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16"
          >
            DIRECTION
          </h1>
          <div className="w-full font-mono bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-xl shadow-lg flex flex-col lg:flex-row gap-6 overflow-visible">
            {/* Section 1: Quote and Address */}
            <div className="flex-1 space-y-4   bg-white/20 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold">Get a Quote</h2>
              <p className="text-sm">Call us for inquiries:</p>
              
              <a href="tel:974-504-5345" aria-label="Our phone" title="Our phone" className="text-black transition-colors duration-300 hover:text-blue-400 text-lg font-bold">+91 97450 45345</a>
              <br />
              <a href="tel:894-320-1000" aria-label="Our phone" title="Our phone" className="text-black transition-colors duration-300 hover:text-blue-400 text-lg font-bold">+91 89432 01000</a>
              
              <p className="text-sm  mt-4">Corporate Address:</p>
              <p className="text-sm ">
                1st Floor, Anwariya Building,<br />
                Opp. Police Station, Pattambi,<br />
                Palakkad
              </p>
            </div>

            {/* Section 2: Opening Hours */}
            <div className="flex-1   bg-white/20 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-lg">
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
            <div className="w-full overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg h-[300px] lg:flex-1 lg:h-auto">
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

      <Footer />
      
    </>
  );
}

export default Contact;
