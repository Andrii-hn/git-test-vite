import { useState } from 'react'
import classNames from 'classnames'

import CounterButton from './components/CounterButton/CounterButton'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.scss'

function App() {
  const [counterValue, setCounterValue] = useState(0)
  let titleClass = ["card__title"]

  if (counterValue > 0) {
    titleClass.push(" card__title--positive")
  } else if (counterValue < 0) {
    titleClass.push(" card__title--negative")
  } 

  return (
    <>
      <Header />
      <div className="card">        
        <h2 className={classNames('card__title', {
          "card__title--positive": counterValue > 0,
          "card__title--negative": counterValue < 0
        })}>{counterValue}</h2>
        <CounterButton 
          onClick={() => 
            setCounterValue((prevCounterValue) => prevCounterValue + 1)
          }
        >
          +
        </CounterButton>
        <CounterButton 
          onClick={() => 
            setCounterValue((prevCounterValue) => prevCounterValue - 1)
          }
        >
          -
        </CounterButton>
      </div>
      <Footer />
    </>
  )
}

export default App
