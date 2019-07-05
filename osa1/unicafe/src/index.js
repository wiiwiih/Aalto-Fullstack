import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<h1>{text}</h1>)

const Statistic = ({name, stat}) => (<div>{name} {stat}</div>)

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return (<p>No feedback given</p>)
  }
  return (
    <>
      <Statistic name="good" stat={good} />
      <Statistic name="neutral" stat={neutral} />
      <Statistic name="bad" stat={bad} />
      <Statistic name="all" stat={good + neutral + bad} />
      <Statistic name="average" stat={(good - bad) / (good + neutral + bad)} />
      <Statistic name="positive" stat={(good / (good + neutral + bad) * 100) + ' %'} />
    </>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)