import React from "react";

const Card= ({name,age,artist,gender}) =>{

  return (
  <div style={{}} >
    <h2> Hola {name} </h2> 
    <h2> Tu edad es: {age} </h2>
    <h2> Tu artista favorita es: {artist} </h2>
    <h2> El genero que te gusta es: {gender}</h2>
    </div>
  

  );
};

export default Card;
