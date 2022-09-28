import React from "react";
import Die from "./components/Die";
import {nanoid} from 'nanoid'

export default function App() {
   const [dice, setDice] = React.useState(randomDiceNum())

  function randomDiceNum() {
    //new array to hold my numbers
    const newDice = []  
    for (let i = 0; i < 10; i++) {  //loop 10 times
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
         }) //push a random num from 1-6 to my array
    }
    return newDice //return array
  }
 
  function rollDice() {

    setDice(randomDiceNum)
  }
  
  function holdDice(id) { 
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld } holdDice={() => holdDice(die.id)} />)




  return (
    <main>
      <div className="container">
        {diceElements }
      {/* <Die value={randomDiceNum()}></Die>
      <Die value={5}></Die>
      <Die value={4}></Die>
      <Die value={3}></Die>
      <Die value={2}></Die>
      <Die value={6}></Die>
      <Die value={2}></Die>
      <Die value={4}></Die>
      <Die value={5}></Die>
      <Die value={6}></Die> */}

      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>

</main>
 
     
  )


}
