import React from "react";

import { useState } from 'react';
const Mdp = () => {
const [nomEntreprise, setNomEntreprise] = useState('');

  const handleNomEntrepriseChange = (e) => {
    setNomEntreprise(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour mettre à jour le profil avec le nouveau nom d'entreprise
    console.log('Nom d\'entreprise soumis :', nomEntreprise);
  };

    return (
        <div>
        <h2>Modifier Profil</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Nom de l'entreprise :
            <input
                type="text"
                value={nomEntreprise}
                onChange={handleNomEntrepriseChange}
            />
            </label>
            <button type="submit">Enregistrer</button>
        </form>
        </div>
    );
}
export default Mdp;