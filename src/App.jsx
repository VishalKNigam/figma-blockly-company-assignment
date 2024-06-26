import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './AllRoutes/AllRoutes'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <AllRoutes />

    </>
  )
}

export default App
