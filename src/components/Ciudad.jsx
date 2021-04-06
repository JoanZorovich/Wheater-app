import React from 'react'
import './Ciudad.css';

export default function Ciudad(props) { //evaluo si recibe propiedades ---> recibe temperatura, etc
    return ( // Que elemntos HTML devuelve este componente?
        <div>
            <h2>{props.name}</h2>
        </div>
    );
}


//... export default About