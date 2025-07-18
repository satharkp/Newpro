import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(null); 
  const [selectedMainService, setSelectedMainService] = useState(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState(null);
  const [selectedSupport, setSelectedSupport] = useState('Accessories');
  
  const lastScrollY = useRef(0);
  const idleTimer = useRef(null);
  const location = useLocation();


  const toggleMenu = () => {
    setMenuOpen(pre => !pre);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
      resetIdleTimer();
    };

    const handleMouseMove = () => {
      if (menuOpen) return;
      setIsVisible(true);
      resetIdleTimer();
    };

    const resetIdleTimer = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        if (!menuOpen) setIsVisible(false);
      }, 4000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      <header
        id='home'
        className={`fixed top-0 left-0 w-full bg-[#d1d1d1] shadow z-50 flex justify-between items-center h-16 px-4 lp:px-20 transition-transform duration-500 ${isVisible || menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >

        <div className="flex items-center">
          <h1
            className="text-xl font-logo md:ml-8"
          >
            <a href="/">NETMAGIC</a>
            
          </h1>
        </div>

        {/* Navabars*/}
        <nav className="hidden custom:flex justify-end items-center gap-8 w-full bg-[#d1d1d1] py-3 text-sm font-semibold">
          <a
            href="/"
            className={`px-3 py-1 rounded ${location.pathname === '/' ? 'text-white bg-blue-500' : 'hover:text-blue-500'}`}
          >
            HOME
          </a>

          <div className="relative">
  <button
    onClick={() => setOpenMenu(openMenu === 'products' ? null : 'products')}
    className="px-3 py-1 cursor-pointer hover:text-blue-500"
  >
    PRODUCTS ▼
  </button>

  {openMenu === 'products' &&  (
    <div className="absolute top-full right-0 mt-1 bg-white border rounded shadow-md w-[600px] p-4 z-50 flex">
      
      {/* LEFT: Sub-Items */}
      <div className="w-1/2 pr-4 text-sm text-gray-700 space-y-1 border-r border-gray-200">
        {!selectedProductCategory && (
          <p className="text-gray-400">← Select a product category</p>
        )}

        {selectedProductCategory === 'Laptops' && (
          <>
            <p className="text-xs mb-1 text-gray-500">For Offices, Businesses, Home, and Gaming</p>
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

      {/* RIGHT: Product Categories */}
      <div className="w-1/2 pl-4 space-y-2 text-sm font-medium text-gray-800">
        <p onClick={() => setSelectedProductCategory('Laptops')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Laptops' && 'text-blue-600'}`}>Laptops & Desktops</p>
        <p onClick={() => setSelectedProductCategory('CustomPC')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'CustomPC' && 'text-blue-600'}`}>Custom PC Builds</p>
        <p onClick={() => setSelectedProductCategory('CCTV')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'CCTV' && 'text-blue-600'}`}>CCTV & Surveillance</p>
        <p onClick={() => setSelectedProductCategory('Networking')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Networking' && 'text-blue-600'}`}>Networking Equipment</p>
        <p onClick={() => setSelectedProductCategory('Solar')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Solar' && 'text-blue-600'}`}>Solar & Power Systems</p>
        <p onClick={() => setSelectedProductCategory('Automation')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Automation' && 'text-blue-600'}`}>Home & Office Automation</p>
        <p onClick={() => setSelectedProductCategory('Access')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Access' && 'text-blue-600'}`}>Security & Access Control</p>
        <p onClick={() => setSelectedProductCategory('Gates')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Gates' && 'text-blue-600'}`}>Automated Gates & Shutters</p>
        <p onClick={() => setSelectedProductCategory('Components')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Components' && 'text-blue-600'}`}>PC Components & Peripherals</p>
        <p onClick={() => setSelectedProductCategory('Accessories')} className={`cursor-pointer hover:text-blue-500 ${selectedProductCategory === 'Accessories' && 'text-blue-600'}`}>Accessories</p>
      </div>
    </div>
  )}
</div>


<div className="relative">

  <a onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')}
  className="px-3 py-1 cursor-pointer hover:text-blue-500">SOLUTIONS ▼</a>

  {openMenu === 'solutions' && (
    <div className="absolute top-full right-0 mt-1 bg-white border rounded shadow-md w-[600px] p-4 z-50 flex">
      
      {/* LEFT: Sub Items */}
      <div className="w-1/2 pr-4 text-sm text-gray-700 space-y-1 border-r border-gray-200">
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

      {/* RIGHT: Main Categories */}
      <div className="w-1/2 pl-4 space-y-2 text-sm font-medium text-gray-800">
        <p onClick={() => setSelectedMainService('VideoSurveillance')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'VideoSurveillance' && 'text-blue-600'}`}>
          Video Surveillance
        </p>
        <p onClick={() => setSelectedMainService('AudioVisual')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'AudioVisual' && 'text-blue-600'}`}>
          Audio Visual Solutions
        </p>
        <p onClick={() => setSelectedMainService('DigitalClassrooms')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'DigitalClassrooms' && 'text-blue-600'}`}>
          Digital Classrooms
        </p>
        <p onClick={() => setSelectedMainService('AutoID')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'AutoID' && 'text-blue-600'}`}>
          Auto ID Solutions
        </p>
        <p onClick={() => setSelectedMainService('VideoAnalytics')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'VideoAnalytics' && 'text-blue-600'}`}>
          Video Analytics
        </p>
        <p onClick={() => setSelectedMainService('SmartCity')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'SmartCity' && 'text-blue-600'}`}>
          Smart City Solutions
        </p>
        <p onClick={() => setSelectedMainService('ITInfra')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'ITInfra' && 'text-blue-600'}`}>
          IT Infrastructure
        </p>
        <p onClick={() => setSelectedMainService('CommandCenter')} className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'CommandCenter' && 'text-blue-600'}`}>
          Command & Control Center
        </p>
      </div>
    </div>
  )}
