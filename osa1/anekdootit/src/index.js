import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<h1>{text}</h1>)

const Paragraph = ({text}) => (<p>{text}</p>)

const Button = ({name, onClick}) => (<button onClick={onClick}>{name}</button>)

const Votes = ({voteAmount}) => (<p>has {voteAmount} votes</p>)

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0));

  const [mostVoted, setMostVoted] = useState(0);

  return (
    <>
      <Header text="Anecdote of the day" />
      <Paragraph text={anecdotes[selected]} />
      <Votes voteAmount={votes[selected]} />
      <Button name="vote" onClick={() => {
          const newVotes = [...votes]
          newVotes[selected] += 1
          setVotes(newVotes)

          if (newVotes[selected] > newVotes[mostVoted]) {
            setMostVoted(selected)
          }
        }} />
      <Button name="next anecdote" onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
    
      <Header text="Anecdote with most votes" />
      <Paragraph text={anecdotes[mostVoted]} />
      <Votes voteAmount={votes[mostVoted]} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
