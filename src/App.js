import './App.css';
import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

function App() {

  // state
  const [drugAndPokemon, setDrugAndPokemon] = useState([])
  const [randomWord, setRandomWord] = useState("")

  // get random drug
  const drugList =["Zovirax", "Fosamax", "Rasilez", "Xanax", "Moduret", "Pentasa", "Cordarone", "Caduet", "Clavulin", "Lioresal", "Cogentin", "Casodex", "Lumigan", "Dulcolax", "Alphagan", "Suboxone", "Tegretol", "Coreg", "Cefzil", "Alvesco", "Dalacin", "Orbenin", "Serophene", "Canesten", "Neoral", "Pradaxa", "Aerius", "Pristiq", "Tiazac", "Lomotil", "Cardura", "Avodart", "Vasotec", "Eryc", "Plendil", "Lipidil", "Duragesic", "Proscar", "Diflucan", "Prozac", "Reminyl", "Kytril", "Gleevec", "Indocid", "Atrovent", "Accutane", "Nizoral", "Toradol", "Acilac", "Heptovir", "Lamictal", "Femara", "Sinemet", "Zestril", "Carbolith", "Vyvanse", "Provera", "Mobicox", "Flagyl", "Vigamox", "Bactroban", "Nitrostat", "Noroxin", "Olmetec", "Tamiflu", "Ditropan", "Invega", "Elidel", "Mirapex", "Lyrica", "Stemetil", "Prometrium", "Inderal", "Accupril", "Xarelto", "Zoloft", "Januvia", "Sotacor", "Imitrex", "Prograf", "Nolvadex", "Hytrin", "Terazol", "Androderm", "tetracycline", "Innohep", "Detrol", "Topamax", "Zytram", "Depakene", "Levitra", "Champix", "Accolate", "Relenza", "Celebrex", "Remeron", "Keppra", "Cosentyx", "Valtrex", "Creon", "Emflaza"]
  const randomDrug = drugList[Math.floor(Math.random() * drugList.length)];

  // getting a random pokemon
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const randomPokemonNumber = getRandomInt(151,900)

  // set random pokemon and drug
  function getRandomPokemonAndDrug() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`).then (res =>{
      const pokemon =  res.data.name
      const capitalizePokemon = pokemon[0].toUpperCase() + pokemon.slice(1)
      setDrugAndPokemon([capitalizePokemon, randomDrug])

    })
  }
// choose drug or pokemon
  function chooseRandom () {
    const random = drugAndPokemon[Math.floor(Math.random() * drugAndPokemon.length)];
    setRandomWord(random)
  }

  useEffect(() => {    
    chooseRandom ()
  })
  

  // handle start
  const handleButton = (e) => {
    e.preventDefault()
      getRandomPokemonAndDrug()
  }

  // handle pokemon button
  const handlePokemonButton  =  (e) =>{
    e.preventDefault()
      if ((drugAndPokemon[0]) ==  randomWord){

        console.log("hurray")
        getRandomPokemonAndDrug()
      }
      else {
        console.log("boo")
      }
  }

// handle durg button
  const handleDrugButton  =  (e) =>{
    e.preventDefault()
      if ((drugAndPokemon[1]) ==  randomWord){

        console.log("hurray")
        getRandomPokemonAndDrug()
        }
      else {
        console.log("boo")
      }
      }


  return (
    <div className="App">

      {randomWord}

     <button onClick={handleButton}> start</button>
     <button onClick={handlePokemonButton}>pokemon </button>
     <button onClick={handleDrugButton}>Drug </button>

    </div>
  );
}

export default App;
