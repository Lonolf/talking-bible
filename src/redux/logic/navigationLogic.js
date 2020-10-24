import store from 'redux/store'
import actions from 'redux/actions'

const { dispatch } = store

const handleResize = () => {
  console.log(handleResize)
  dispatch(actions.navigation_setDimensions({ mobile: window.innerWidth <= 800, height: window.innerHeight, width: window.innerWidth }))
}

const addSizeListener = () => {
  handleResize()
  window.addEventListener('resize', handleResize)
}

const removeSizeListener = () => {
  window.removeEventListener('resize', handleResize)
}

export default {
  addSizeListener,
  removeSizeListener,
}
