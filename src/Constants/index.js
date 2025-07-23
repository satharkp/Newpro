import { GiCctvCamera ,GiSolarPower  } from "react-icons/gi";
import { MdSettingsRemote, MdOutlineRouter , MdBusinessCenter } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { ImDisplay } from "react-icons/im";
import { LuPrinter } from "react-icons/lu";
import { IoHardwareChipOutline } from "react-icons/io5";

import SpaceCity1 from "../assets/solar.png";
import SpaceCity2 from "../assets/cct.jpg";
import SpaceCity3 from "../assets/homie.png";
import SpaceCity4 from "../assets/autoG.png";
import SpaceCity5 from "../assets/inter.jpg";
import SpaceCity6 from "../assets/pcj.png";
import SpaceCity7 from "../assets/pri.jpg";
import SpaceCity8 from "../assets/netw.jpg";
import SpaceCity9 from "../assets/pcA.jpg";
import SpaceCity10 from "../assets/erp.jpg";

export const ServiceData = [
  {
    icon: GiSolarPower,
    title: "Solar & Power Systems",
    content: [
      "Panels, Inverters, Batteries & Wiring Kits",
      "Installation & Smart Power Management"
    ],
    backgroundImage: SpaceCity1,
  },
  {
    icon: GiCctvCamera,
    title: "CCTV & Security Systems",
    content: [
      " Bullet/Dome Cameras, NVR/DVR, Video Door Phones",
      " Biometric Access, RFID, Smart Locks & Sensors"
    ],
    backgroundImage: SpaceCity2,
  },

  {
    icon: FaHome,
    title: "Home & Office Automation",
    content: [
      "Smart Switches, Sensors, Voice Control",
       "App & Assistant Integration (Alexa, Google)"
    ],
    backgroundImage: SpaceCity3,
  },

  {
    icon: MdSettingsRemote,
    title: "Automated Gates & Shutters",
    content: [
      "Motors, Boom Barriers, Remote/App Control",
      "Commercial & Residential Installations"
    ],
    backgroundImage: SpaceCity4,
  },
  {
    icon: ImDisplay ,
    title: "Interactive Panels & Displays",
    content: [
      "Smart Interactive & Collaboration Panels",
      "Digital Signage Solutions & Installation Accessories"
    ],
    backgroundImage: SpaceCity5,
  },
  {
    icon: FaComputer,
    title: "Laptops, Desktops & Custom PCs",
    content: [
      "Business PCs, Gaming Rigs, Home Systems",
      "Custom Builds with RGB, Liquid Cooling & Tuning"
    ],
    backgroundImage: SpaceCity6,
  },
  {
    icon: LuPrinter ,
    title: "Printers & Scanners",
    content: [
      "Laser, Inkjet, All-in-One, Barcode Printers",
       "Thermal Printers, Toners & Software"
    ],
    backgroundImage: SpaceCity7,
  },
  {
    icon: MdOutlineRouter,
    title: "Networking Equipment",
    content: [
      " Routers, Switches, Racks, Firewalls & LAN Setup",
      " Structured Cabling & Enterprise Networking"
    ],
    backgroundImage: SpaceCity8,
  },
  {
    icon: IoHardwareChipOutline,
    title: "PC Components & Accessories",
    content: [
      "RAM, SSDs, GPUs, Cabinets, Peripherals",
      "Cables, Adapters, UPS, Speakers & Tools"
    ],
    backgroundImage: SpaceCity9,
  },
  {
    icon: MdBusinessCenter ,
    title: "ERP & Business Software",
    content: [
      "Billing, POS, CRM, HRM, Educational ERP",
      "Deployment, Training & Ongoing Support"
    ],
    backgroundImage: SpaceCity10,
  },
];
