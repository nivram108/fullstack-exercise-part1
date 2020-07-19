import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button> 
  )
}
const Statistic = ({text, value}) => {
  return(
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td> 
    </tr>
    </>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const all = () => (good + neutral + bad)
  const average = () => ((good * 1 + bad * -1) / all())
  const positive = () => (good / all() * 100)
  if (all() === 0) {
    return (
      <>
      <h1>statistics</h1>
      No feedback given
      </>
    )
  } else {
    return (
      <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text={'good'} value={good}/>
          <Statistic text={'neutral'} value={neutral}/>
          <Statistic text={'bad'} value={bad}/>
          <Statistic text={'all'} value={all()}/>
          <Statistic text={'average'} value={average()}/>
          <Statistic text={'positive'} value={positive() + '%'}/>
          </tbody>
      </table>
      </>
      
    )
  }
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodclick = () => {
    setGood(good + 1)
  }
  const handleNeutralclick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadclick = () => {
    setBad(bad + 1)
  }

  console.log(good)
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodclick} text={'good'} /> 
      <Button onClick={handleNeutralclick} text={'neutral'} /> 
      <Button onClick={handleBadclick} text={'bad'} /> 
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)