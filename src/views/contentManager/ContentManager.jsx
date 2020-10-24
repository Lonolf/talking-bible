import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useSelector } from 'react-redux'
import Character from 'views/character/Character'
import Guide from 'views/guide/Guide'

const useStyles = makeStyles((theme) => ({
  scrollbars: {
    '&::-webkit-scrollbar': {
      width: '0.5em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
      borderRadius: 4,
    },
    overflowX: 'auto',
    overflowY: 'auto  ',
  },
  mainContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.contrastText,
  },
  secondContainer: {
    padding: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  siderbarMain: {
    flex: 3,
    border: '2px solid white',
    minHeight: '100%',
    paddingRight: '1%',
    paddingBottom: 50,
  },
}))

const ContentManager = () => {
  const classes = useStyles()
  const pages = useSelector(state => state.navigation.pages)

  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.secondContainer} ${classes.scrollbars}`}>
        <Guide />
        {pages[pages.length - 1] === 'character' ? <Character /> : null}
      </div>
    </div>
  )
}

export default ContentManager
