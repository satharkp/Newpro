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
import mesg from '../assets/logos/mesg.png'

import back from '../assets/ba.jpeg'
 


const HappyCl = () => {
  const logos = [
    rev,kp,excise,edk,elect,wa,ptb,sng,mesg,mes,ideal,mount,occ,bob,pnb,hdfc,dmart,ams,poont,ster,zain,mrl,total,am,sins,
  ];
  return (
    <section
      className="relative w-full min-h-screen text-center"
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 0,
        }}
      />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start">
        <h1
          data-aos="zoom-in"
          className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-14 opacity-100 mt-32"
        >
          OUR HAPPY CLIENTS
        </h1>
        <p className="mb-16 text-gray-600">Trusted by Government Departments and Leading Businesses</p>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 place-items-center mx-auto lg:max-w-[110rem] max-w-[400px] mb-10 lg:mb-0">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Client ${idx + 1}`}
              loading="lazy"
              className="h-[60px] max-w-[100px] opacity-80 hover:opacity-100 object-contain mx-auto transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HappyCl