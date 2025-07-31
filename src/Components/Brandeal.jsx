import amd from '../assets/logos/blogo/amd.webp'
import apple from '../assets/logos/blogo/apple.webp'
import asus from '../assets/logos/blogo/asus.webp'
import cooler from '../assets/logos/blogo/cooler.webp'
import corn from '../assets/logos/blogo/corn.webp'
import corsair from '../assets/logos/blogo/corsair.webp'
import cp from '../assets/logos/blogo/cp.webp'
import dell from '../assets/logos/blogo/dell.webp'
import dlinki from '../assets/logos/blogo/dlinki.webp'
import ezviz from '../assets/logos/blogo/ezviz.webp'
import hik from '../assets/logos/blogo/hik.webp'
import hp from '../assets/logos/blogo/hp.webp'
import intel from '../assets/logos/blogo/intel.webp'
import lenovo from '../assets/logos/blogo/lenovo.webp'
import liv from '../assets/logos/blogo/liv.webp'
import lumi from '../assets/logos/blogo/lumi.webp'
import msi from '../assets/logos/blogo/msi.webp'
import nvidia from '../assets/logos/blogo/nvidia.webp'
import nzxt from '../assets/logos/blogo/nzxt.webp'
import rog from '../assets/logos/blogo/ROG.webp'
import sea from '../assets/logos/blogo/seagate.webp'
import spec from '../assets/logos/blogo/spec.webp'
import tp from '../assets/logos/blogo/tp.webp'
import zotac from '../assets/logos/blogo/zotac.webp'

const partners = [
  
  { name: 'APPLE', logo: apple },
  { name: 'DELL', logo: dell },
  { name: 'ASUS', logo: asus },
  { name: 'HP', logo: hp },
  { name: 'LENOVO', logo: lenovo },
  { name: 'ROG', logo: rog },
  { name: 'MSI', logo: msi },
  { name: 'AMD', logo: amd },
  { name: 'INTEL', logo: intel },
  { name: 'COOLER MASTER', logo: cooler },
  { name: 'CORNEA', logo: corn },
  { name: 'CORSAIR', logo: corsair },
  { name: 'CP PLUS', logo: cp },
  { name: 'D-LINK', logo: dlinki  },
  { name: 'EZVIZ', logo: ezviz },
  { name: 'HIK VISION', logo: hik},
  { name: 'LIVFAST', logo: liv },
  { name: 'LUMINOUS', logo: lumi },
  { name: 'NVIDIA', logo: nvidia },
  { name: 'NZXT', logo: nzxt },
  { name: 'SEAGATE', logo: sea },
  { name: 'SPECTRUM', logo: spec },
  { name: 'TP-Link', logo: tp },
  { name: 'ZOTAC', logo: zotac },
  { name: 'RPSC', logo: nvidia },
  { name: 'University of Delhi', logo: nzxt },
  { name: 'CBSE', logo: rog },
];

const Brandeal = () => {
  return (
    <div className="px-10 py-10 bg-[#122828] text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
        OUR PARTNERS IN SUCCESS
      </h2>
      <p className="text-white text-sm max-w-xl mb-[50px]">
        We collaborate with top government and educational institutions across the country
        to ensure scalable, reliable, and secure digital solutions.
      </p>
      <div className="relative">
        <div className="flex justify-end gap-3 mb-4">
          <button
            className="bg-white/20 text-white px-3 py-2  hover:text-[#122828] transition"
            onClick={() => {
              const container = document.getElementById('scroll-container');
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }}
          >
            ←
          </button>
          <button
            className="bg-white/20 text-white px-3 py-2  hover:text-[#122828] transition"
            onClick={() => {
              const container = document.getElementById('scroll-container');
              container.scrollBy({left: 300, behavior: 'smooth'});
            }}
          >
            →
          </button>
        </div>
        <div id="scroll-container" className="flex gap-5 overflow-x-auto pb-2 scroll-smooth">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="min-w-[130px] lg:min-w-[200px] lg:h-[150px] bg-gray-100 rounded-lg flex flex-col justify-center items-center shadow-md p-3"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-[100px] h-[100px] object-contain mb-2"
              />
              <div className="font-bold text-gray-800 text-base">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brandeal;