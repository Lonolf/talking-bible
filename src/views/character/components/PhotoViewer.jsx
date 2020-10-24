import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import translator from '@bit/lonolf.test.translator'

const useStyles = makeStyles((theme) => ({
  first: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

const PhotoViewer = ({ props: { character: { name = '', photoUrl } = {} } = {} }) => {
  const classes = useStyles()

  if (photoUrl == null)
    return (
      <div className={classes.first}>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='subtitle1'>{translator.fromLabel('character_noCharacterPhoto_warning')}</Typography>
      </div>
    )
  else
    return (
      <div className={classes.first}>
        <Typography variant='h4'>{name}</Typography>
        <img alt={name + ' photo'} url={photoUrl} />
      </div>
    )
}

export default PhotoViewer
