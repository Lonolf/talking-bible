import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/actions'

import translator from '@bit/lonolf.test.translator'

import PhotoViewer from './components/PhotoViewer'
import InputBox from './components/InputBox'

import charactersList from 'assets/objects'

const useStyles = makeStyles((theme) => ({
  first: {
    width: '100%',
    height: '100%',
  },
  second: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
}))

const Character = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const character = useSelector(state => state.character)

  useEffect(() => {
    if (character.name == null)
      dispatch(actions.character_setCharacter(charactersList.first))
  })

  if (character.name == null)
    return (
      <div>
        <Typography variant='h4'>{translator.fromLabel('character_noCharacterSelected_warning')}</Typography>
      </div>
    )
  else
    return (
      <>
        <div className={classes.first}>
          <PhotoViewer props={{ character }} />
        </div>
        <div className={classes.second}>
          <InputBox />
        </div>
      </>
    )
}

export default Character
