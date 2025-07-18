

import { GiCctvCamera,GiAutoRepair,GiSolarPower } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";

import SpaceCity1 from "../assets/Solar.jpg";
import SpaceCity2 from "../assets/CCTV.jpg";
import SpaceCity3 from "../assets/comp rep.jpg";
import SpaceCity4 from "../assets/HA.jpg";
import SpaceCity5 from "../assets/N&S.jpg";
import SpaceCity6 from "../assets/Part.jpg";

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
    backgroundImage: SpaceCity2,
  },
  {
    icon: GiAutoRepair,
    title: "LAPTOP & DESKTOP REPIAR",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity3,
  },
  {
    icon: FaHome,
    title: "HOME AUTOMATION",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity4,
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
    backgroundImage: SpaceCity6,
  },
];
