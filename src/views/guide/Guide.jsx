import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

import MenuBook from '@material-ui/icons/MenuBook'

import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/actions'

import Modal from '@bit/lonolf.react-small-components.modal'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    top: 25,
    left: 25,
  },
  mainDiv: {
    flexGrow: 1,
    width: '100%',
    padding: 30,
  },
  bottomBar: {
    width: '100%',
    justifyContent: 'flex-end'
  },
}))

const Guide = () => {
  const classes = useStyles()
  const page = useSelector(state => state.navigation.pages[state.navigation.pages.length - 1])
  const dispatch = useDispatch()
  const mobile = useSelector(state => state.navigation.dimensions.mobile)

  const onClose = () => dispatch(actions.navigationGoBack())

  if (page !== 'guide' && !mobile)
    return (
      <Fab
        className={classes.fab}
        onClick={() => dispatch(actions.navigationNavigate('guide'))}
        color='primary'
      >
        <MenuBook />
      </Fab>
    )
  else if (page === 'guide')
    return (
      <Modal props={{ onClose }}>
        <div className={classes.mainDiv} onClick={onClose}>
          <Typography variant='h4'>Comandi</Typography>
          <div style={{ height: 15 }} />
          <Typography variant='h5'>Visualizzare tutti i personaggi: cmd pers</Typography>
          <div style={{ height: 15 }} />
          <Typography variant='h5'>Cambio personaggio: cmd pers "nome"</Typography>
          <Typography variant='subtitle1'>es: cmd pers Sarah</Typography>
          <div style={{ height: 15 }} />
          <Typography variant='h5'>Visualizzare tutte le propietà del personaggio: cmd props</Typography>
        </div>
        <Toolbar className={classes.bottomBar}>
          <Button color='primary' variant='outlined' onClick={onClose}>CLOSE</Button>
        </Toolbar>
      </Modal>
    )
  else
    return null
}

export default Guide
