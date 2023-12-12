// NavbarVertical.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarVertical.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NavbarVertical = () => {
  const menuItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Gestion Commerce', link: '/gestion-commerce' },
    { label: 'Gestion Utilisateur', link: '/users' },
    { label: 'Gestion Catégories', link: '/categories' }, // Ajoutez ces lignes
    { label: 'Profil', link: '/profile' },                // Ajoutez ces lignes
    { label: 'Déconnexion', link: '/logout' },  
  ];

  return (
    
    <div className='nav'>
      
    <div className="navbar-vertical">
      
      <div className="navbar-brand">
        
      </div>
      
      
    </div>
    </div>
  );
};

export default NavbarVertical;
