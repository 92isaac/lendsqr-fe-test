import React, { useState } from 'react';
import Navbar from './Navbar';
import '../../styles/ShareLayout.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShareLayout: React.FC<SidebarProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="sharedLayout">
        <div className="sharedLayout__side">
          <Sidebar  setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}/>
        </div>
        <div className="sharedLayout__body">
          <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={false}/>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShareLayout;
