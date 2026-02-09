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

const cards = [
  {
    item: "Forest",
    image: "forestStock.jpg",
    description: "Wow nice forest",
    id: 0
  },

  {
    item: "Trolley",
    image: "trolleyStock.jpg",
    description: "Trolley in the city",
    id: 1
  },

  {
    item: "Island",
    image: "islandStock.webp",
    description: "Scenice island",
    id: 2
  }
]

  return (
    <div className={`container ${theme}`}>
      <div className='grid'>
        {cards.map((card, index) => (
        <Card key={card.id} {...card}></Card>
        ))}
      </div>
      
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default App
