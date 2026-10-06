import { useState , useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const newDate = setInterval(() => {
      setDate(new Date())
    }, 1000);
  
    return () => {
      clearInterval(newDate)
    }
  }, [])
  

  return (
    <>
      <p>{date.toLocaleTimeString()}</p>
    </>
  )
}

export default App
