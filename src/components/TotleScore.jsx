import React from 'react'
import './TotleScore.css'

function TotleScore({score}) {
  return (
    
      <div className="score">
        <h1>{score}</h1>
        <p>Totle Score</p>
      </div>
    
  )
}

export default TotleScore
