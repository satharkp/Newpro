import magic from '../assets/logos/magic.webp'
import bni from '../assets/logos/bni.webp';
import akks from '../assets/logos/akks.webp'

const Footer = () => {
  const logos = [
    bni,akks
];
  return (


<footer>
<div className="bg-black px-4 pt-16 w-full md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center cursor-pointer">
        <div className="flex items-center gap-3 flex-wrap ml-[-15px]">
          <img
            src={magic}
            alt="magic logo"
            className="h-16 object-contain max-w-[200px]"
          />
        </div>
      </a>
      <div className="lg:max-w-sm">
        <p className="text-sm text-gray-300">
          NetMagic Computers in Pattambi, Kerala specializes in solar panel installation, CCTV systems, home automation, laptop servicing, networking, and IT support. We deliver reliable tech solutions with expert care for homes and businesses.
        </p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base tracking-wide font-bold text-white">Get in Touch With Us</p>
      <div className="flex flex-col">
        <p className="mr-1 text-gray-400">Phone:</p>
        <a href="tel:974-504-5345" aria-label="Our phone" title="Our phone" className="text-white transition-colors duration-300 hover:text-blue-400">+91 97450 45345   </a>
        <a href="tel:894-320-1000" aria-label="Our phone" title="Our phone" className="text-white transition-colors duration-300 hover:text-blue-400">   +91 89432 01000</a>
      </div>
      <div className="flex flex-col">
        <p className="mr-1 text-gray-400">Email:</p>
        <a href="mailto:netmagiccomputersptb@gmail.com" aria-label="Our email" title="Our email" className="text-white transition-colors duration-300 hover:text-blue-400">netmagiccomputersptb@gmail.com</a>
      </div>
      <div className="flex flex-col">
        <p className="mr-1 text-gray-400">Address:</p>
        <a href="https://maps.app.goo.gl/FAkuDHfp8r5y8J8L6" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="text-white transition-colors duration-300 hover:text-blue-400">
        1st Floor, Anwariya Building,<br />
        Opp. Police Station, Pattambi,<br />
        Palakkad
        </a>
      </div>
    </div>
    <div>
      <span className="text-base font-bold tracking-wide text-white">Social</span>
      <div className="flex items-center mt-1 space-x-3">
        <a href="https://wa.me/918943201000" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15s-.768.966-.941 1.164c-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.199-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.209-.242-.58-.487-.502-.669-.511l-.57-.01c-.198 0-.52.075-.792.373s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.1 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347zm-5.421 6.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741 1.19 1.21-3.651-.235-.375a9.86 9.86 0 01-1.51-5.194c.001-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.333.16 11.887c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-2.003a11.86 11.86 0 005.675 1.446h.005c6.554 0 11.887-5.333 11.889-11.887a11.84 11.84 0 00-3.536-8.468z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/netmagiccomputers?igsh=MTlwdXd1MHZ3ZXlxYQ==" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx="15" cy="15" r="4"></circle>
            <path
              d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
            ></path>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100066976110661" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
            ></path>
          </svg>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-300">
          Need help with tech?<br />
           From solar to software — we’ve got you covered.
      </p>
      <div className="flex justify-center gap-5 scale-[1.7] mt-8">
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
    </div>
    {/* Logos block moved below */}
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-300">
      © Copyright {new Date().getFullYear()} Netmagic. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
      </li>
    </ul>
  </div>
</div>
    
</footer>

  )
}

export default Footer