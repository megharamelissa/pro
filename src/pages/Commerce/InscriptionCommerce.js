import react from "react";
import './InscriptionCommerce.css';

import Nav from '../../components/Nav'

const InscriptionCommerce = (props) => {
console.log(props)  
const handleCreateAccount = () => {
    // Logique pour créer le compte ici
    console.log("Créer le compte");
  };  
return (
    <div>
      <Nav />
      
      <div className="Inscrip">
      
        {/* Ajoutez la balise img pour la photo */}
        <img
          className="photo"
          src="/Images/img2.jpg" // Remplacez par le chemin de votre image
          alt="Photo"
        />
        {/* Ajoutez un élément pour le cercle blanc */}
        <div className="circle"></div>
      </div>
      <div className="users-count-container5">
            Moins de
            </div>
        <div className="users-count-container6">
        Gaspi
        </div>
        <div className="users-count-container7">
        Plus de goût
            </div>
        <div className="users-count-container8">
        Inscrivez votre
            </div>
            <div className="users-count-container9">
            Commerce
            </div>
        <div className="users-count-container10">
            <form className="user-form">
          <label htmlFor="nomEntreprise">Nom Entreprise:</label>
          <input type="text" id="nomEntreprise" name="nomEntreprise" />

          <label htmlFor="emailPro">Adresse email professionnelle:</label>
          <input type="email" id="emailPro" name="emailPro" />

          <label htmlFor="tel">Numéro de téléphone:</label>
          <input type="tel" id="tel" name="tel" />

          <label htmlFor="adresseComplete">Adresse complète:</label>
          <input type="text" id="adresseComplete" name="adresseComplete" />
          
    {/* Champ Select pour la catégorie */}
    <select id="Wilaya" name="Wilaya">
    {/* Utilisez une option désactivée comme "placeholder" à l'intérieur du champ */}
    <option value="" disabled selected hidden>Wilaya</option>
    {/* Options de la catégorie */}
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    {/* ... Ajoutez d'autres options selon vos besoins */}
  </select>

  {/* Champ Select pour la wilaya */}
  <select id="Daira" name="Daira">
    <option value="" disabled selected hidden>Daira</option>
    {/* Options de la wilaya */}
    <option value="wilaya1">Daira 1</option>
    <option value="wilaya2">Daira 2</option>
    {/* ... Ajoutez d'autres options selon vos besoins */}
  </select>

  {/* Champ Select pour la diara */}
  <select id="Commune" name="Commune">
    <option value="" disabled selected hidden>Commune</option>
    {/* Options de la diara */}
    <option value="Commune1">Commune 1</option>
    <option value="Commune">Commune 2</option>
    {/* ... Ajoutez d'autres options selon vos besoins */}
  </select>
  
    </form>
        <select id="Categorie" name="Categorie" className="category-selectt">
  {/* Utilisez une option désactivée comme "placeholder" à l'intérieur du champ */}
  <option value="" disabled selected hidden>Catégorie</option>
  {/* Options de la catégorie */}
  <option value="categorie1">Catégorie 1</option>
  <option value="categorie2">Catégorie 2</option>
  {/* ... Ajoutez d'autres options selon vos besoins */}
   </select>
  <form className="user-form">
          <label htmlFor="nomEntreprise">Nom Entreprise:</label>
          <input type="text" id="nomEntreprise" name="nomEntreprise" />
          </form>
          <button className="create-account-button" onClick={handleCreateAccount}>
            Créer compte
            </button>
        </div>
    </div>
  );

}
export default InscriptionCommerce;