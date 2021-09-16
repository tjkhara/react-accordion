import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, info, title }) => {
  const [plusClicked, setPlusClicked] = useState(false)

  const clickPlusHandler = () => {
    setPlusClicked((prevState) => {
      return !prevState
    })
  }

  const clickMinusHandler = () => {
    setPlusClicked((prevState) => {
      return !prevState
    })
  }

  return (
    <>
      <article className='question'>
        <header>
          <h4>{title}</h4>

          {plusClicked && <p>{info}</p>}
          {plusClicked ? (
            <AiOutlineMinus className='btn' onClick={clickMinusHandler} />
          ) : (
            <AiOutlinePlus className='btn' onClick={clickPlusHandler} />
          )}
        </header>
      </article>
    </>
  )
}

export default Question
