import './App.css';
import React, { useState } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

function App() {

  // get random drug
  const drugList =["Zovirax", "Fosamax", "Rasilez", "Xanax", "Moduret", "Pentasa", "Cordarone", "Caduet", "Clavulin", "Lioresal", "Cogentin", "Casodex", "Lumigan", "Dulcolax", "Alphagan", "Suboxone", "Tegretol", "Coreg", "Cefzil", "Alvesco", "Dalacin", "Orbenin", "Serophene", "Canesten", "Neoral", "Pradaxa", "Aerius", "Pristiq", "Tiazac", "Lomotil", "Cardura", "Avodart", "Vasotec", "Eryc", "Plendil", "Lipidil", "Duragesic", "Proscar", "Diflucan", "Prozac", "Reminyl", "Kytril", "Gleevec", "Indocid", "Atrovent", "Accutane", "Nizoral", "Toradol", "Acilac", "Heptovir", "Lamictal", "Femara", "Sinemet", "Zestril", "Carbolith", "Vyvanse", "Provera", "Mobicox", "Flagyl", "Vigamox", "Bactroban", "Nitrostat", "Noroxin", "Olmetec", "Tamiflu", "Ditropan", "Invega", "Elidel", "Mirapex", "Lyrica", "Stemetil", "Prometrium", "Inderal", "Accupril", "Xarelto", "Zoloft", "Januvia", "Sotacor", "Imitrex", "Prograf", "Nolvadex", "Hytrin", "Terazol", "Androderm", "tetracycline", "Innohep", "Detrol", "Topamax", "Zytram", "Depakene", "Levitra", "Champix", "Accolate", "Relenza", "Celebrex", "Remeron", "Keppra", "Cosentyx", "Valtrex", "Creon"]
  const randomDrug = drugList[Math.floor(Math.random() * drugList.length)];

  // getting a random number for pokemon api 
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const randomPokemonNumber = getRandomInt(151,900)


  // state
  const [pokemon, setPokemon] = useState([])
  const [randomNumber] = useState(randomPokemonNumber)
  const [drug] = useState(randomDrug)

  // api calls 
  axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then (res =>{
    setPokemon(res.data.name)
  })


  // axios.get(`https://health-products.canada.ca/api/drug/drugproduct/?id=${drugNumber}`).then (res =>{
  //   if (res.data.brand_name !== null) {
  //     setDrug(res.data.brand_name)

  //   }
  // })
    



  return (
    <div className="App">
      <PokemonList pokemon = {pokemon}/>
      {drug}

     <button> get random</button>
    </div>
  );
}

export default App;
