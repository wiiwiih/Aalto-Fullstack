import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<h1>{text}</h1>)

const Button = ({name, onClick}) => (<button onClick={onClick}>{name}</button>)

const Stat = ({name, stat}) => (<div>{name} {stat}</div>)

const Statistics = ({stats}) => (
    <>
      <Stat name={[stats[0].name]} stat={stats[0].stat} />
      <Stat name={[stats[1].name]} stat={stats[1].stat} />
      <Stat name={[stats[2].name]} stat={stats[2].stat} />
      <Stat name={[stats[3].name]} stat={stats[3].stat} />
      <Stat name={[stats[4].name]} stat={stats[4].stat} />
      <Stat name={[stats[5].name]} stat={stats[5].stat} />
    </>
)

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
      <Statistics stats = {[
        {name:"good", stat:good},
        {name:"neutral", stat:neutral},
        {name:"bad", stat:bad},
        {name:"all", stat:good + neutral + bad},
        {name:"average", stat:(good - bad) / (good + neutral + bad)},
        {name:"positive", stat:(good / (good + neutral + bad) * 100) + ' %'}
      ]} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)