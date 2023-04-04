import React from "react";
import { NavLink } from "react-router-dom"
import Logo from "../../assets/Logo.svg";
import "../../styles/Sidebar.scss";
import { sidebarLinks } from "../../helpers/SidebarLinks";

interface SidebarLink {
  id: number;
  class?: string;
  icon?: string;
  title: string;
  linkto: string;
}

const Sidebar: React.FC = () => {
  return (
    <aside>
      <div className="sidebar__logo">
        <div className="logo">
          <div className="img__container">
            <img src={Logo} alt="logo img" />
          </div>
        </div>
      </div>
      <div className="sidebar__links">
        <ul>
          {sidebarLinks.map((sidebarLink: SidebarLink) => {
            return (
              <li key={sidebarLink.id} className={sidebarLink?.class}>
                <nav>
                  <NavLink to={sidebarLink?.linkto}>
                  {sidebarLink?.icon && (
                    <div className="icons">
                      <img src={sidebarLink?.icon} alt="" />
                    </div>
                  )}
                  </NavLink>
                  <p className="title">{sidebarLink.title}</p>
                </nav>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

