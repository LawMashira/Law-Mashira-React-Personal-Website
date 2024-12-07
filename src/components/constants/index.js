import {
  FaBriefcase,
  FaCogs,
  FaFolderOpen,
  FaEnvelope,
  FaHome
} from "react-icons/fa";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "Features",
    link: "features",
    icon: <FaCogs />,
  },
  {
    id: 3,
    title: "Professional Journey",
    link: "resume",
    icon: <FaBriefcase />,
  },
  {
    id: 4,
    title: "Get My CV",
    link: "/cv-path/fullstack.pdf",
  },
  {
    id: 5,
    title: "Portfolio",
    link: "projects",
    icon: <FaFolderOpen />,
  },

  {
    id: 6,
    title: "Contact Me",
    link: "contact",
    icon: <FaEnvelope />,
  },
];
