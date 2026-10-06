import { useState , useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const fetchApiData = async () =>{
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        const data = await response.json()

        setApiData(data)
      } catch (error) {
        console.log("error occurred")
      }
    }
    fetchApiData()
  }, [])
  

  return (
    <>
      <div className='flex flex-wrap gap-4'>
        {
        apiData.map((item) =>(
          <div key={item.id} className='flex flex-col items-start w-[30%] m-2 p-4 border-2 border-white rounded'>
          <p className='text-start'>User id : {item.userId}</p>
          <p className='text-start'>id : {item.id}</p>
          <p className='text-start'>Title : {item.title}</p>
          <p className='text-start'>Body : {item.body}</p>
        </div>
        ))
      }
        {/* <div className='flex flex-col items-start m-4 p-4 border-2 border-white rounded'>
          <p>User id : </p>
          <p>id : </p>
          <p>Title :</p>
          <p>Body</p>
        </div>
        <div className='flex flex-col items-start m-4 p-4 border-2 border-white rounded'>
          <p>User id i: </p>
          <p>id : </p>
          <p>Title : </p>
          <p>Body : </p>
        </div> */}
      </div>
    </>
  )
}

export default App
