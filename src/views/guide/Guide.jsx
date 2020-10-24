import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'

import MenuBook from '@material-ui/icons/MenuBook'

import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/actions'

import Modal from '@bit/lonolf.test.modal'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    top: 25,
    left: 25,
  },
}))

const Guide = () => {
  const classes = useStyles()
  const page = useSelector(state => state.navigation.pages[state.navigation.pages.length - 1])
  const dispatch = useDispatch()

  const onClose = () => dispatch(actions.navigationGoBack())

  if (page !== 'guide')
    return (
      <Fab
        className={classes.fab}
        onClick={() => dispatch(actions.navigationNavigate('guide'))}
        color='primary'
      >
        <MenuBook />
      </Fab>
    )
  else
    return (
      <Modal onClick={onClose}>
        <Button onClick={onClose}>CLOSE</Button>
      </Modal>
    )
}

export default Guide
