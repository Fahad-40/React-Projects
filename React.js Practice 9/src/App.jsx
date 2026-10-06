import { useState , useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [task, setTask] = useState([])
  const todoRef = useRef()

  const handleChange = (e) =>{
    setText(e.target.value)
  }

  const handleAdd = () =>{
    if (text.trim() === "") {
      return
    } else {
      const newTask = {id: Date.now() , text : text}
    setTask([...task , newTask])
    setText("")
    }
  }

  const handleDelete = (id) =>{
    setTask(task.filter((item) =>{
      return item.id !== id
    }))
  }

  return (
    <>
      <div className='mt-4'>
        <div className='flex justify-center items-center gap-4'>
          <input className='bg-gray-800 px-4 py-2 text-white' type="text" value={text} onChange={handleChange} />
          <button className='bg-gray-800 px-4 py-2 rounded' onClick={handleAdd}>Add</button>
        </div>
        <div>
          {task.map((item) =>{
            return <div key={item.id} className='flex justify-center items-center gap-[220px]  pt-4'>
          <p className='pl-[20px]'>{item.text}</p>
          <button className='bg-gray-800 px-4 py-2 rounded' onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
          })}
        
        </div>
      </div>
    </>
  )
}

export default App
