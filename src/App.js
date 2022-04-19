import './App.css';
import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import PokemonButton from './components/PokemonButton';
import DrugButton from './components/DrugButton';
import StartButton from './components/StartButton';
import RandomWord from './components/RandomWork';
import Scores from './components/Scores';
import axios from 'axios';


function App() {

  // state
  const [drugAndPokemon, setDrugAndPokemon] = useState([])
  const [randomWord, setRandomWord] = useState("")
  const [round, setRound] = useState(0)
  const [displayStart, setDisplayStart] = useState(true)
  const [score, setScore] = useState(0)
  const [wrongAnswerPokemonButton, setWrongAnswerPokemonButton] = useState (null)
  const [wrongAnswerDrugButton, setWrongAnswerDrugButton] = useState (null)


  // get random drug
  const drugList =["Zovirax", "Fosamax", "Rasilez", "Xanax", "Moduret", "Pentasa", "Cordarone", "Caduet", "Clavulin", "Lioresal", "Cogentin", "Casodex", "Lumigan", "Dulcolax", "Alphagan", "Suboxone", "Tegretol", "Coreg", "Cefzil", "Alvesco", "Dalacin", "Orbenin", "Serophene", "Canesten", "Neoral", "Pradaxa", "Aerius", "Pristiq", "Tiazac", "Lomotil", "Cardura", "Avodart", "Vasotec", "Eryc", "Plendil", "Lipidil", "Duragesic", "Proscar", "Diflucan", "Prozac", "Reminyl", "Kytril", "Gleevec", "Indocid", "Atrovent", "Accutane", "Nizoral", "Toradol", "Acilac", "Heptovir", "Lamictal", "Femara", "Sinemet", "Zestril", "Carbolith", "Vyvanse", "Provera", "Mobicox", "Flagyl", "Vigamox", "Bactroban", "Nitrostat", "Noroxin", "Olmetec", "Tamiflu", "Ditropan", "Invega", "Elidel", "Mirapex", "Lyrica", "Stemetil", "Prometrium", "Inderal", "Accupril", "Xarelto", "Zoloft", "Januvia", "Sotacor", "Imitrex", "Prograf", "Nolvadex", "Hytrin", "Terazol", "Androderm", "tetracycline", "Innohep", "Detrol", "Topamax", "Zytram", "Depakene", "Levitra", "Champix", "Accolate", "Relenza", "Celebrex", "Remeron", "Keppra", "Cosentyx", "Valtrex", "Creon", "Emflaza", "Zofran", "Activelle", "Alesse", "Skyrizi", "Elavil", "Constella", "Fuzeon"]
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

    setTimeout(() =>{
      chooseRandom ()
      setWrongAnswerDrugButton(null)
      setWrongAnswerPokemonButton(null)
    }, 400
    )


  }, [drugAndPokemon])
  

  // handle start
  const handleButton = (e) => {
    e.preventDefault()
    getRandomPokemonAndDrug();
    setDisplayStart(false)
  }

  // handle pokemon button
  const handlePokemonButton  =  (e) =>{
    e.preventDefault()
      if ((drugAndPokemon[0]) ===  randomWord){
        setScore(score + 1)
        getRandomPokemonAndDrug()
        setRound(round+1)
        setWrongAnswerPokemonButton(false)

      }
      else {
        console.log("boo")
        getRandomPokemonAndDrug()
        setRound(round+1)
        setWrongAnswerPokemonButton(true)

      }
  }

// handle durg button
  const handleDrugButton  =  (e) =>{
    e.preventDefault()
    if ((drugAndPokemon[1]) ===  randomWord){
      getRandomPokemonAndDrug()
      setRound(round+1)
      setScore(score + 1)
      setWrongAnswerDrugButton(false)


      }
    else {
      console.log("boo")
      getRandomPokemonAndDrug()
      setRound(round+1)
      setWrongAnswerDrugButton(true)

    }
  }


  return (
    <div className="App">
      <Title/> 


      {displayStart == true ? 
        <StartButton handleButton = {handleButton}/>:

        <div>
          <RandomWord randomWord = {randomWord}/>
          <div className='choice-buttons'>
            <PokemonButton handlePokemonButton = {handlePokemonButton} wrongAnswerPokemonButton = {wrongAnswerPokemonButton}/>
            <DrugButton handleDrugButton = {handleDrugButton}wrongAnswerDrugButton = {wrongAnswerDrugButton}/>
          </div>
        </div>
      }
      <Scores
        round = {round}
        score = {score}
      />

    </div>
  );


}

export default App;
