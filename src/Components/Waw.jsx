import solar from '../assets/sol.webp'
import tech from '../assets/jubb.webp'
import back from '../assets/aboutbaa.webp'

const About = () => {
  return (
    <div className="scroll-smooth">
      <div
        id="about"
        className="relative w-full px-4 py-16 mb-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1
            className="text-3xl text-white text-start mt-10 sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider  lg: leading-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]"
          >
            ABOUT US
          </h1>

          {/* Section 1 – AI/ML enabled services (new layout) */}
          <div className="w-full flex flex-col lg:flex-row items-center bg-cover bg-center bg-no-repeat bg-fixed px-4 py-16 mb-20" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${back})` }}>
            <div className="lg:w-1/2 w-full text-white bg-black/70 p-8  backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">On-Site Installation</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
                Expertly delivered tech solutions to your doorstep.
              </h1>
              <p className="text-lg mb-6">
                At <span className="font-bold text-[#bcb88a]">NETMAGIC</span>, we specialize in delivering cutting-edge technology through expert <strong>on-site installation services</strong>. 
                Whether it's <strong>solar panel installation</strong>, <strong>CCTV system setup</strong>, or advanced <strong>home automation services</strong>, our professional technicians ensure every solution is installed with care, precision, and tailored to your unique space.
              </p>
              <p className="text-lg mb-6">
                We believe in hands-on service that’s tailored to your unique environment. Our on-ground work reflects our commitment to safety, efficiency, and lasting solutions for your home or business.
              </p>
          
            </div>
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
              <img src={solar} alt="AI/ML Services" className="w-full h-auto object-cover shadow-lg hover:scale-105 duration-500" />
            </div>
          </div>

          {/* Section 2 – Tech-focused services */}
          <div className="w-full flex flex-col lg:flex-row-reverse items-center bg-cover bg-center bg-no-repeat bg-fixed px-4 py-16 mb-10" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${back})` }}>
            <div className="lg:w-1/2 w-full text-white bg-black/70 p-8 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">Tech Support Services</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
                Reliable and secure technical assistance, whenever you need it.
              </h1>
              <p className="text-lg mb-6">
                At <span className="font-bold text-[#bcb88a]">NETMAGIC</span>, we offer comprehensive <strong>technical support services</strong> designed to keep your systems optimized and secure. 
                Our solutions include <strong>laptop repair services</strong>, <strong>network setup and maintenance</strong>, and <strong>software troubleshooting</strong> for both <strong>residential and business clients</strong>.
              </p>
              <p className="text-lg mb-6">
                With deep expertise in the latest technologies, our team delivers <strong>reliable IT support</strong> and <strong>future-ready tech solutions</strong> that ensure smooth operations and support your long-term growth.
              </p>
          
            </div>
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
              <img src={tech} alt="Tech services" className="w-full h-auto object-cover shadow-lg hover:scale-105 duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;