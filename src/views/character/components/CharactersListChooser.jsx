import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/actions'

import translator from 'utility/translator'

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
  },
}))

const CharactersListChooser = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const charactersListsNames = useSelector(state => state.characters.charactersListsNames)

  const onChange = event => {
    dispatch(actions.characters_setCharactersList(event.target.value))
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='charactersListChooser_label'>{translator.fromLabel('character_chooseCharactersList_label')}</InputLabel>
      <Select
        labelId='charactersListChooser_label'
        id='charactersListChooser'
        onChange={onChange}
        style={{ width: 300 }}
      >
        {charactersListsNames.map(name => <MenuItem key={name} value={name}>{name}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default CharactersListChooser
