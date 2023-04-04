import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../../styles/ShareLayout.scss'
import { Outlet } from 'react-router-dom';

const ShareLayout: React.FC = () => {
  return (
    <>
      <div className="sharedLayout">
        <div className="sharedLayout__side">
          <Sidebar />
        </div>
        <div className="sharedLayout__body">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShareLayout;
