import objects from 'assets/objects'
import store from 'redux/store'
import actions from 'redux/actions'
const { getState, dispatch } = store

const capitalize = text => text[0].toUpperCase() + text.slice(1)

const textsElaborateNewText = ({ text, texter }) => {
  try {
    const character = getState().character
    dispatch(actions.texts_createText({ text, texter }))

    if (text.match(/^comando/)) {
      dispatch(textsElaborateCommand({ text }))
    } else {
      const response = calcResponse({ text, character })

      dispatch(actions.texts_createText({ text: response, texter: character.name }))
    }
  } catch (error) {
    console.error(error)
  }
}

const textsElaborateCommand = ({ text }) => {
  try {
    const keys = Object.keys(objects)

    if (text.match('personaggio')) {
      const foundKey = keys.find(key => text.includes(key))
      if (foundKey != null) {
        dispatch(actions.character_setCharacter(objects[foundKey]))
        dispatch(actions.texts_createText({
          text: 'Cambio a ' + foundKey,
          texter: 'system',
        }))
      } else {
        dispatch(actions.texts_createText({
          text: 'Personaggio non trovato',
          texter: 'system',
        }))
      }

      return { text }
    }

    dispatch(actions.texts_createText({
      text: '"' + text + '" non riconosciuto',
      texter: 'system',
    }))
  } catch (error) {
    console.error(error)
  }
}

const calcResponse = ({
  text = '',
  character: { name = '', problem = '', sons = [] } = {},
}) => {
  try {
    text = text.toLowerCase()

    if (text.includes('nome') || text.includes('chiami'))
      return `Il mio nome è ${capitalize(name)}`

    if (text.includes('problema'))
      return problem !== '' ? `Il mio problema è che ${problem}` : 'Nulla di particolare, grazie'

    if (text.includes('figli'))
      return sons.length === 0 ? 'Non ho figli'
        : sons.length === 1 ? `Ho un figlio, ${capitalize(sons[0])}`
          : `Ho ${sons.length} figli, ${sons.map(name => capitalize(name)).join(', ')}`

    return 'Mi dispiace, non ho capito'
  } catch (error) {
    console.error(error)
  }
}

export default {
  textsElaborateNewText,
}
