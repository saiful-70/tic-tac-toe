import React from 'react'

const ButtonRestart = ({handleRestart}) => {
  return (
    <button type="button" className="restart" onClick={handleRestart}>
        Play again
      </button>
  )
}
const ButtonReset = ({handleReset}) => {
  return (
    <button type="button" className="restart" onClick={handleReset}>
        Reset Game
      </button>
  )
}

export { ButtonRestart, ButtonReset}
