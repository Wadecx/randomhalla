import { useState, useEffect } from 'react'
import './App.css'
import Legends from './Components/legends';
import Navbar from './Components/Navbar';

function App() {

  const [character, setCharacter] = useState();
  

  return (
    <div className="app">
      <Navbar setCharacter={setCharacter} character={character}/>
      <Legends character={character}/>
    </div>
  )
}

export default App
