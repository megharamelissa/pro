import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Mprofil from './components/Mprofil';

import Dashboard from './components/Dashboard';


import Profile from './components/Profile';
import Logout from './components/Logout';

import { Component } from 'react';


import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import InscripCom from './components/InscripCom';




import GestionUser from './pages/Admin/GestionUser';
import GestionCategories from './pages/Admin/GestionCategories';
import GestionCommerce from './pages/Admin/GestionCommerce';
import InscriptionCommerce from './pages/Commerce/InscriptionCommerce';

class App extends Component {
  render(){
    return(
      <div className="App">
        
        <Router>
          
          
          
          <Routes>
              
              <Route path="/" element={<Dashboard/>} />
              <Route path="/gestion-user" element={<GestionUser />} />
              <Route path="/gestion-commerce" element={<GestionCommerce />} />
              <Route path="/gestion-categories" element={<GestionCategories/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/modifier-profil" element={<Mprofil/>} />
              <Route path="/inscription-commerce" element={<InscriptionCommerce/>} />

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
