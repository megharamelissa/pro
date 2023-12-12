// Mprofil.js

import React, { Component } from 'react';
import NavbarVerticalpro from './NavbarVerticalpro';
import './Mprofil.css'

class Mprofil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrepriseName: '',
      categorie: '', // État pour stocker le nom de l'entreprise
    };
  }

  // Fonction de gestionnaire de changement pour mettre à jour l'état du nom de l'entreprise
  handleEntrepriseNameChange = (e) => {
    this.setState({ entrepriseName: e.target.value });
  };

  // Fonction de gestionnaire de soumission du formulaire
  handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez utiliser this.state.entrepriseName pour accéder au nom de l'entreprise saisi
    // Ajoutez le code pour traiter les données du formulaire, par exemple, en les envoyant au serveur
  };

  render() {
    return (
      <div>
        <NavbarVerticalpro />
        <div className="mprofil">

          <form onSubmit={this.handleSubmit}>
            {/* Champ de saisie pour le nom de l'entreprise */}
            <div>
              <label>Nom de l'entreprise:</label>
              <input
                type="text"
                value={this.state.entrepriseName}
                onChange={this.handleEntrepriseNameChange}
              />
            </div>
           
            </form>
            
            

            {/* Ajoutez d'autres champs pour d'autres informations du profil si nécessaire */}

           
         
            
            
        </div>
        <div className="users-count-container3">
        Modifier votre 
            </div>
            <div className="users-count-container4">
        profil 
            </div>
            <div>
            
            </div>
            <div className="select-count">
              <select
                value={this.state.categorie}
                onChange={this.handleCategorieChange}
              >
                <option value="">catégorie</option>
                <option value="categorie1">Catégorie 1</option>
                <option value="categorie2">Catégorie 2</option>
                {/* Ajoutez d'autres options au besoin */}
              </select>
            </div>
            <div className="form-count1">
           
            </div>
      </div>
    );
  }
}

export default Mprofil;