</div>


          <div
  className="relative" >
  <button onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')}
   className="px-3 py-1 cursor-pointer hover:text-blue-500">SERVICES ▼</button>

  {openMenu === 'services' && (
    <div className="absolute top-full right-0 mt-1 bg-white border rounded shadow-md w-[500px] p-4 z-50 flex">

      {/* Left Column: Subcategories */}
      <div className="w-1/2 pr-4 text-sm text-gray-700 border-r">
        <ul className="list-disc pl-5 space-y-1">
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
        <ul className="space-y-2 text-sm font-medium">
          <li
            onClick={() => setSelectedMainService('Power')}
            className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'Power' ? 'text-blue-500' : ''}`}
          >
            Power & Energy Solutions
          </li>
          <li
            onClick={() => setSelectedMainService('Networking')}
            className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'Networking' ? 'text-blue-500' : ''}`}
          >
            Networking & Security
          </li>
          <li
            onClick={() => setSelectedMainService('IT')}
            className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'IT' ? 'text-blue-500' : ''}`}
          >
            IT & Computing
          </li>
          <li
            onClick={() => setSelectedMainService('Automation')}
            className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'Automation' ? 'text-blue-500' : ''}`}
          >
            Smart Automation
          </li>
          <li
            onClick={() => setSelectedMainService('Surveillance')}
            className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'Surveillance' ? 'text-blue-500' : ''}`}
          >
            Surveillance & Safety
          </li>
          <li
            onClick={() => setSelectedMainService('Support')}
            className={`cursor-pointer hover:text-blue-500 ${selectedMainService === 'Support' ? 'text-blue-500' : ''}`}
          >
            Support & Maintenance
          </li>
        </ul>
      </div>
    </div>
  )}
</div>


          <div  className="relative">

  <button
  onClick={() => setOpenMenu(openMenu === 'industries' ? null : 'industries')}
    className="px-3 py-1 cursor-pointer hover:text-blue-500"
  >
    INDUSTRIES ▼
  </button>

  {openMenu === 'industries' && (
    <div className="absolute top-full right-0 mt-2 z-50">
      <div className="flex bg-white border rounded shadow-md w-[640px]">

        {/* Sub-items LEFT */}
        <div className="w-[400px] p-4 text-sm text-gray-700 border-r">
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
        <div className="w-[240px] p-4 bg-gray-50">
          <ul className="text-sm font-medium space-y-2">
            {['Government', 'Education', 'Retail', 'Hospitality', 'Residential'].map(item => (
              <li
                key={item}
                onClick={() => setSelectedMainService(item)}
                className={`cursor-pointer hover:text-blue-500 ${
                  selectedMainService === item ? 'text-blue-600 font-semibold' : ''
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
          className="relative"        >
          <button 
           onClick={() => setOpenMenu(openMenu === 'support' ? null : 'support')}
           className="px-3 py-1 cursor-pointer hover:text-blue-500">
            INSTALL & SUPPORT ▼
          </button>

          {openMenu === 'support' && (
            <div className="absolute top-full right-0 mt-2 z-50">
              <div className="flex bg-white border rounded shadow-md w-[640px]">

                {/* Sub-items LEFT */}
                <div className="w-[400px] p-4 text-sm text-gray-700 border-r">
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
                        onClick={() => setSelectedSupport(item)}
                        className={`cursor-pointer hover:text-blue-500 ${
                          selectedSupport === item ? 'text-blue-600 font-semibold' : ''
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
            className={`px-3 py-1 cursor-pointer rounded ${location.pathname === '/contact' ? 'text-white bg-blue-500' : 'hover:text-blue-500'}`}
          >
            CONTACT
          </a>
        </nav>

        {/* mobile view*/}
        <button
          onClick={toggleMenu}
          className="custom:hidden text-5xl p-2 z-50 cursor-pointer"
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
              className="fixed inset-0 top-0 z-[9999] bg-white backdrop-blur-10 w-full h-full flex flex-col pt-20 px-6 transition-all overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-3xl text-gray-700"
                aria-label="Close menu"
              >
                <i className="bx bx-x"></i>
              </button>
              <nav className="flex flex-col gap-6 items-start w-full max-w-sm">
                <a onClick={() => setMenuOpen(false)} href="/" className="text-lg font-bold px-4 py-2 w-full hover:bg-gray-100 rounded">HOME</a>

                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">PRODUCTS</summary>
                  <div
                    className="mt-2 px-2 pb-2"
                    style={{ maxHeight: '40vh', overflowY: 'auto' }}
                  >
                  <div className="flex flex-col pl-6 space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold flex justify-between items-center">Laptops & Desktops <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Branded Laptops (All Leading Brands)</li>
                        <li>Office & Business Desktops</li>
                        <li>Home Use Laptops & PCs</li>
                        <li>High-Performance Gaming Laptops</li>
                        <li>Thin Clients & Mini PCs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Custom PC Builds <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Custom Gaming PCs (Entry to Extreme)</li>
                        <li>Content Creation & Workstations</li>
                        <li>RGB Cabinets & Liquid Cooling</li>
                        <li>Performance Tuning & Overclocking</li>
                        <li>Tailor-Made PC Build Services</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">CCTV & Surveillance Systems <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>IP & Analog Cameras</li>
                        <li>Bullet, Dome, and PTZ Models</li>
                        <li>NVR/DVR Recorders</li>
                        <li>Night Vision & Motion Detection</li>
                        <li>Video Door Phones & Intercom Systems</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Networking Equipment <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Routers & Wireless Access Points</li>
                        <li>LAN Switches (Managed/Unmanaged)</li>
                        <li>Network Racks & Patch Panels</li>
                        <li>Firewalls & Load Balancers</li>
                        <li>Cabling, Tools, and Testers</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Solar & Power Systems <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Solar Panels (Monocrystalline / Polycrystalline)</li>
                        <li>Inverters (Hybrid, On/Off-Grid)</li>
                        <li>Batteries (Lithium, Lead Acid)</li>
                        <li>Charge Controllers & Optimizers</li>
                        <li>Wiring Kits & Mounting Accessories</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Home & Office Automation <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Smart Switches & Voice-Control Systems</li>
                        <li>Motion & Light Sensors</li>
                        <li>Appliance Automation & Remote Control</li>
                        <li>Smart Plugs & Timers</li>
                        <li>App & Voice Assistant Integration (Alexa, Google)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Security & Access Control <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Biometric & RFID Systems</li>
                        <li>Time Attendance Machines</li>
                        <li>Door Access Terminals</li>
                        <li>Smart Locks</li>
                        <li>Sensors, Buzzers & Sirens</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Automated Gates & Shutters <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Sliding & Swing Gate Motors</li>
                        <li>Rolling Shutters (Motorized & Manual)</li>
                        <li>Boom Barriers for Vehicle Control</li>
                        <li>Remote & App-Based Control Systems</li>
                        <li>Safety Sensors & Backup Power Options</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">PC Components & Peripherals <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>RAM, SSD, HDD, GPUs, CPUs</li>
                        <li>Power Supplies, Cabinets, Motherboards</li>
                        <li>Cooling Fans, Liquid Coolers</li>
                        <li>Monitors, Keyboards, Mice</li>
                        <li>UPS, Speakers, Headphones</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Accessories <span className="text-gray-400">→</span></p>
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
                </details>

                {/* SOLUTIONS - mobile menu */}
                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">SOLUTIONS</summary>
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
                </details>

                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">SERVICES</summary>
                  <div
                    className="mt-2 px-2 pb-2"
                    style={{ maxHeight: '40vh', overflowY: 'auto' }}
                  >
                  <div className="flex flex-col pl-6 space-y-2 text-sm">
                    <div>
                      <p className="font-semibold flex justify-between items-center">
                        Power & Energy Solutions <span className="text-gray-400">→</span>
                      </p>
                      <ul className="list-disc pl-6">
                        <li>Solar System Installation & Maintenance</li>
                        <li>Inverters & Battery Backup Systems</li>
                        <li>Energy Monitoring & Management</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">
                        Networking & Security <span className="text-gray-400">→</span>
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
                        IT & Computing <span className="text-gray-400">→</span>
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
                        Smart Automation <span className="text-gray-400">→</span>
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
                        Surveillance & Safety <span className="text-gray-400">→</span>
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
                        Support & Maintenance <span className="text-gray-400">→</span>
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
                </details>

                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">INDUSTRIES</summary>
                  <div
                    className="mt-2 px-2 pb-2"
                    style={{ maxHeight: '40vh', overflowY: 'auto' }}
                  >
                  <div className="flex flex-col pl-6 space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold flex justify-between items-center">Government <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Smart City Infrastructure</li>
                        <li>Surveillance & Security Projects</li>
                        <li>Solar & Power Solutions for Public Buildings</li>
                        <li>Command & Control Centers</li>
                        <li>IT Infrastructure & e-Governance Systems</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Education <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Smart Classroom Solutions</li>
                        <li>Audio-Visual & Projector Setup</li>
                        <li>School & College Surveillance (CCTV)</li>
                        <li>ID & Attendance Systems</li>
                        <li>Networking & Computer Labs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Retail & Distribution <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>CCTV & POS Integration</li>
                        <li>Security Gates & RFID</li>
                        <li>Automated Entry Shutters</li>
                        <li>Inventory Management Systems</li>
                        <li>Networking & Wi-Fi Setup for Retail Chains</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Hospitality <span className="text-gray-400">→</span></p>
                      <ul className="list-disc pl-6">
                        <li>Guest Room Automation (Lighting, HVAC, Smart TV)</li>
                        <li>Surveillance in Common Areas</li>
                        <li>Access Control for Staff & Guests</li>
                        <li>Solar Energy for Sustainable Operations</li>
                        <li>High-Speed Internet & Network Security</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold flex justify-between items-center">Residential / Apartments <span className="text-gray-400">→</span></p>
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
                </details>
                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">
                    INSTALL & SUPPORT
                  </summary>
                  <div
                      className="mt-2 px-2 pb-2"
                      style={{ maxHeight: '40vh', overflowY: 'auto' }}
                      >

                  <div className="flex flex-col pl-6 space-y-4 text-sm text-gray-700">

                    {/* Accessories */}
                    <div>
                      <p className="font-semibold flex justify-between items-center">
                        Accessories <span className="text-gray-400">→</span>
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
                        Installations <span className="text-gray-400">→</span>
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
                        Maintenance & AMC <span className="text-gray-400">→</span>
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
                </details>


                <a onClick={() => setMenuOpen(false)} href="/contact" className="text-lg font-bold px-4 py-2 w-full hover:bg-gray-100 rounded">CONTACT</a>
              </nav>
            </div>
          </>
        )}
      </>
    </>
  )

}

export default Header