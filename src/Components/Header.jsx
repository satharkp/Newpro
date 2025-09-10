import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); 
  const [selectedMainService, setSelectedMainService] = useState(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState(null);
  const [selectedSupport, setSelectedSupport] = useState('Accessories');
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const hideTimer = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openNavbar, setOpenNavbar] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();
  // const lastScrollY = useRef(0);
  // const idleTimer = useRef(null);

  const handleMouseEnter = (menuName) => {
    clearTimeout(hideTimer.current);
    setOpenMenu(menuName);
    setActiveDropdown(menuName);
  };
  useEffect(() => {
    if (!openNavbar) {
      setOpenMobileSection(null);
    }
  }, [openNavbar]);

  const handleMouseLeave = () => {
    // Set a delay before closing the menu
    setActiveDropdown(null);
    hideTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200); // ← Adjust delay in ms (e.g., 300 = 0.3s)
  };

  const toggleMenu = () => {
    setMenuOpen(pre => !pre);
  };
  
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // If clicked outside, close the dropdown
      setOpenMenu(null);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [dropdownRef]);


  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      <header ref={dropdownRef}
        id='home'
        className="fixed top-0 left-0 w-full  bg-[#021526]  shadow-sm z-50 flex justify-between items-center h-16 px-2 lp:px-20 text-white"
      >

        <div className="flex items-center ">
          <h1
            className="text-xl font-logo lg:ml-8 ml-3"
          >
            <a href="/">NETMAGIC</a>
            
          </h1>
        </div>


        {/* Navabars*/}
        <nav className="hidden custom:flex justify-end items-center gap-1 w-full py-3 text-[12px] ">
          <a
            href="/"
            className={`px-5 py-[25px]  rounded-sm  ${location.pathname === '/' ? 'text-white bg-[#1d2f36] opacity-90' : 'hover:text-[#939393] text-white opacity-100'}`}
          >
            HOME
          </a>

          <div  className="relative" 
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={handleMouseLeave}>
          <button className="px-3 py-1 cursor-pointer hover:text-[#cacbcb] flex items-center gap-1">
            PRODUCTS
            <span
              className={`inline-block transition-transform duration-500 ${
                activeDropdown === "products" ? "rotate-0" : "rotate-180"
              }`}
            >
              ⌃
            </span>
          </button>

