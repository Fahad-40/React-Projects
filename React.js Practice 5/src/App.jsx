import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email: "" , phone : ""})

  const handleClick = () =>{
    alert("Hey I am clicked")
  }

  const handleChange = (e) =>{
    setForm({...form , [e.target.name] : e.target.value})
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
      <input type="text" name='email' value={form.email ? form.email : ""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone ? form.phone : ""} onChange={handleChange} />
    </>
  )
}

export default App
