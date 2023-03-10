import React, { useState } from "react";
import Card from "../Card/Card";
Card

const Form = () => {
  const [music, setMusic] = useState({
    name: "",
    age: "",
    artist: "",
    gender: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (elemt, property) => {
    setMusic({ ...music, [property]: elemt.target.value });
  };


  const handleSubmit = (elemt) => {
    elemt.preventDefault();

    const nameIsValid = music.name.length > 3;
    const artistIsValid = music.artist.length >= 6 ;

    if (!nameIsValid || !artistIsValid) {
      setError(true);

      if (!nameIsValid && !artistIsValid) {
        setErrorMessage("el nombre no puede ser inferior a 3 caracteres y el artista no podra ser inferior a 6 caracteres ");
      } else if (!nameIsValid ) {
        setErrorMessage("no debe contener espacios al inicio");
      } else {
        setErrorMessage("el artista no podra ser inferior a 6 caracteres ")
      } ; 

            
      
      return;
    }
     setIsLogged (true)
    console.log(music);
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          border: "3px solid black",
          width: "450px",
          height: "300px",
          backgroundColor: "gray",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "40px",
        }}
      >
        <label htmlFor=""> Ingresa tu nombre </label>
        <input
          type="text"
          name="name"
          onChange={(elemt) => handleChange(elemt, "name")}
        />

        {error &&
          errorMessage.includes(
            "el nombre no puede ser inferior a 3 caracteres")
           && (            
            <span style={{ color: "black", fontSize: "0.9rem" }}>
              {errorMessage}
            </span>
          )}

        <label htmlFor=""> Ingresa tu edad </label>
        <input
          type="text"
          name="age"
          onChange={(elemt) => handleChange(elemt, "age")}
        />

        <label htmlFor="">¿Qué artista te gusta</label>
        <input
          type="text"
          name="artist"
          onChange={(elemt) => handleChange(elemt, "artist")}
        />
        {error &&
          errorMessage.includes("el artista no podra ser inferior a 6 caracteres") && (
            <span style={{ color: "black", fontSize: "0.9rem" }}>
              {errorMessage}
            </span>
          )}

        <label htmlFor="">Genero</label>
        <select
          style={{ width: "180px", height: "23px" }}
          onChange={(elemt) => handleChange(elemt, "gender")}
        >
          <option value="" default>
            Selecciona el genero
          </option>
          <option value="Salsa">Salsa</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Vallenato">Vallenato</option>
          <option value="Alternatica">Alternativa</option>
        </select>

        <br />
        <button
          type="submit"
          style={{ backgroundColor: "#2BEB26", border: "0.9px solid black" }}
        >
          {" "}
          Consultar{" "}
        </button>
      </form>
      {isLogged && (
        <Card name={music.name} age={music.age} artist={music.artist} gender={music.gender}/>
      )}
    </div>
  );
};

export default Form;
