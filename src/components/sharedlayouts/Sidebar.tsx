import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "../../styles/Sidebar.scss";
import { FaTimes } from "react-icons/fa";
import { sidebarLinks } from "../../helpers/SidebarLinks";

interface SidebarLink {
  id: number;
  class?: string;
  icon?: string;
  title: string;
  linkto: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  return (
    <aside  >
      <div className="sidebar__logo">
        <div className="logo">
          <div className="img__container">
            <img src={Logo} alt="logo img" />
          </div>
        </div>
      </div>
      <button className="close-btn" title="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
      <div  className={`${isSidebarOpen ? "sidebar sidebar__links show-sidebar" : "sidebar sidebar__links"}`}>
        <ul>
          {sidebarLinks.map((sidebarLink: SidebarLink) => {
            return (
              <li key={sidebarLink.id} className={sidebarLink.class}>
                {sidebarLink.icon ? (
                  <NavLink to={sidebarLink.linkto} className="nav__items">
                    {sidebarLink.icon && (
                      <div className="icons">
                        <img src={sidebarLink.icon} alt="" />
                      </div>
                    )}
                    <p className="title">{sidebarLink.title}</p>
                  </NavLink>
                ) : (
                  <p className="title">{sidebarLink.title}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
