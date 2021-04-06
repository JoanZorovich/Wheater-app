//import React from 'react';
import React, { useState } from 'react'; //Se agregó el { useState } --por destructuring
import './App.css';
import Nav from './components/Nav.jsx'; //Tenmos que renderizar componentes en el punton de entrada
import Cards from './components/Cards.jsx'; //tenemos que unir todas las partes del nuestra app del clima

//si no se utilizo el destructuring entonces se añade este código
//React.useState


export default function App() {
//function App() {
const [cities, setCities] = useState([]);

function onSearch(ciudad) {//este valor proviene del input que se ingresa en el searchBar
  //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
  //pero de momento agregaremos una ciudad por default para ver que funcione-- ya se hizo el cambio

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'4ae2636d8dfbdc3044bede63951a019b'}&units=metric`)
  //esto es una promesa
  //fetch = get --> se hace un get al API, donde se pasa un parametro q= nombre de la ciudad
  //Tambien se pasa un API id
  // Le paso Units = metric --- para que los datos los devuelva en °
      .then(r => r.json()) //obtengo la respuesta de la promesa a partir del then en r guarda lo que devolvio el request
      //devuelve un JSON y fetch no lo convierte de forma automatica entonces lo parcea a objeto de JS (r.json()) transformar el JSON en un objeto de JS
      .then((recurso) => {//en'recurso' queda la respuesta que me el servidor, pero en formato de JS 
        if(recurso.main !== undefined){ //hay algo en main?--> si no hay nada significa que la ciudad no la encontro, en cambio si encuentra una ciudad entonces es true y ahí obtengo todos los datos de la ciudad
          const ciudad = {//si hay algo en el main, crea el objeto ciudad
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);//tengo un 'arreglo' con ciudades ya consultadas y eso lo concateno ... agragandoles la nueva ciudad consultada
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) { // Esta función recibe el ID de la ciudad
      setCities(oldCities => oldCities.filter(c => c.id !== id));// con el metodo 'filter' filtro mi arreglo y saco (dejo pasar) todas las ciudades que no tengan id y las guardo en C, deja por fuera el id que quiero eliminar
    }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
