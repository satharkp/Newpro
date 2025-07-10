import solar from '../assets/sol.jpg'
import tech from '../assets/tech.jpg'

const About = () => {
  return (
    <div id='about' className="px-4 py-16 max-w-7xl mx-auto">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16 "
      >
        ABOUT US
      </h1>

      {/* Section 1 – On-site services (solar) */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="w-full lg:w-1/2 opacity-70">
          <img
            className="rounded-xl w-full h-auto object-cover shadow-lg"
            src={solar}
            alt="On-site service"
          />
        </div>
        <div data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
             className="w-full lg:w-1/2 text-gray-600 text-lg leading-relaxed space-y-6">
          <p>
            At <span className="font-bold text-blue-500">NETMAGIC</span>, we bring technology to your doorstep — literally.
            From solar panel installations to CCTV setups and home automation wiring, our skilled technicians work on-site to ensure every system is installed with care and precision.
          </p>
          <p>
            We believe in hands-on service that’s tailored to your unique environment. Our on-ground work reflects our commitment to safety, efficiency, and lasting solutions for your home or business.
          </p>
        </div>
      </div>

      {/* Section 2 – Tech-focused services */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-1/2 opacity-80">
          <img
            className="rounded-xl w-full h-auto object-cover shadow-lg"
            src={tech}
            alt="Tech services"
          />
        </div>
        <div data-aos="fade-right"
             data-aos-offset="300"
            data-aos-easing="ease-in-sine" 
            className="w-full lg:w-1/2 text-gray-600 text-lg leading-relaxed space-y-6">
          <p>
            Technology moves fast — and so do we. At <span className="font-bold text-blue-500">NETMAGIC</span>, we provide complete digital and technical support to keep your systems running smoothly.
            From laptop repairs to networking and software troubleshooting, we handle both home and business tech challenges with confidence.
          </p>
          <p>
            Our team stays up to date with evolving tools and platforms, allowing us to offer intelligent, reliable, and future-proof tech solutions that support your growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;