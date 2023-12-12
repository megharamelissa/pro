import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Navebare from './components/Navbar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Categories from './components/Categories';
import Commerces from './components/Commerces';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Message from './components/Message';
import Inscription from './components/Inscription';
import { Component } from 'react';
import NavbarVertical from './components/NavbarVertical'; 
import NavbarHorizontal from './components/NavbarHorizontal'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
class App extends Component {
  render(){
    return(
      <div className="App">
        
        <Router>
          
          <NavbarVertical/>
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
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/users" element={<Users />} />
              <Route path="/gestion-commerce" element={<Commerces />} />
              <Route path="/categories" element={<Categories/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/logout" element={<Logout />} />
          </Routes>
          </Router>
        {
          
        /*<Message/>*/
        
        /*<Greet name="Bruce" heroName="Batman" >
          <p>this is childeren props </p>
        </Greet>
        <Greet name="Clark" heroName="Superman" >
          <button>Click </button>
        </Greet>
        <Greet name="Diana" heroName="Wonder woman" />
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder woman"/>        
        {/*<Hello/>*/} 
      </div>
    )
  }
}

export default App;
