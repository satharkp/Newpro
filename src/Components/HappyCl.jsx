import kp from '../assets/logos/kp.png'; 
import wa from '../assets/logos/WA.png';
import edk from '../assets/logos/EDK.png';
import rev from '../assets/logos/rev.png';
import sng from '../assets/logos/SNGS.png';
import ptb from '../assets/logos/ptb.png';
import mes from '../assets/logos/mes.png';



const HappyCl = () => {
  const logos = [
    rev,kp,wa,edk,sng,ptb,mes
  ];
  return (
    <section className="py-10 text-center">
      <h1  
      data-aos="zoom-in" 
     className="text-3xl text-center mt-10 sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16">
        Our Happy Clients
      </h1>
      <p className="mb-10 text-gray-600">Trusted by leading businesses</p>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Client ${idx + 1}`}
            className="h-[60px] object-contain"
          />
        ))}
      </div>
    </section>
  )
}

export default HappyCl