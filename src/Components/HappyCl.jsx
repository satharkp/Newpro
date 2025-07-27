import kp from '../assets/logos/kp.png'; 
import wa from '../assets/logos/WA.webp';
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
import ams from '../assets/logos/ams.png'
import excise from '../assets/logos/ecxi.png'
import poont from '../assets/logos/poonth.png'
import occ from '../assets/logos/occ.png'
import elect from '../assets/logos/elect.png'
import hdfc from '../assets/logos/hdfc.png'
import ster from '../assets/logos/ster.png'
import zain from '../assets/logos/zain.png'
import ideal from '../assets/logos/ideal.png'
import mount from '../assets/logos/mount.png'
import sins from '../assets/logos/sins.png'
 


const HappyCl = () => {
  const logos = [
    rev,kp,excise,edk,elect,wa,ptb,sng,ideal,mount,mes,occ,bob,pnb,hdfc,poont,ster,zain,mrl,total,dmart,am,ams,sins,
  ];
  return (
    <section className="text-center px-4 mt-32">
      <h1  
      data-aos="zoom-in" 
     className="text-3xl text-center  sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-16">
        OUR HAPPY CLIENTS
      </h1>
      <p className="mb-10  text-gray-600">Trusted by leading businesses</p>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 place-items-center mx-auto lg:max-w-[900px] max-w-[400px] mb-32  ">
        {logos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Client ${idx + 1}`}
            className="h-[60px] max-w-[100px] opacity-80 hover:opacity-100 object-contain mx-auto transition-transform duration-300 hover:scale-110 "
          />
        ))}
      </div>
    </section>
  )
}

export default HappyCl