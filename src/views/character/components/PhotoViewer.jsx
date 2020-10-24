import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import translator from 'utility/translator'

const useStyles = makeStyles((theme) => ({
  first: {
    flex: '1 0 200px',
    padding: '15%',
    display: 'flex',
    flexDirection: 'column',
  },
  second: {
    border: '1px solid black',
    borderRadius: 5,
    flex: '1 0 200px',
    padding: '25px 10px 10px 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const PhotoViewer = ({ props: { character: { name = '', photoUrl } = {} } = {} }) => {
  const classes = useStyles()

  return (
    <div className={classes.first}>
      <div className={classes.second}>
        <Typography variant='h4'>{name}</Typography>
        <div style={{ height: 25 }} />
        {photoUrl != null
          ? <img alt={name + ' photo'} url={photoUrl} />
          : <Typography variant='subtitle1'>{translator.fromLabel('character_noCharacterPhoto_warning')}</Typography> }
      </div>
    </div>
  )
}

export default PhotoViewer
