

import { GiCctvCamera,GiAutoRepair,GiSolarPower } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";

import SpaceCity1 from "../assets/Solar.jpg";
import SpaceCity2 from "../assets/cc.jpg";
import SpaceCity3 from "../assets/pcb.jpeg";
import SpaceCity4 from "../assets/hom.jpg";
import SpaceCity5 from "../assets/netw.jpg";
import SpaceCity6 from "../assets/maint.jpg";

export const ServiceData = [
  {
    icon: GiSolarPower,
    title: "Power & Energy Solutions",
    content: "Design and installation of solar systems, inverters, and energy monitoring to keep your power reliable and efficient.",
    backgroundImage: SpaceCity1,
  },
  {
    icon: GiCctvCamera,
    title: "Surveillance & Safety",
    content: "Full CCTV integration, 24/7 monitoring, motion sensors, smart alarms, and remote security access.",
    backgroundImage: SpaceCity2,
  },
  {
    icon: GiAutoRepair,
    title: "IT & Computing",
    content: "Sales, service, and custom builds for laptops, desktops, and accessories, plus expert annual maintenance.",
    backgroundImage: SpaceCity3,
  },
  {
    icon: FaHome,
    title: "Smart Automation",
    content: "Automate homes and offices with smart lighting, appliances, gates, and systems for modern, connected living.",
    backgroundImage: SpaceCity4,
  },
  {
    icon: GrCloudSoftware,
    title: "Networking & Security",
    content: "Complete setup of network infrastructure, Wi-Fi, firewalls, CCTV, access control, and biometric systems for secure, connected spaces.",
    backgroundImage: SpaceCity5,
  },
  {
    icon: FaComputer,
    title: "Support & Maintenance",
    content: "On-site and remote diagnostics, repairs, warranty help, and AMCs to keep all systems running smoothly",
    backgroundImage: SpaceCity6,
  },
];
