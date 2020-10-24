import React, { useState, useRef, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  first: {
    flex: '1 0 200px',
    padding: '15%',
    display: 'flex',
    flexDirection: 'column',
  },
  second: {
    border: '1px solid black',
    flex: '1 0 200px',
    padding: 10,
    overflowY: 'scroll',
  },
  textField: {
    borderRadius: 50,
  },
  input: {
    fontSize: 'xx-large',
  },
}))

const Texter = ({ props: { onSend = () => {}, textsList = [] } = {} }) => {
  const classes = useStyles()
  const [text, setText] = useState('')
  const [selectedText, setSelectedText] = useState(null)

  const onEnter = () => {
    if (text !== '') {
      onSend(text)
      setText('')
      setSelectedText(null)
    }
  }

  const selectLastMessage = () => {
    const temp = selectedText == null ? textsList.length - 2
      : selectedText > 1 ? selectedText - 2
        : selectedText
    setSelectedText(temp)
    setText(textsList[temp].text)
  }

  const onChange = event => {
    setSelectedText(null)
    setText(event.target.value)
  }

  return (
    <div className={classes.first}>
      <TextsList props={{ textsList }} />
      <InputField props={{ text, onChange, onEnter, selectLastMessage }} />
    </div>
  )
}

const TextsList = ({ props: { textsList = [] } = {} }) => {
  const classes = useStyles()
  const messagesEndRef = useRef(null)

  const textStyle = {
    user: {
      textAlign: 'right',
      backgroundColor: 'blue',
      color: 'white',
    },
    system: {
      textAlign: 'center',
      backgroundColor: 'red',
      color: 'white',
    },
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [textsList])

  return (
    <div className={classes.second}>
      {textsList.map(({ textId, text = '', texter }) => (
        <div key={textId} className={classes.textField} style={textStyle[texter]}>
          <Typography variant='h5'>{text}</Typography>
        </div>
      ))}
      <div
        style={{ float: 'left', clear: 'both' }}
        ref={messagesEndRef}
      />
    </div>
  )
}

const InputField = ({ props: { text, onChange = () => {}, onEnter = () => {}, selectLastMessage = () => {} } = {} }) => {
  const classes = useStyles()

  const onKeyDown = event =>
    event.key === 'Enter' ? onEnter()
      : event.key === 'ArrowUp' ? selectLastMessage()
        : null

  return (
    <TextField
      id='InputText'
      value={text}
      onKeyDown={onKeyDown}
      onChange={onChange}
      InputProps={{ className: classes.input }}
    />
  )
}

export default Texter
