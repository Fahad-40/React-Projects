import { useState , useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  const buttonRef = useRef()
  const [show, setShow] = useState(false)

  const handleClick = () =>{
    setShow(!show)
  }

  return (
    <>
      <div className='m-4'>
        <input ref = {inputRef} className='bg-gray-800 px-4 py-2 rounded border border-white text-white' type={show ? "text" : "password"} />
      </div>
      <div className='m-4'>
        <button ref = {buttonRef} className='bg-gray-800 px-4 py-2 rounded' onClick={handleClick}>{show ? "hide" : "show"}</button>
      </div>
    </>
  )
}

export default App
