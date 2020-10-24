import React from 'react'

import { useSelector } from 'react-redux'
import testlogic from 'redux/logic/textsLogic'

import Texter from 'components/texter/Texter.jsx'

const InputBox = ({ props: { character: { photoUrl } = {} } = {} }) => {
  const texts = useSelector(state => state.texts)

  const onSend = text => {
    testlogic.textsElaborateNewText({ text, texter: 'user' })
  }

  return (
    <Texter props={{ onSend, textsList: Object.values(texts) }} />
  )
}

export default InputBox
