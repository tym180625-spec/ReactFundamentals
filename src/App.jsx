import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

const toggleTheme = () => {
  setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
}

  return (
    <div className={`container ${theme}`}>
      <Card item="Dog" image="forestStock.jpg" description="Wow nice dog"></Card>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default App
