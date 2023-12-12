import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarVertical.css';

const NavbarVerticalpro = () => {
  const menuItems = [
    { label: ' Modifier Profil', link: '/modifier-profil' },
    { label: 'Modifier Email', link: '/modifier-email' },
    { label: 'Modifer mot de passe', link: '/modifier-email' },
    { label: 'Ajouter ou Modifier panier', link: '/modifier-panier' }, // Ajoutez ces lignes
    { label: 'Supprimer Panier', link: '/supp-panier' },                // Ajoutez ces lignes
    { label: 'Déconnexion', link: '/logout' },  
  ];

  return (
    <div className="navbar-vertical">
      
      {menuItems.map((item, index) => (
        <Link key={index} to={item.link} className="navbar-link-vertical">
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarVerticalpro;
