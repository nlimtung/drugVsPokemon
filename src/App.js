import './App.css';
import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import PokemonButton from './components/PokemonButton';
import DrugButton from './components/DrugButton';
import StartButton from './components/StartButton';
import RandomWord from './components/RandomWord';
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

// choose random word
  useEffect(() => {    
    setTimeout(() =>{
      const random = drugAndPokemon[Math.floor(Math.random() * drugAndPokemon.length)];
        setRandomWord(random)
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

// handle drug button
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


      {displayStart === true ? 
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
