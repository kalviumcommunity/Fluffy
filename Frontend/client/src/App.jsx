import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponents/Home'
import Adoption from './components/Adoption';
import Pettoys from './components/pettoys';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <Adoption/> */}
      <Pettoys/>
    </>
  )
}

export default App
