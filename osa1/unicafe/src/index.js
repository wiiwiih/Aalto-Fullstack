import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<h1>{text}</h1>)

const Stat = ({name, stat}) => (<div>{name} {stat}</div>)

const Button = ({name, onClick}) => (<button onClick={onClick}>{name}</button>)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button name="good" onClick={() => setGood(good +1)} />
      <Button name="neutral" onClick={() => setNeutral(neutral +1)} />
      <Button name="bad" onClick={() => setBad(bad +1)} />

      <Header text="statistics" />
      <Stat name="good" stat={good} />
      <Stat name="neutral" stat={neutral} />
      <Stat name="bad" stat={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)