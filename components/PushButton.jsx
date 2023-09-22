import React from 'react'

const PushButton = ({text, color, buttonClick, buttonState}) => {
  return (
    <button onClick={buttonClick} disabled={buttonState} className={"rounded-md px-3 py-2 my-2 hover: text-sm font-semibold text-white shadow-sm "+color}>{text}</button>
  )
}

export default PushButton