import 'boxicons/css/boxicons.min.css';
import magic from '../assets/logos/magic.webp'
import back from '../assets/bgi.png'
import bni from '../assets/logos/bni.webp';
import akks from '../assets/logos/akks.webp'

const Hero = () => {
  const logos = [
    bni,akks
];
  return (
    <>
    <main 
    // style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} 
    
    className="w-screen h-screen flex items-center justify-start px-5 lg:px-10  bg-[white]">
      <div data-aos="fade-right"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine" 
       className="z-10 max-w-3xl text-black">


        

        <div className="flex items-center gap-3 flex-wrap  mt-[50%] lg:mt-0">
          <img
            src={magic}
            alt="magic logo"
            className="h-16 object-contain max-w-[200px] duration-500 scale-[0.8] lg:ml-0 ml-[-26px] lg:scale-[1.2]"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5" >
          SECURE. EMPOWER. <br /> AUTOMATE. SUPPORT.
        </h1>
        <p className="text-md  mb-8 leading-relaxed max-w-2xl font-sans">
          Your space deserves reliable, future-ready technology. We specialize in security systems, solar energy, home and office automation, custom PCs, automated gates & shutters, and IT support — all delivered with precision, expertise, and a commitment to long-term reliability.
        </p>

        <div className="flex gap-4">
          <a
            href="#about"
            className="cursor-pointer border border-black text-black hover:bg-black hover:text-white transition-all px-6 py-3 rounded-sm font-medium flex items-center gap-2"
          >
            About Us <i className="bx bx-right-arrow-alt cursor-pointer"></i>
          </a>
          <a
            href="/contact"
            className="cursor-pointer border border-black text-black hover:bg-black hover:text-white transition-all px-6 py-3 rounded-sm font-medium flex items-center gap-2"
          >
            Contact Us <i className="bx bx-right-arrow-alt cursor-pointer"></i>
          </a>
        </div>
      </div>
      <div className="absolute scale-[1.2] lg:scale-[2] top-3 right-4 lg:right-14 flex gap-2 mt-[70px]">
        {logos.map((src, idx) => (
          <a
            key={idx}
            href={idx === 0 ? "https://bni-india.in/en-IN/index" : "https://akessia.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={src}
              alt={`Client ${idx + 1}`}
              loading="lazy"
              className="h-10 object-contain max-w-[100px] hover:scale-110 duration-500"
            />
          </a>
        ))}
      </div>
    </main>
    </>
    
  )
}

export default Hero