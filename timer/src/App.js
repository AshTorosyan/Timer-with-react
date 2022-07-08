import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [timer,setTimer] = useState((new Date()).toLocaleTimeString())

  useEffect(() => {
   setTimeout(() => {
    setTimer((new Date()).toLocaleTimeString())
   },1000)
  },[timer])

  return (
    <section className='container'>
      {timer}
    </section>
  )
}

export default App