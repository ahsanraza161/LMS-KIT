import React, { useState } from 'react';
import '../../mainadmin.css';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/students',
      name: 'Students',
      icon: <FaUserAlt />,
    },
    {
      path: '/teachers',
      name: 'Teachers',
      icon: <FaRegChartBar />,
    },
    {
      path: '/adduser',
      name: 'Register',
      icon: <FaCommentAlt />,
    },
  ];
  return (
    <div className="container2">
      <div style={{ width: isOpen ? '380px' : '90px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            KIT
          </h1>
          <div style={{ marginLeft: isOpen ? '60%' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
