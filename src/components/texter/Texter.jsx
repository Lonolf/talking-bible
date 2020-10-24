import React, { useState, useRef, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const textStyle = {
  user: {
    textAlign: 'right',
    backgroundColor: 'lightGreen',
    color: 'white',
    marginLeft: '40%',
  },
  system: {
    textAlign: 'center',
    backgroundColor: 'orange',
    color: 'white',
    marginLeft: '20%',
    marginRight: '20%',
  },
  character: {
    backgroundColor: 'lightBlue',
    textAlign: 'left',
    color: 'white',
    marginRight: '40%',
  },
}

const useStyles = makeStyles((theme) => ({
  scrollbars: {
    '&::-webkit-scrollbar': {
      width: '0.5em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
      outline: '1px solid slategrey',
      borderRadius: 4,
    },
    overflowX: 'auto',
    overflowY: 'auto  ',
  },
  firstDesktop: {
    flex: '1 0 200px',
    padding: '15%',
    display: 'flex',
    flexDirection: 'column',
  },
  firstMobile: {
    flex: '1 0 200px',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
  },
  second: {
    border: '1px solid black',
    borderRadius: 5,
    flex: '1 0 200px',
    padding: 10,
    overflowY: 'scroll',
  },
  textField: {
    borderRadius: 5,
    maxWidth: '60%',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    fontSize: 'x-large',
  },
}))

const Texter = ({ props: { onSend = () => {}, textsList = [], mobile = false } = {} }) => {
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
    <div className={mobile ? classes.firstMobile : classes.firstDesktop}>
      <TextsList props={{ textsList }} />
      <InputField props={{ text, onChange, onEnter, selectLastMessage }} />
    </div>
  )
}

const TextsList = ({ props: { textsList = [] } = {} }) => {
  const classes = useStyles()
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [textsList])

  return (
    <div className={`${classes.second} ${classes.scrollbars}`}>
      {textsList.map(({ textId, text = '', texter }) => (
        <div key={textId} className={classes.textField} style={textStyle[texter] ?? textStyle.character}>
          <Typography variant='h5'>{text}</Typography>
        </div>
      ))}
      <div style={{ float: 'left', clear: 'both' }} ref={messagesEndRef} />
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
      autoFocus
    />
  )
}

export default Texter
