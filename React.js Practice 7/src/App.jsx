import { useState , useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  const handleClick = () =>{
    inputRef.current.focus()
  }

  return (
    <>
     <div className='m-4'>
      <input ref = {inputRef} className='bg-gray-800 px-4 py-2 text-white' type="text" />
     </div>
     <div className='m-4'>
      <button className='bg-gray-800 px-4 py-2 rounded' onClick={handleClick}>Click</button>
     </div>
    </>
  )
}

export default App
