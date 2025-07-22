import kp from '../assets/logos/kp.png'; 
import wa from '../assets/logos/WA.png';
import edk from '../assets/logos/EDK.png';
import rev from '../assets/logos/rev.png';
import sng from '../assets/logos/SNGS.png';
import ptb from '../assets/logos/ptb.png';
import mes from '../assets/logos/mes.png';
import bob from '../assets/logos/bob.png';
import pnb from '../assets/logos/pnb.png';
import mrl from '../assets/logos/MrL.webp';
import total from '../assets/logos/total.png';
import dmart from '../assets/logos/dmart.png';
import am from '../assets/logos/am.png';



const HappyCl = () => {
  const logos = [
    rev,kp,wa,edk,sng,ptb,mes,bob,pnb,mrl,total,dmart,am
  ];
  return (
    <section className=" text-center px-4">
      <h1  
      data-aos="zoom-in" 
     className="text-3xl text-center  sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16">
        OUR HAPPY CLIENTS
      </h1>
      <p className="mb-10 text-gray-600">Trusted by leading businesses</p>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center mx-auto max-w-[700px] mb-32 ">
        {logos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Client ${idx + 1}`}
            className="h-[60px] max-w-[100px] object-contain mx-auto"
          />
        ))}
      </div>
    </section>
  )
}

export default HappyCl