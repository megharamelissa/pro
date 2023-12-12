// Users.js
import React, { useState } from 'react';
import './GestionCategories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import NavbarVertical from '../../components/NavbarVertical'

const GestionCategories = () => {
  const initialUsers = [
    { id: 1, name: 'Cat01'},
    { id: 2, name: 'Cat02'},
    { id: 3, name: 'Cat03'},
    { id: 4, name: 'Cat04'},
    { id: 5, name: 'Cat05'},
    { id: 6, name: 'Cat06'},
    { id: 7, name: 'Cat07'},
    { id: 8, name: 'Cat08'},
    { id: 9, name: 'Cat09'},
    { id: 10, name: 'Cat10'},
    { id: 11, name: 'Cat11'},
    { id: 12, name: 'Cat12'},
    { id: 13, name: 'Cat13'},
    { id: 14, name: 'Cat14'},
    { id: 15, name: 'Cat15'},
    { id: 16, name: 'Cat15'},
 

    // ... (autres utilisateurs)
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [users, setUsers] = useState(initialUsers);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedUsers = users.map(user => ({ ...user, selected: !selectAll }));
    setUsers(updatedUsers);
  };
  const [categoryName, setCategoryName] = useState('');
  const handleUserSelect = (id) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, selected: !user.selected } : user
    );
    setUsers(updatedUsers);
    setSelectAll(updatedUsers.every(user => user.selected));
  };
  const handleBlock = () => {
    // Logique pour bloquer les utilisateurs sélectionnés
    console.log('Bloquer les utilisateurs sélectionnés');
  };
 
  const handleUnblock = () => {
    // Logique pour débloquer les utilisateurs sélectionnés
    console.log('Débloquer les utilisateurs sélectionnés');
  };
  const handleDeleteUser = (userId) => {
    // Logique pour supprimer l'utilisateur avec l'ID userId
    // Par exemple, vous pouvez utiliser la méthode filter pour créer une nouvelle liste sans l'utilisateur supprimé
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };
  const handleDeleteSelected = () => {
    // Logique pour supprimer tous les utilisateurs sélectionnés
    const updatedUsers = users.filter(user => !user.selected);
    setUsers(updatedUsers);
    setSelectAll(false);
  };
  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };
  const addCategoryToList = () => {
    if (categoryName.trim() !== "") {
      // Vérifiez si le champ de nom de catégorie n'est pas vide
      const newCategory = {
        id: users.length + 1, // ou utilisez un autre moyen pour générer un ID unique
        name: categoryName.trim(),
      };
  
      // Mettez à jour la liste des catégories
      setUsers([...users, newCategory]);
  
      // Effacez le champ de saisie du nom de la catégorie après l'ajout
      setCategoryName("");
    }
  };
  const handleAddCategory = () => {
    addCategoryToList();
    // Autres logiques si nécessaire
  }
  return (
    <div>
      <NavbarVertical/>
      <div className="users-page1">
        
        <div className="table-container">
          <div className="table">
            <div className="table-header">
            
              <label>
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} /> Nom de catégories
              </label>
              {/* Ajoutez l'icône pour supprimer ici */}
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDeleteSelected()} />
            </div>
            <div className="table-body">
              {users.map((user) => (
                <div
                  className={`table-row ${user.selected ? 'transparent' : ''}`}
                  key={user.id}
                >
                  <div className="checkbox-column">
                    <label>
                      <input
                        type="checkbox"
                        checked={user.selected || false}
                        onChange={() => handleUserSelect(user.id)}
                      />
                    </label>
                  </div>
                  <div className="name-column">
                    {user.name}
                    {/* Supprimez l'icône de la poubelle ici */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="category-input-container">
        <label>
          Nom de la catégorie :{' '}
          <input
            type="text"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </label>
        <button className="add-button" onClick={handleAddCategory}>
        Ajouter
      </button>
      </div>
      
      <div className="users-count-container1">20 Catégories</div>
      <div className="users-count-container2">Ajouter une catégorie</div>
      
    </div>
    
  );
};

export default GestionCategories;
