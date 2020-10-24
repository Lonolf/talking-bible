import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'

import MenuBook from '@material-ui/icons/MenuBook'

import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/actions'

import Modal from 'components/modal/Modal'

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
      <Modal onClick={onClose}>
        <Button color='primary' variant='outlined' onClick={onClose}>CLOSE</Button>
      </Modal>
    )
  else
    return null
}

export default Guide
