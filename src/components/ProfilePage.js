// ProfilePage.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarVerticalpro from './NavbarVerticalpro';
import Mprofil from './Mprofil';
import Mdp from './Mdp';
import Email from './Email';
import Panier from './Panier';
import SupPanier from './SupPanier'
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <NavbarVerticalpro />
      <Routes>
        <Route path="/profil/modifier-profil" element={<Mprofil />} />
        <Route path="/profil/modifier-mdp" element={<Mdp />} />
        <Route path="/profil/modifier-email" element={<Email />} />
        <Route path="/profil/modifier-panier" element={<Panier />} />
        <Route path="/profil/supp-panier" element={<SupPanier />} />
        {/* Ajoutez d'autres routes pour d'autres fonctionnalités du profil */}
      </Routes>
    </div>
  );
};

export default ProfilePage;
