import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) { //La barra de navegacion no va a ejecutar el onSearch, por eso se lo paso al SearchBar
  return (
    <div>
      <img src={Logo} alt='Imagen no encontrada'/>
      <SearchBar onSearch={onSearch}/> 
    </div>
  )
};

export default Nav;
