import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const getCandidates = (length) => {
  let candidates = []
  for (let i = 0; i < length; i++) {
    candidates.push(i)
  }
  return candidates
}
const Ancedote = ({anecdotes, vote}) => {
  return (
    <>
    {anecdotes}
    <br/>
    has {vote} vote
    <br/>
    </>
  )
}
const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const App = ({anecdotes, initVotes}) => {
  
  const [selected, setSelected] = useState(Math.floor(Math.random()*anecdotes.length))
  const [votes, setVotes] = useState(initVotes)
  const [most, setMost] = useState(selected)
  const handleNextAnecdoteClick = () => {
    let selectedCanditates = [...getCandidates(anecdotes.length)]
    selectedCanditates.splice(selected, 1)
    console.log("selected anecdotes:", selected)
    console.log("selectedCanditates", selectedCanditates)
    let selectedAnecdote = selectedCanditates[Math.floor(Math.random()*selectedCanditates.length)]
    setSelected(selectedAnecdote)
  }
  const handlevoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    let mostVoted = selected
    let vote = votes[selected]
    for (let i = 0; i < votes.length; i++) {
      if (vote < votes[i]) {
        mostVoted = i;
        vote = votes[i]
      }
    }
    setMost(mostVoted)
  }
  
  // console.log("mostSelected:", most)
  // console.log("mostVote:", votes[most])
  // console.log("anecdotes", anecdotes[selected])
  return (
    <div>
      <h1>Ancedote of the day</h1>
      <Ancedote anecdotes={anecdotes[selected]} vote={votes[selected]}/>
      <Button onClick={handlevoteClick} text={'vote'}/>
      <Button onClick={handleNextAnecdoteClick} text={'next anecdote'}/>
      <h1>Ancedote with most votes</h1>
      <Ancedote anecdotes={anecdotes[most]} vote={votes[most]}/>

    </div>
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

const votes = []

const initVotes = () => {
  for (let i = 0; i < anecdotes.length; i++) {
    votes.push(0)
  }
}
initVotes()
ReactDOM.render(
  <App anecdotes={anecdotes} initVotes={votes} />,
  document.getElementById('root')
)