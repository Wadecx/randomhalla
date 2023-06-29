import { useState, useEffect } from 'react'
import './App.css'
import Legends from './Components/Legends';
import Navbar from './Components/Navbar';
import Starter from './Components/Starter';
import Footer from './Components/Footer';

function App() {

  const [character, setCharacter] = useState();
  const [weapon, setWeapon] = useState();
  const [isLogged, setIsLogged] = useState(false);


  return (
    <div className="app">
      {isLogged ? <div className='random'>

        <Navbar  setWeapon={setWeapon} setCharacter={setCharacter} />
        <Legends character={character} weapon={weapon}/>
        <Footer />
      </div> : <Starter setIsLogged={setIsLogged} />}

    </div>
  )
}

export default App
