import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Home />
    <Form />
    </div>
  )
}

export default App 
