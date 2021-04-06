import React, { useState } from "react";

export default function SearchBar({onSearch}) {//1. llega la función onSearch
  const [city, setCity] = useState("");//4. city es un estado que tiene el SearchBar const [city(estado), setCity (función)]
                                       //inicialmente city es un string vacío
  return (
    <form onSubmit={(e) => {
      e.preventDefault();//previene el refresh, porque al hacer submit se refresca la pagina y se perderian los datos
      onSearch(city);// 3. Ejecutar la función onSearch pasandole el valor de city
      setCity(''); //dejar el onSearch vacio despues de hacer la busqueda
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)} //a medida que haga click se dispara onChange(detecta cada vez que se haga yn cambio eb el input)
         // Cada vez que haya un cambio en el input ejecuta la funcion e, que setea el valor de la ciudad dandole el valor que tiene actualmente el input                                    
        //Cada vez se que ingrese un valor, se actualiza el estado metiendo en city el valor que se tiene actualmenteen el input
         // 2. en el input, linea 18 al momento de hacer submit, ejecuta onSeach
      />
      <input type="submit" value="Agregar" />. 
    </form>
  );
}