{openMenu === 'products' && (
  <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md w-[600px] p-4 z-50 flex ">
    
    {/* LEFT: Product Categories */}
    <div className="w-1/2 pr-4 space-y-2 text-[13px] font-medium text-gray-800 border-r border-gray-200">
      <p onMouseEnter={() => setSelectedProductCategory('Laptops')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Laptops' ? 'text-[#1d2f36] font-bold' : ''}`}>Laptops & Desktops</p>
      <p onMouseEnter={() => setSelectedProductCategory('CustomPC')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'CustomPC' ? 'text-[#1d2f36] font-bold' : ''}`}>Custom PC Builds</p>
      <p onMouseEnter={() => setSelectedProductCategory('CCTV')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'CCTV' ? 'text-[#1d2f36] font-bold' : ''}`}>CCTV & Surveillance</p>
      <p onMouseEnter={() => setSelectedProductCategory('Networking')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Networking' ? 'text-[#1d2f36] font-bold' : ''}`}>Networking Equipment</p>
      <p onMouseEnter={() => setSelectedProductCategory('Solar')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Solar' ? 'text-[#1d2f36] font-bold' : ''}`}>Solar & Power Systems</p>
      <p onMouseEnter={() => setSelectedProductCategory('Automation')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Automation' ? 'text-[#1d2f36] font-bold' : ''}`}>Home & Office Automation</p>
      <p onMouseEnter={() => setSelectedProductCategory('Access')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Access' ? 'text-[#1d2f36] font-bold' : ''}`}>Security & Access Control</p>
      <p onMouseEnter={() => setSelectedProductCategory('Gates')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Gates' ? 'text-[#1d2f36] font-bold' : ''}`}>Automated Gates & Shutters</p>
      <p onMouseEnter={() => setSelectedProductCategory('Components')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Components' ? 'text-[#1d2f36] font-bold' : ''}`}>PC Components & Peripherals</p>
      <p onMouseEnter={() => setSelectedProductCategory('Accessories')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedProductCategory === 'Accessories' ? 'text-[#1d2f36] font-bold' : ''}`}>Accessories</p>
    </div>
    {/* RIGHT: Sub-Items */}
    <div className="w-1/2 pl-4 text-[13px] text-gray-700 space-y-1">
      {!selectedProductCategory && (
        <p className="text-gray-400">← Select a product category</p>
      )}

      {selectedProductCategory === 'Laptops' && (
        <>
          <p className=" mb-1 text-gray-500">For Offices, Businesses, Home, and Gaming</p>
          <ul className="list-disc pl-5">
            <li>Branded Laptops</li>
            <li>Office & Business Desktops</li>
            <li>Home Use Laptops & PCs</li>
            <li>Gaming Laptops</li>
            <li>Thin Clients & Mini PCs</li>
          </ul>
        </>
      )}

      {selectedProductCategory === 'CustomPC' && (
        <>
          <p className="text-xs mb-1 text-gray-500">Designed for Gamers, Creators, and Professionals</p>
          <ul className="list-disc pl-5">
            <li>Gaming PCs (Entry to Extreme)</li>
            <li>Workstations</li>
            <li>RGB Cabinets & Liquid Cooling</li>
            <li>Performance Tuning</li>
            <li>Tailor-Made PC Services</li>
          </ul>
        </>
      )}

      {selectedProductCategory === 'CCTV' && (
        <>
          <p className="text-xs mb-1 text-gray-500">For Homes, Offices, Apartments</p>
          <ul className="list-disc pl-5">
            <li>IP & Analog Cameras</li>
            <li>Dome, Bullet & PTZ</li>
            <li>NVR/DVR Systems</li>
            <li>Night Vision</li>
            <li>Video Door Phones</li>
          </ul>
        </>
      )}

      {selectedProductCategory === 'Networking' && (
        <ul className="list-disc pl-5">
          <li>Routers & Access Points</li>
          <li>LAN Switches</li>
          <li>Racks & Patch Panels</li>
          <li>Firewalls</li>
          <li>Networking Tools</li>
        </ul>
      )}

      {selectedProductCategory === 'Solar' && (
        <ul className="list-disc pl-5">
          <li>Solar Panels</li>
          <li>Inverters</li>
          <li>Batteries</li>
          <li>Charge Controllers</li>
          <li>Mounting Kits</li>
        </ul>
      )}

      {selectedProductCategory === 'Automation' && (
        <ul className="list-disc pl-5">
          <li>Smart Switches</li>
          <li>Motion Sensors</li>
          <li>Remote Control Systems</li>
          <li>Timers</li>
          <li>Alexa / Google Integration</li>
        </ul>
      )}

      {selectedProductCategory === 'Access' && (
        <ul className="list-disc pl-5">
          <li>Biometric & RFID</li>
          <li>Attendance Machines</li>
          <li>Access Terminals</li>
          <li>Smart Locks</li>
          <li>Sirens & Sensors</li>
        </ul>
      )}

      {selectedProductCategory === 'Gates' && (
        <ul className="list-disc pl-5">
          <li>Sliding/Swing Gate Motors</li>
          <li>Rolling Shutters</li>
          <li>Boom Barriers</li>
          <li>Remote Controls</li>
          <li>Backup Power Options</li>
        </ul>
      )}

      {selectedProductCategory === 'Components' && (
        <ul className="list-disc pl-5">
          <li>RAM, SSD, HDD, GPUs</li>
          <li>Power Supplies</li>
          <li>Cabinets, Fans</li>
          <li>Monitors, Mice</li>
          <li>UPS, Speakers</li>
        </ul>
      )}

      {selectedProductCategory === 'Accessories' && (
        <ul className="list-disc pl-5">
          <li>CCTV Accessories</li>
          <li>Networking Cords & Tools</li>
          <li>USB Hubs, Adapters</li>
          <li>Solar Connectors</li>
          <li>Smart Remotes</li>
        </ul>
      )}
    </div>

  </div>
)}
</div>


<div className="relative" 
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}>
  <button className="px-3 py-1 cursor-pointer hover:text-[#cacbcb] flex items-center gap-1">
            SOLUTIONS
            <span
              className={`inline-block transition-transform duration-500 ${
                activeDropdown === "solutions" ? "rotate-0" : "rotate-180"
              }`}
            >
              ⌃
            </span>
          </button>

  {openMenu === 'solutions' && (
    <div className="absolute top-full text-[13px] left-0 mt-1 bg-white border rounded shadow-md w-[600px] p-4 z-50 flex">
      {/* LEFT: Main Categories */}
            <div className="w-1/2 pr-4 space-y-2 text-sm font-medium text-gray-800">
        <p onMouseEnter={() => setSelectedMainService('VideoSurveillance')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold  ${selectedMainService === 'VideoSurveillance' ? 'text-[#1d2f36] font-bold' : ''}`}>
          Video Surveillance
        </p>
        <p onMouseEnter={() => setSelectedMainService('AudioVisual')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold  ${selectedMainService === 'AudioVisual' ? 'text-[#1d2f36] font-bold' : ''}`}>
          Audio Visual Solutions
        </p>
        <p onMouseEnter={() => setSelectedMainService('DigitalClassrooms')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedMainService === 'DigitalClassrooms' ? 'text-[#1d2f36] font-bold' : ''}`}>
          Digital Classrooms
        </p>
        <p onMouseEnter={() => setSelectedMainService('AutoID')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold  ${selectedMainService === 'AutoID' ? 'text-[#1d2f36] font-bold' : ''}`}>
          Auto ID Solutions
        </p>
        <p onMouseEnter={() => setSelectedMainService('VideoAnalytics')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold  ${selectedMainService === 'VideoAnalytics' ? 'text-[#1d2f36] font-bold' : ''}`}>
          Video Analytics
        </p>
        <p onMouseEnter={() => setSelectedMainService('SmartCity')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold  ${selectedMainService === 'SmartCity' ? 'text-[#1d2f36] font-bold' : ''}`}>
          Smart City Solutions
        </p>
        <p onMouseEnter={() => setSelectedMainService('ITInfra')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold  ${selectedMainService === 'ITInfra' ? 'text-[#1d2f36] font-bold' : ''}`}>
          IT Infrastructure
        </p>
        <p onMouseEnter={() => setSelectedMainService('CommandCenter')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold  ${selectedMainService === 'CommandCenter' ? 'text-[#1d2f36] font-bold' : ''}`}>
          Command & Control Center
        </p>
      </div>

      {/* RIGHT: Sub Items */}
      <div className="w-1/2 pl-4 text-[13px] text-gray-700 space-y-1 border-l border-gray-200">
        {!selectedMainService && (
          <p className="text-gray-400">← Select a solution category</p>
        )}
        {selectedMainService === 'VideoSurveillance' && (
          <ul className="list-disc pl-5">
            <li>CCTV System Design & Installation</li>
            <li>IP & Analog Camera Solutions</li>
            <li>Remote Monitoring & Mobile Access</li>
            <li>Motion Detection & Night Vision Tech</li>
            <li>DVR/NVR Integration</li>
          </ul>
        )}
        {selectedMainService === 'AudioVisual' && (
          <ul className="list-disc pl-5">
            <li>Public Announcement Systems</li>
            <li>Video Conferencing & Audio Solutions</li>
            <li>Home Cinema & Entertainment Systems</li>
            <li>Video Wall & Digital Signage</li>
            <li>Training, Boardroom & Auditorium Setup</li>
            <li>Projectors, Commercial Displays & Streaming</li>
          </ul>
        )}
        {selectedMainService === 'DigitalClassrooms' && (
          <ul className="list-disc pl-5">
            <li>Smart Boards & Interactive Displays</li>
            <li>Classroom Management Systems</li>
            <li>Audio-Visual Integration for Teaching</li>
            <li>Online Learning Infrastructure</li>
            <li>Hybrid Learning Tools</li>
          </ul>
        )}
        {selectedMainService === 'AutoID' && (
          <ul className="list-disc pl-5">
            <li>RFID & Biometric Solutions</li>
            <li>Smart Cards for Access Control</li>
            <li>Barcode Scanners & Labels</li>
            <li>Visitor & Employee Management Systems</li>
          </ul>
        )}
        {selectedMainService === 'VideoAnalytics' && (
          <ul className="list-disc pl-5">
            <li>Object & Face Detection</li>
            <li>Motion Tracking & Event Alerts</li>
            <li>License Plate Recognition</li>
            <li>Behavioral Analysis for Security</li>
          </ul>
        )}
        {selectedMainService === 'SmartCity' && (
          <ul className="list-disc pl-5">
            <li>Smart Poles & Public WiFi</li>
            <li>Intelligent Lighting Systems</li>
            <li>Environmental Monitoring (Air/Noise)</li>
            <li>Traffic & Parking Management</li>
            <li>Integrated Security & IoT</li>
          </ul>
        )}
        {selectedMainService === 'ITInfra' && (
          <ul className="list-disc pl-5">
            <li>Cloud & Storage Solutions</li>
            <li>Data Center Services</li>
            <li>End-User Computing Solutions</li>
            <li>Networking & Cybersecurity</li>
            <li>IT Asset Management</li>
          </ul>
        )}
        {selectedMainService === 'CommandCenter' && (
          <ul className="list-disc pl-5">
            <li>Centralized Surveillance Monitoring</li>
            <li>Emergency Response Setup</li>
            <li>Real-Time Data & Event Handling</li>
            <li>Unified Dashboard & System Control</li>
          </ul>
        )}
      </div>
    </div>
  )}
</div>

          <div
          className="relative" 
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}>
          <button className="px-3 py-1 cursor-pointer hover:text-[#cacbcb] flex items-center gap-1">
            SERVICES
            <span
              className={`inline-block transition-transform duration-500 ${
                activeDropdown === "services" ? "rotate-0" : "rotate-180"
              }`}
            >
              ⌃
            </span>
          </button>

  {openMenu === 'services' && (
    <div className="absolute top-full right-0 mt-1 bg-white border rounded shadow-md w-[500px] p-4 z-50 flex">

      {/* Left Column: Subcategories */}
      <div className="w-1/2 pr-4 text-[13px] text-gray-700 border-r ">
        <ul className="list-disc pl-5 space-y-1 text-black">
          {selectedMainService === 'Power' && (
            <>
              <li>Solar System Installation & Maintenance</li>
              <li>Inverters & Battery Backup Systems</li>
              <li>Energy Monitoring & Management</li>
            </>
          )}
          {selectedMainService === 'Networking' && (
            <>
              <li>Network Infrastructure Setup</li>
              <li>Wi-Fi and LAN Installations</li>
              <li>Firewalls & Network Security Solutions</li>
              <li>Surveillance & CCTV Installations</li>
              <li>Access Control Systems</li>
              <li>Biometric & RFID Solutions</li>
            </>
          )}
          {selectedMainService === 'IT' && (
            <>
              <li>Branded Laptops & Desktops (Sales & Service)</li>
              <li>Custom PC Builds (Gaming / Workstation)</li>
              <li>Computer Accessories & Peripherals</li>
              <li>Annual Maintenance Contracts (AMC)</li>
            </>
          )}
          {selectedMainService === 'Automation' && (
            <>
              <li>Home Automation Solutions</li>
              <li>Office Automation Systems</li>
              <li>Automated Gates & Shutters</li>
              <li>Smart Lighting & Appliance Control</li>
            </>
          )}
          {selectedMainService === 'Surveillance' && (
            <>
              <li>CCTV Setup & Integration</li>
              <li>24/7 Monitoring Solutions</li>
              <li>Motion Detectors & Smart Alarms</li>
              <li>Remote Surveillance Access</li>
            </>
          )}
          {selectedMainService === 'Support' && (
            <>
              <li>AMC for All Products (IT, CCTV, Solar, Automation)</li>
              <li>On-site & Remote Support</li>
              <li>Diagnostics & Repairs</li>
              <li>Warranty & Replacement Services</li>
            </>
          )}
          {!selectedMainService && (
            <li className="text-gray-400 italic">← Select a service</li>
          )}
        </ul>
      </div>

      {/* Right Column: Main Categories */}
      <div className="w-1/2 pl-4">
        <ul className="space-y-2 text-[13px] font-medium text-black">
          <li onMouseEnter={() => setSelectedMainService('Power')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedMainService === 'Power' ? 'text-[#1d2f36] font-bold' : ''}`}>Power & Energy Solutions</li>
          <li onMouseEnter={() => setSelectedMainService('Networking')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedMainService === 'Networking' ? 'text-[#1d2f36] font-bold' : ''}`}>Networking & Security</li>
          <li onMouseEnter={() => setSelectedMainService('IT')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedMainService === 'IT' ? 'text-[#1d2f36] font-bold' : ''}`}>IT & Computing</li>
          <li onMouseEnter={() => setSelectedMainService('Automation')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedMainService === 'Automation' ? 'text-[#1d2f36] font-bold' : ''}`}>Smart Automation</li>
          <li onMouseEnter={() => setSelectedMainService('Surveillance')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedMainService === 'Surveillance' ? 'text-[#1d2f36] font-bold' : ''}`}>Surveillance & Safety</li>
          <li onMouseEnter={() => setSelectedMainService('Support')} className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${selectedMainService === 'Support' ? 'text-[#1d2f36] font-bold' : ''}`}>Support & Maintenance</li>
        </ul>
      </div>
    </div>
  )}
</div>


          <div  className="relative"
          onMouseEnter={() => handleMouseEnter("industries")}
          onMouseLeave={handleMouseLeave}>

<button className="px-3 py-1 cursor-pointer hover:text-[#cacbcb]  flex items-center gap-1">
            INDUSTRIES
            <span
              className={`inline-block transition-transform duration-500 ${
                activeDropdown === "industries" ? "rotate-0" : "rotate-180"
              }`}
            >
              ⌃
            </span>
          </button>

  {openMenu === 'industries' && (
    <div className="absolute top-full right-0 mt-2 z-50">
      <div className="flex bg-white border text-black rounded shadow-md w-[640px]">

        {/* Sub-items LEFT */}
        <div className="w-[400px] p-4 text-[13px] text-gray-700 border-r">
          {selectedMainService === 'Government' && (
            <ul className="list-disc list-inside space-y-1">
              <li>Smart City Infrastructure</li>
              <li>Surveillance & Security Projects</li>
              <li>Solar & Power Solutions for Public Buildings</li>
              <li>Command & Control Centers</li>
              <li>IT Infrastructure & e-Governance Systems</li>
            </ul>
          )}
          {selectedMainService === 'Education' && (
            <ul className="list-disc list-inside space-y-1">
              <li>Smart Classroom Solutions</li>
              <li>Audio-Visual & Projector Setup</li>
              <li>School & College Surveillance (CCTV)</li>
              <li>ID & Attendance Systems</li>
              <li>Networking & Computer Labs</li>
            </ul>
          )}
          {selectedMainService === 'Retail' && (
            <ul className="list-disc list-inside space-y-1">
              <li>CCTV & POS Integration</li>
              <li>Security Gates & RFID</li>
              <li>Automated Entry Shutters</li>
              <li>Inventory Management Systems</li>
              <li>Networking & Wi-Fi Setup for Retail Chains</li>
            </ul>
          )}
          {selectedMainService === 'Hospitality' && (
            <ul className="list-disc list-inside space-y-1">
              <li>Guest Room Automation (Lighting, HVAC, Smart TV)</li>
              <li>Surveillance in Common Areas</li>
              <li>Access Control for Staff & Guests</li>
              <li>Solar Energy for Sustainable Operations</li>
              <li>High-Speed Internet & Network Security</li>
            </ul>
          )}
          {selectedMainService === 'Residential' && (
            <ul className="list-disc list-inside space-y-1">
              <li>CCTV & Access Control for Buildings</li>
              <li>Video Door Phones</li>
              <li>Automated Gates/Shutters</li>
              <li>Solar Panel Installation</li>
              <li>Wi-Fi & Home Automation Solutions</li>
            </ul>
          )}
          {!selectedMainService && (
            <p className="text-gray-400 italic">← Select an industry to view services</p>
          )}
        </div>

        {/* Categories RIGHT */}
        <div className="w-[240px] p-4 text-[13px] bg-gray-50 text-black">
          <ul className="text-sm font-medium space-y-2">
            {['Government', 'Education', 'Retail', 'Hospitality', 'Residential'].map(item => (
              <li
                key={item}
                onMouseEnter={() => setSelectedMainService(item)}
                className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${
                  selectedMainService === item ? 'text-[#1d2f36] font-semibold' : ''
                }`}
              >
                {item === 'Retail' ? 'Retail & Distribution' :
                 item === 'Residential' ? 'Residential / Apartments' : item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )}
</div>
                  <div
          className="relative"  
           onMouseEnter={() => handleMouseEnter("support")}
          onMouseLeave={handleMouseLeave}     >
          <button className="px-3 py-1 cursor-pointer text-[13px] hover:text-[#cacbcb] flex items-center gap-1">
            INSTALL & SUPPORT
            <span
              className={`inline-block transition-transform duration-500 ${
                activeDropdown === "support" ? "rotate-0" : "rotate-180"
              }`}
            >
              ⌃
            </span>
          </button>

          {openMenu === 'support' && (
            <div className="absolute top-full right-0 mt-2 z-50">
              <div className="flex bg-white border rounded shadow-md w-[640px] text-black">

                {/* Sub-items LEFT */}
                <div className="w-[400px] p-4 text-[13px] text-gray-700 border-r">
                  {selectedSupport === 'Accessories' && (
                    <>
                      <p className="font-semibold mb-2">All essential add-ons for:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>CCTV & Surveillance (mounts, cables, HDDs)</li>
                        <li>Networking (LAN cables, switches, racks)</li>
                        <li>Solar Systems (controllers, wiring, mounts)</li>
                        <li>Automation (smart switches, sensors)</li>
                        <li>PC Builds (RAM, SSDs, GPUs, fans, peripherals)</li>
                      </ul>
                    </>
                  )}
                  {selectedSupport === 'Installations' && (
                    <>
                      <p className="font-semibold mb-2">End-to-end setup solutions for:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>CCTV, Networking & Solar</li>
                        <li>Home & Office Automation</li>
                        <li>Smart Classrooms & AV Systems</li>
                        <li>Custom PC & Gaming Rigs</li>
                      </ul>
                      <p className="text-xs mt-2 italic">Includes: Site survey, wiring, mounting, system testing, and demo.</p>
                    </>
                  )}
                  {selectedSupport === 'Maintenance & AMC' && (
                    <>
                      <p className="font-semibold mb-2">Support plans for all systems:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Annual Maintenance Contracts (AMC)</li>
                        <li>One-time service & health checks</li>
                        <li>Scheduled checkups (monthly/quarterly)</li>
                        <li>On-call & on-site support</li>
                      </ul>
                      <p className="text-xs mt-2 italic">Covers: CCTV, Solar, PCs, Networking, Automation</p>
                    </>
                  )}
                </div>

                {/* Main Categories RIGHT */}
                <div className="w-[240px] p-4 bg-gray-50">
                  <ul className="text-sm font-medium space-y-2">
                    {['Accessories', 'Installations', 'Maintenance & AMC'].map(item => (
                      <li
                        key={item}
                        onMouseEnter={() => setSelectedSupport(item)}
                        className={`cursor-pointer hover:text-[#1d2f36] hover:font-bold ${
                          selectedSupport === item ? 'text-[#1d2f36] font-semibold' : ''
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

          <a
            href="/contact"
            className={`px-2 py-6  rounded-sm  ${location.pathname === '/contact' ? 'text-white bg-[#1d2f36] opacity-90' : 'hover:text-[#cacbcb]  opacity-100'}`}
          >
            CONTACT
          </a>
        </nav>

        {/* mobile view*/}
        <button
          onClick={toggleMenu}
          className="custom:hidden text-[35px] p-3 z-50 cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>

      </header>
      <>
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            <div
              id="mobile-menu"
              className="fixed inset-0 top-0 z-[9999] bg-white backdrop-blur-10 w-full h-full flex flex-col pt-20 px-5 transition-all overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
             <button
              onClick={() => {
                setMenuOpen(false);
                setOpenMobileSection(null); // this closes all submenus
              }}
              className="absolute top-4 right-4 text-3xl text-gray-700"
              aria-label="Close menu"
            >
              <i className="bx bx-x"></i>
            </button>
              <nav className="flex flex-col gap-6 items-start w-full max-w-sm text-start ">
                <a onClick={() => setMenuOpen(false)} href="/" className="border-b-2 text-lg border-black px-4 py-2 font-semibold w-full hover:bg-gray-100 ">HOME</a>

                <div className="w-full">
                <button
                  onClick={() =>
                    setOpenMobileSection(openMobileSection === 'products' ? null : 'products')
                  }
                  className="w-full flex items-center justify-between text-left text-lg font-semibold px-4 py-2 border-b-2 border-black hover:bg-gray-100"
                >
                  PRODUCTS
                  <i
                  className={`bx bx-chevron-right text-xl transform transition-transform duration-300 ${
                    openMobileSection === 'products' ? 'rotate-90' : ''
                  }`}
                  ></i>
                </button>



                  {openMobileSection === 'products' &&(
                  <div
                    className="mt-2 px-2 pb-2"
                    style={{ maxHeight: '40vh', overflowY: 'auto' }}
                  >
                  <div className="flex flex-col pl-6 space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold flex justify-between items-center">Laptops & Desktops </p>
                      <ul className="list-disc pl-6">
                        <li>Branded Laptops (All Leading Brands)</li>
                        <li>Office & Business Desktops</li>
                        <li>Home Use Laptops & PCs</li>
                        <li>High-Performance Gaming Laptops</li>
                        <li>Thin Clients & Mini PCs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Custom PC Builds </p>
                      <ul className="list-disc pl-6">
                        <li>Custom Gaming PCs (Entry to Extreme)</li>
                        <li>Content Creation & Workstations</li>
                        <li>RGB Cabinets & Liquid Cooling</li>
                        <li>Performance Tuning & Overclocking</li>
                        <li>Tailor-Made PC Build Services</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">CCTV & Surveillance Systems </p>
                      <ul className="list-disc pl-6">
                        <li>IP & Analog Cameras</li>
                        <li>Bullet, Dome, and PTZ Models</li>
                        <li>NVR/DVR Recorders</li>
                        <li>Night Vision & Motion Detection</li>
                        <li>Video Door Phones & Intercom Systems</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Networking Equipment </p>
                      <ul className="list-disc pl-6">
                        <li>Routers & Wireless Access Points</li>
                        <li>LAN Switches (Managed/Unmanaged)</li>
                        <li>Network Racks & Patch Panels</li>
                        <li>Firewalls & Load Balancers</li>
                        <li>Cabling, Tools, and Testers</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Solar & Power Systems </p>
                      <ul className="list-disc pl-6">
                        <li>Solar Panels (Monocrystalline / Polycrystalline)</li>
                        <li>Inverters (Hybrid, On/Off-Grid)</li>
                        <li>Batteries (Lithium, Lead Acid)</li>
                        <li>Charge Controllers & Optimizers</li>
                        <li>Wiring Kits & Mounting Accessories</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Home & Office Automation </p>
                      <ul className="list-disc pl-6">
                        <li>Smart Switches & Voice-Control Systems</li>
                        <li>Motion & Light Sensors</li>
                        <li>Appliance Automation & Remote Control</li>
                        <li>Smart Plugs & Timers</li>
                        <li>App & Voice Assistant Integration (Alexa, Google)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Security & Access Control </p>
                      <ul className="list-disc pl-6">
                        <li>Biometric & RFID Systems</li>
                        <li>Time Attendance Machines</li>
                        <li>Door Access Terminals</li>
                        <li>Smart Locks</li>
                        <li>Sensors, Buzzers & Sirens</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Automated Gates & Shutters </p>
                      <ul className="list-disc pl-6">
                        <li>Sliding & Swing Gate Motors</li>
                        <li>Rolling Shutters (Motorized & Manual)</li>
                        <li>Boom Barriers for Vehicle Control</li>
                        <li>Remote & App-Based Control Systems</li>
                        <li>Safety Sensors & Backup Power Options</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">PC Components & Peripherals </p>
                      <ul className="list-disc pl-6">
                        <li>RAM, SSD, HDD, GPUs, CPUs</li>
                        <li>Power Supplies, Cabinets, Motherboards</li>
                        <li>Cooling Fans, Liquid Coolers</li>
                        <li>Monitors, Keyboards, Mice</li>
                        <li>UPS, Speakers, Headphones</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Accessories</p>
                      <ul className="list-disc pl-6">
                        <li>CCTV Accessories: Cables, Mounts, HDDs</li>
                        <li>Networking: Patch Cords, Tools, Crimpers</li>
                        <li>PC: Cooling Pads, USB Hubs, Adapters</li>
                        <li>Solar: Connectors, Wiring Kits, Monitoring Tools</li>
                        <li>Home Automation: Smart Remotes, Sensors</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                  )}
                </div>

                {/* SOLUTIONS - mobile menu */}
                <div className="w-full">
                <button
                  onClick={() =>
                    setOpenMobileSection(openMobileSection === 'solutions' ? null : 'solutions')
                  }
                  className="w-full flex items-center justify-between text-left text-lg font-semibold px-4 py-2 border-b-2 border-black hover:bg-gray-100"
                >
                  SOLUTIONS  
                  <i
                  className={`bx bx-chevron-right text-xl transform transition-transform duration-300 ${
                    openMobileSection === 'solutions' ? 'rotate-90' : ''
                  }`}
                  ></i>
                </button>

                {openMobileSection === 'solutions' && (
                  <div
                    className="mt-2 px-2 pb-2"
                    style={{ maxHeight: '40vh', overflowY: 'auto' }}
                  >
                    <div className="mt-2">
                      <ul className="space-y-3">
                        <li>
                          <p className="font-semibold">Video Surveillance</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>CCTV System Design & Installation</li>
                            <li>IP & Analog Camera Solutions</li>
                            <li>Remote Monitoring & Mobile Access</li>
                            <li>Motion Detection & Night Vision Tech</li>
                            <li>DVR/NVR Integration</li>
                          </ul>
                        </li>
                        <li>
                          <p className="font-semibold">Audio Visual Solutions</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>Public Announcement Systems</li>
                            <li>Video Conferencing & Audio Solutions</li>
                            <li>Home Cinema & Entertainment Systems</li>
                            <li>Video Wall & Digital Signage</li>
                            <li>Training, Boardroom & Auditorium Setup</li>
                            <li>Projectors, Commercial Displays & Streaming</li>
                          </ul>
                        </li>
                        <li>
                          <p className="font-semibold">Digital Classrooms</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>Smart Boards & Interactive Displays</li>
                            <li>Classroom Management Systems</li>
                            <li>Audio-Visual Integration for Teaching</li>
                            <li>Online Learning Infrastructure</li>
                            <li>Hybrid Learning Tools</li>
                          </ul>
                        </li>
                        <li>
                          <p className="font-semibold">Auto ID Solutions</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>RFID & Biometric Solutions</li>
                            <li>Smart Cards for Access Control</li>
                            <li>Barcode Scanners & Labels</li>
                            <li>Visitor & Employee Management Systems</li>
                          </ul>
                        </li>
                        <li>
                          <p className="font-semibold">Video Analytics</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>Object & Face Detection</li>
                            <li>Motion Tracking & Event Alerts</li>
                            <li>License Plate Recognition</li>
                            <li>Behavioral Analysis for Security</li>
                          </ul>
                        </li>
                        <li>
                          <p className="font-semibold">Smart City Solutions</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>Smart Poles & Public WiFi</li>
                            <li>Intelligent Lighting Systems</li>
                            <li>Environmental Monitoring (Air/Noise)</li>
                            <li>Traffic & Parking Management</li>
                            <li>Integrated Security & IoT</li>
                          </ul>
                        </li>
                        <li>
                          <p className="font-semibold">IT Infrastructure</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>Cloud & Storage Solutions</li>
                            <li>Data Center Services</li>
                            <li>End-User Computing Solutions</li>
                            <li>Networking & Cybersecurity</li>
                            <li>IT Asset Management</li>
                          </ul>
                        </li>
                        <li>
                          <p className="font-semibold">Command & Control Center</p>
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            <li>Centralized Surveillance Monitoring</li>
                            <li>Emergency Response Setup</li>
                            <li>Real-Time Data & Event Handling</li>
                            <li>Unified Dashboard & System Control</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() =>
                    setOpenMobileSection(openMobileSection === 'services' ? null : 'services')
                  }
                  className="w-full flex items-center justify-between text-left text-lg font-semibold px-4 py-2 border-b-2 border-black hover:bg-gray-100"
                >
                  SERVICES 
                  <i
                  className={`bx bx-chevron-right text-xl transform transition-transform duration-300 ${
                    openMobileSection === 'services' ? 'rotate-90' : ''
                  }`}
                  ></i>
                </button>

                {openMobileSection === 'services' && (
                  <div
                    className="mt-2 px-2 pb-2"
                    style={{ maxHeight: '40vh', overflowY: 'auto' }}
                  >
                    <div className="flex flex-col pl-6 space-y-2 text-sm">
                      <div>
                        <p className="font-semibold flex justify-between items-center">
                          Power & Energy Solutions 
                        </p>
                        <ul className="list-disc pl-6">
                          <li>Solar System Installation & Maintenance</li>
                          <li>Inverters & Battery Backup Systems</li>
                          <li>Energy Monitoring & Management</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold flex justify-between items-center">
                          Networking & Security 
                        </p>
                        <ul className="list-disc pl-6">
                          <li>Network Infrastructure Setup</li>
                          <li>Wi-Fi and LAN Installations</li>
                          <li>Firewalls & Network Security Solutions</li>
                          <li>Surveillance & CCTV Installations</li>
                          <li>Access Control Systems</li>
                          <li>Biometric & RFID Solutions</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold flex justify-between items-center">
                          IT & Computing 
                        </p>
                        <ul className="list-disc pl-6">
                          <li>Branded Laptops & Desktops (Sales & Service)</li>
                          <li>Custom PC Builds (Gaming / Workstation)</li>
                          <li>Computer Accessories & Peripherals</li>
                          <li>Annual Maintenance Contracts (AMC)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold flex justify-between items-center">
                          Smart Automation 
                        </p>
                        <ul className="list-disc pl-6">
                          <li>Home Automation Solutions</li>
                          <li>Office Automation Systems</li>
                          <li>Automated Gates & Shutters</li>
                          <li>Smart Lighting & Appliance Control</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold flex justify-between items-center">
                          Surveillance & Safety 
                        </p>
                        <ul className="list-disc pl-6">
                          <li>CCTV Setup & Integration</li>
                          <li>24/7 Monitoring Solutions</li>
                          <li>Motion Detectors & Smart Alarms</li>
                          <li>Remote Surveillance Access</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold flex justify-between items-center">
                          Support & Maintenance 
                        </p>
                        <ul className="list-disc pl-6">
                          <li>AMC for All Products (IT, CCTV, Solar, Automation)</li>
                          <li>On-site & Remote Support</li>
                          <li>Diagnostics & Repairs</li>
                          <li>Warranty & Replacement Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-full">
              <button
                onClick={() =>
                  setOpenMobileSection(openMobileSection === 'industries' ? null : 'industries')
                }
                className="w-full flex items-center justify-between text-left text-lg font-semibold px-4 py-2 border-b-2 border-black hover:bg-gray-100"
              >
                INDUSTRIES  
                <i
                  className={`bx bx-chevron-right text-xl transform transition-transform duration-300 ${
                    openMobileSection === 'industries' ? 'rotate-90' : ''
                  }`}
                  ></i>
              </button>

              {openMobileSection === 'industries' && (
                <div
                  className="mt-2 px-2 pb-2"
                  style={{ maxHeight: '40vh', overflowY: 'auto' }}
                >
                  <div className="flex flex-col pl-6 space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold flex justify-between items-center">Government </p>
                      <ul className="list-disc pl-6">
                        <li>Smart City Infrastructure</li>
                        <li>Surveillance & Security Projects</li>
                        <li>Solar & Power Solutions for Public Buildings</li>
                        <li>Command & Control Centers</li>
                        <li>IT Infrastructure & e-Governance Systems</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Education </p>
                      <ul className="list-disc pl-6">
                        <li>Smart Classroom Solutions</li>
                        <li>Audio-Visual & Projector Setup</li>
                        <li>School & College Surveillance (CCTV)</li>
                        <li>ID & Attendance Systems</li>
                        <li>Networking & Computer Labs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Retail & Distribution </p>
                      <ul className="list-disc pl-6">
                        <li>CCTV & POS Integration</li>
                        <li>Security Gates & RFID</li>
                        <li>Automated Entry Shutters</li>
                        <li>Inventory Management Systems</li>
                        <li>Networking & Wi-Fi Setup for Retail Chains</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Hospitality </p>
                      <ul className="list-disc pl-6">
                        <li>Guest Room Automation (Lighting, HVAC, Smart TV)</li>
                        <li>Surveillance in Common Areas</li>
                        <li>Access Control for Staff & Guests</li>
                        <li>Solar Energy for Sustainable Operations</li>
                        <li>High-Speed Internet & Network Security</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Residential / Apartments </p>
                      <ul className="list-disc pl-6">
                        <li>CCTV & Access Control for Buildings</li>
                        <li>Video Door Phones</li>
                        <li>Automated Gates/Shutters</li>
                        <li>Solar Panel Installation</li>
                        <li>Wi-Fi & Home Automation Solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>


            <div className="w-full">
            <button
              onClick={() =>
                setOpenMobileSection(openMobileSection === 'installSupport' ? null : 'installSupport')
              }
              className="w-full flex items-center justify-between text-left text-lg font-semibold px-4 py-2 border-b-2 border-black hover:bg-gray-100"
            >
              INSTALL & SUPPORT 
              <i
                  className={`bx bx-chevron-right text-xl transform transition-transform duration-300 ${
                    openMobileSection === 'installSupport' ? 'rotate-90' : ''
                  }`}
                  ></i>
            </button>

            {openMobileSection === 'installSupport' && (
              <div
                className="mt-2 px-2 pb-2"
                style={{ maxHeight: '40vh', overflowY: 'auto' }}
              >
                <div className="flex flex-col pl-6 space-y-4 text-sm text-gray-700">
                  {/* Accessories */}
                  <div>
                    <p className="font-semibold flex justify-between items-center">
                      Accessories 
                    </p>
                    <ul className="list-disc pl-6">
                      <li>CCTV & Surveillance (mounts, cables, HDDs)</li>
                      <li>Networking (LAN cables, switches, racks)</li>
                      <li>Solar Systems (controllers, wiring, mounts)</li>
                      <li>Automation (smart switches, sensors)</li>
                      <li>PC Builds (RAM, SSDs, GPUs, fans, peripherals)</li>
                    </ul>
                  </div>

                  {/* Installations */}
                  <div>
                    <p className="font-semibold flex justify-between items-center">
                      Installations 
                    </p>
                    <ul className="list-disc pl-6">
                      <li>CCTV, Networking & Solar</li>
                      <li>Home & Office Automation</li>
                      <li>Smart Classrooms & AV Systems</li>
                      <li>Custom PC & Gaming Rigs</li>
                    </ul>
                    <p className="text-xs mt-2 italic">
                      Includes: Site survey, wiring, mounting, system testing, and demo.
                    </p>
                  </div>

                  {/* Maintenance & AMC */}
                  <div>
                    <p className="font-semibold flex justify-between items-center">
                      Maintenance & AMC 
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Annual Maintenance Contracts (AMC)</li>
                      <li>One-time service & health checks</li>
                      <li>Scheduled checkups (monthly/quarterly)</li>
                      <li>On-call & on-site support</li>
                    </ul>
                    <p className="text-xs mt-2 italic">
                      Covers: CCTV, Solar, PCs, Networking, Automation
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>


                <a onClick={() => setMenuOpen(false)} href="/contact" className="border-b-2 text-lg border-black px-4 py-2 font-semibold w-full hover:bg-gray-100 ">CONTACT</a>
              </nav>
            </div>
          </>
        )}
      </>
    </>
  )

}

export default Header