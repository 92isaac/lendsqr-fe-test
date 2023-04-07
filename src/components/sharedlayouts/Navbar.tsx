import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import "../../styles/Navbar.css";
import profileImg from "../../assets/image 4.png";
import { FaBars } from "react-icons/fa";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<SidebarProps> = ({ setIsSidebarOpen }) => {
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  return (
    <header>
      <div className="navbar">
        <div className="navbar__searchbar">
          <form className="searchbar">
            <div className="form-details">
              <input type="text" placeholder="Search for anything" />
              <button title="Search">
                <AiOutlineSearch />
              </button>
            </div>
          </form>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <p className="docs">Docs</p>
            </li>
            <li>
              <p className="bell">
                <IoIosNotificationsOutline />
              </p>
            </li>
            <li>
              <img
                className="img__container"
                src={profileImg}
                alt="profile img"
              />
              <p className="username">Adedeji</p>
              <button
                title="menu"
                className=" nav-toggle"
                onClick={openSideBar}
              >
                <FaBars />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
