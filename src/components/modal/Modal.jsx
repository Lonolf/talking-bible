import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
    zIndex: 100,
  },
  paper: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    backgroundColor: theme?.palette?.background?.paper ?? 'lightgrey',
    color: theme?.palette?.background?.contrastText ?? 'black',
    boxShadow: theme?.shadows[5],
    borderRadius: theme?.shapes?.borderRadius ?? 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

const Modal = ({ children = null, props: { onClose = () => {}, padding = 0, paperStyle = {} } = {} } = {}) => {
  const classes = useStyles()

  return (
    <div className={classes.container} onClick={onClose}>
      <div className={classes.paper} style={{ padding, ...paperStyle }} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
