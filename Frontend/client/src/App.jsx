import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponents/Home'
import Adoption from './components/Adoption';
import Pettoys from './components/Pettoys';
import Petfoods from './components/Petfoods'
import Lostandfound from './components/Lostandfound';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <Adoption/> */}
      {/* <Pettoys/> */}
      {/* <Petfoods/> */}
      <Lostandfound/>
    </>
  )
}

export default App
