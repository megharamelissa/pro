// Users.js
import React, { useState } from 'react';
import './Users.css';
import NavbarVertical from './NavbarVertical'

const Users = () => {
  const initialUsers = [
    { id: 1, name: 'Meghara melissa', status: 'Actif', savedBaskets: 50 },
    { id: 2, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 3, name: 'Meghara melissa', status: 'Actif', savedBaskets: 50 },
    { id: 4, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 5, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 6, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 7, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 8, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 9, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 10, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 11, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 12, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 13, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 14, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 15, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 16, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 17, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 18, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 19, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 20, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },
    { id: 21, name: 'Meghara melissa', status: 'bloqué', savedBaskets: 50 },

    // ... (autres utilisateurs)
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [users, setUsers] = useState(initialUsers);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedUsers = users.map(user => ({ ...user, selected: !selectAll }));
    setUsers(updatedUsers);
  };

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
  return (
    
       
        <div>
          <NavbarVertical/>
        <div className="button-container">
        <button className="block-button" onClick={handleBlock}>
            Bloquer
        </button>
        <span className="button-separator"></span>
        <button className="unblock-button" onClick={handleUnblock}>
            Débloquer
        </button>
        </div>
        
            <div className="users-page">
            
            <div className="table-container">
                <table>
                <thead>
                    <tr>
                    <th>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                        Nom d'utilisateur
                        </label>
                    </th>
                    <th>Statut du compte</th>
                    <th>Nombre de paniers sauvés</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id}>
                        <td>
                        <label>
                            <input
                            type="checkbox"
                            checked={user.selected || false}
                            onChange={() => handleUserSelect(user.id)}
                            />
                            {user.name}
                        </label>
                        </td>
                        <td className="status-column">
                        <span className={`status-circle ${user.status.toLowerCase()}`} />
                        {user.status}
                        </td>
                        <td>{user.savedBaskets}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
            <div className="users-count-container">
                24556 Utilisateurs
            </div>
        </div>
       
  );
};

export default Users;
