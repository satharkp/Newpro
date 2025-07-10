

import { GiCctvCamera,GiAutoRepair,GiSolarPower } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";

import SpaceCity1 from "../assets/Solar.jpg";
import SpaceCity5 from "../assets/home.jpg";
import SpaceCity6 from "../assets/Laptop.jpg";
import SpaceCity7 from "../assets/sale.jpg";
import SpaceCity8 from "../assets/CCTV.jpg";
import SpaceCity9 from "../assets/it.jpg";

export const ServiceData = [
  {
    icon: GiSolarPower,
    title: "SOLAR SYSTEM",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity1,
  },
  {
    icon: GiCctvCamera,
    title: "CCTV",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity1,
  },
  {
    icon: GiAutoRepair,
    title: "LAPTOP & COMPUTER REPIAR",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity6,
  },
  {
    icon: FaHome,
    title: "HOME AUTOMATION",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity7,
  },
  {
    icon: GrCloudSoftware,
    title: "NETWORK & SOFTWARE",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity5,
  },
  {
    icon: FaComputer,
    title: "COMPUTER ACCESSORIES",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity8,
  },
];
