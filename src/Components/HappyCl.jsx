import kp from '../assets/logos/kp.webp'; 
import wa from '../assets/logos/WA.webp';
import edk from '../assets/logos/EDK.webp';
import rev from '../assets/logos/rev.webp';
import sng from '../assets/logos/SNGS.webp';
import ptb from '../assets/logos/ptb.webp';
import mes from '../assets/logos/mes.webp';
import bob from '../assets/logos/bob.webp';
import pnb from '../assets/logos/pnb.webp';
import mrl from '../assets/logos/MrL.webp';
import total from '../assets/logos/total.webp';
import dmart from '../assets/logos/dmart.webp';
import am from '../assets/logos/am.webp';
import ams from '../assets/logos/ams.webp'
import excise from '../assets/logos/ecxi.webp'
import poont from '../assets/logos/poonth.webp'
import occ from '../assets/logos/occ.webp'
import elect from '../assets/logos/elect.webp'
import hdfc from '../assets/logos/hdfc.webp'
import ster from '../assets/logos/ster.webp'
import zain from '../assets/logos/zain.webp'
import ideal from '../assets/logos/ideal.webp'
import mount from '../assets/logos/mount.webp'
import sins from '../assets/logos/sins.webp'
import mesg from '../assets/logos/mesg.webp'
import dubai from '../assets/logos/dubai.png'
import hayath from '../assets/logos/hayath.jpg'
import mesk from '../assets/logos/meska.png'
import pazheri from '../assets/logos/pazheri.png'

import back from '../assets/ba.webp'
 


const HappyCl = () => {
  const logos = [
    rev,kp,excise,edk,elect,wa,ptb,sng,mesk,mesg,mes,ideal,mount,occ,bob,pnb,hdfc,dmart,ams,poont,ster,zain,mrl,total,am,sins,dubai,hayath,pazheri
  ];
  return (
    <section className="relative w-full min-h-screen text-center overflow-hidden bg-[#2f4446] py-20 px-4">
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          OUR HAPPY CLIENTS
        </h1>
        <p className="mb-16 text-gray-300 text-sm sm:text-base">
          Trusted by Government Departments and Leading Businesses
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 place-items-center mx-auto w-full max-w-7xl px-4 mb-10 lg:mb-0">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Client ${idx + 1}`}
              loading="lazy"
              width="100"
              height="60"
              className="h-[60px] w-[100px] object-contain opacity-100 hover:scale-110 transition duration-300 ease-in-out "
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HappyCl