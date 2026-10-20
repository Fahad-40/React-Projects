import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Form, useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input  {...register("username" , {required: {value: true , message: "This field is required"}, minLength: {value: 3 , message: "Min length is 3"} , maxLength: {value: 8 , message: "Max length is 8"}})} type="text" />
          {errors.username && <div>{errors.username.message}</div> }
          <input type="text" {...register("password" , {required: {value: true , message: "This field is required"}, minLength: {value: 3 , message: "Min length is 3"} , maxLength: {value: 8 , message: "Max length is 8"}})} />
          {errors.password && <div>{errors.password.message}</div> }
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
