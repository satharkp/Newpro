import solar from '../assets/sol.jpg'
import tech from '../assets/tech.jpg'
import back from '../assets/bak.jpg'

const About = () => {
  return (
    <div className="scroll-smooth mt-40">
      <div
        id="about"
        className="w-full px-4 py-16 mb-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${back})` }}
      >
        <h1
          data-aos="zoom-in"
          className="text-3xl text-white text-center mt-10 sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16 "
        >
          ABOUT US
        </h1>

        {/* Section 1 – On-site services (solar) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2 opacity-100">
            <img
              className="w-full rounded-sm h-auto object-cover shadow-lg"
              src={solar}
              alt="On-site service"
            />
          </div>
          <div data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
               className="w-full lg:w-1/2 text-white  text-lg lg:text-xl leading-relaxed space-y-6">
            <p>
              At <span className="font-bold text-black">NETMAGIC</span>, we specialize in delivering cutting-edge technology through expert <strong>on-site installation services</strong>. 
              Whether it's <strong>solar panel installation</strong>, <strong>CCTV system setup</strong>, or advanced <strong>home automation services</strong>, our professional technicians ensure every solution is installed with care, precision, and tailored to your unique space.
            </p>
            <p>
              We believe in hands-on service that’s tailored to your unique environment. Our on-ground work reflects our commitment to safety, efficiency, and lasting solutions for your home or business.
            </p>
          </div>
        </div>

        {/* Section 2 – Tech-focused services */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-full lg:w-1/2 opacity-100">
            <img
              className=" w-full rounded-sm h-auto object-cover shadow-lg"
              src={tech}
              alt="Tech services"
            />
          </div>
          <div data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="w-full lg:w-1/2 text-white text-lg lg:text-xl leading-relaxed space-y-6">
            <p>
              At <span className="font-bold text-black">NETMAGIC</span>, we offer comprehensive <strong>technical support services</strong> designed to keep your systems optimized and secure. 
              Our solutions include <strong>laptop repair services</strong>, <strong>network setup and maintenance</strong>, and <strong>software troubleshooting</strong> for both <strong>residential and business clients</strong>.
            </p>
            <p>
              With deep expertise in the latest technologies, our team delivers <strong>reliable IT support</strong> and <strong>future-ready tech solutions</strong> that ensure smooth operations and support your long-term growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;