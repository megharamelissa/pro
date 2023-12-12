// Inscription.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const Inscription = () => {
  const [utilisateur, setUtilisateur] = useState({
    nom: '',
    email: '',
    motDePasse: '',
  });

  const [validation, setValidation] = useState({
    nom: true,
    email: true,
    motDePasse: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUtilisateur({ ...utilisateur, [name]: value });
    // Appel des fonctions de validation
    if (name === 'nom') validateNom(value);
    else if (name === 'email') validateEmail(value);
    else if (name === 'motDePasse') validateMotDePasse(value);
  };

  const validateNom = (value) => {
    setValidation({ ...validation, nom: value.trim() !== '' });
  };

  const validateEmail = (value) => {
    // Ajoutez une logique de validation de l'e-mail si nécessaire
  };

  const validateMotDePasse = (value) => {
    // Ajoutez une logique de validation du mot de passe si nécessaire
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appel des fonctions de validation pour tous les champs
    validateNom(utilisateur.nom);
    validateEmail(utilisateur.email);
    validateMotDePasse(utilisateur.motDePasse);

    // Vérifiez si toutes les validations sont passées avant de soumettre
    if (validation.nom && validation.email && validation.motDePasse) {
      // La validation côté client est réussie, vous pouvez effectuer des actions ici
      console.log("Formulaire soumis avec succès !", utilisateur);
    } else {
      // Gestion des erreurs de formulaire
      console.log("Le formulaire contient des erreurs.");
    }
  };

  return (
    <Container>
      {/* Barre de Navigation (Navbar) */}
      <nav>
        {/* Utilisez les composants Bootstrap pour la barre de navigation */}
      </nav>

      {/* Contenu de la page */}
      <div>
        <h2>Inscription</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNom">
            <Form.Label>Nom :</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre nom" name="nom" value={utilisateur.nom} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>E-mail :</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre e-mail" name="email" value={utilisateur.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formMotDePasse">
            <Form.Label>Mot de passe :</Form.Label>
            <Form.Control type="password" placeholder="Entrez votre mot de passe" name="motDePasse" value={utilisateur.motDePasse} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            S'inscrire
          </Button>
        </Form>
      </div>

      {/* Pied de Page (Footer) */}
      <footer>
        <p>© 2023 Mon Application</p>
      </footer>
    </Container>
  );
};

export default Inscription;
