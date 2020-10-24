import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { useSelector } from 'react-redux'

import translator from 'utility/translator'

import PhotoViewer from './components/PhotoViewer'
import InputBox from './components/InputBox'

import CharactersListChooser from './components/CharactersListChooser'
import { Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  first: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  second: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  mobileHeader: {
    width: '100%',
    justifyContent: 'center',
  },
}))

const Character = () => {
  const classes = useStyles()
  const character = useSelector(state => state.characters.character)
  const charactersList = useSelector(state => state.characters.charactersList)
  const mobile = useSelector(state => state.navigation.dimensions.mobile)

  if (charactersList == null)
    return (
      <CharactersListChooser />
    )
  else if (character?.name == null)
    return (
      <div>
        <Typography variant='h4'>{translator.fromLabel('character_noCharacterSelected_warning')}</Typography>
      </div>
    )
  else
    return (
      <>
        {!mobile
          ? (
            <div className={classes.first}>
              <PhotoViewer props={{ character }} />
            </div>
          ) : null}
        <div className={classes.second}>
          {mobile ? <MobileHeader props={{ character }} /> : null}
          <InputBox />
        </div>
      </>
    )
}

const MobileHeader = ({ props: { character: { name = '' } = {} } = {} }) => {
  const classes = useStyles()
  return (
    <Toolbar className={classes.mobileHeader}>
      <Typography variant='h4'>
        {name}
      </Typography>
    </Toolbar>
  )
}

export default Character
