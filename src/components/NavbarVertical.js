// NavbarVertical.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarVertical.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { faTachometerAlt, faStore, faUsers, faLayerGroup, faUser, faSignOutAlt,faChartLine,faCartShopping,faShapes } from '@fortawesome/free-solid-svg-icons';
// ...

const NavbarVertical = () => {
  const menuItems = [
    { label: 'Dashboard', link: '/' , icon: faChartLine },
    { label: 'Gestion Commerce', link: '/gestion-commerce', icon: faCartShopping },
    { label: 'Gestion Utilisateur', link: '/gestion-user', icon: faUsers },
    { label: 'Gestion Catégories', link: '/gestion-categories' , icon: faShapes}, // Ajoutez ces lignes
    { label: 'Profil', link: '/profile', icon: faUser },                // Ajoutez ces lignes
    { label: 'Déconnexion', link: '/logout', icon: faSignOutAlt },  
  ];

  return (
    
    <div className='nav'>
      <div class="search-container">
            <div className="search-bar">
              {/* Utilisez FontAwesomeIcon avec l'icône faSearch */}
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="Rechercher..." />
            </div>
          </div>
          <div className="notification-icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="user-profile">
              {/* Ajoutez la photo de l'utilisateur */}
              <img src="/Images/img1.jpg" alt="User Avatar" className="user-avatar" />
              {/* Ajoutez le nom d'utilisateur */}
              <p className="user-name">Melissa Meghara</p>
            </div>
    <div className="navbar-vertical">
    <div className="navbar-brand">
        <Link to="/" className="navbar-logo">GaspiLess</Link>
      </div>
      
      {menuItems.map((item, index) => (
        <Link key={index} to={item.link} className="navbar-link-vertical">
          <FontAwesomeIcon icon={item.icon} className="menu-icon" />
          {item.label}
        </Link>
      ))}
      
    </div>
    
    </div>
  );
};

export default NavbarVertical;
