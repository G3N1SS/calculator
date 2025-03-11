import { useState } from 'react';
import Greeting from '../Greeting/Greeting.jsx';
import './app.css'
import Calculator from "../Calculator/Calculator.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <div className={`circle ${loggedIn && 'circle_miracle'}`}>
        <Greeting
          setLoggedIn={setLoggedIn}
          loggedIn={loggedIn}
        />
      </div>
      <Calculator
          loggedIn={loggedIn}
      />
    </>
  )
}

export default App
