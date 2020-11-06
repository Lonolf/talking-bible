import store from 'redux/store'
import actions from 'redux/actions'
import responses from 'assets/responses'

const { getState, dispatch } = store

const textsElaborateNewText = ({ text, texter }) => {
  try {
    const character = getState().characters.character
    dispatch(actions.texts_createText({ text, texter }))

    if (text.match(/^cmd/)) {
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
    const charactersList = getState().characters.charactersList
    const charactersNames = Object.keys(charactersList)
    if (text.match('cmd pers')) {
      console.log(charactersNames)
      const foundKey = charactersNames.find(key => text.includes(key))
      console.log(foundKey)
      if (foundKey != null) {
        dispatch(actions.characters_setCharacter(foundKey))
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

    if (text.includes('help') || text.includes('guida') || text.includes('aiuto')) {
      dispatch(actions.navigationNavigate('guide'))
      dispatch(actions.texts_createText({
        text: 'Apro la guida',
        texter: 'system',
      }))
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

const calcResponse = ({ text = '', character = {} }) => {
  try {
    text = text.toLowerCase().replace(/[^\w\s\d]/gi, '')

    return parseResponses({ text, responses: responses({ character }) })
  } catch (error) {
    console.error(error)
  }
}

const parseResponses = ({ text = '', responses = [] }) => {
  for (let response of responses)
    if (testResponse({ method: response[0], base: response[1], text }))
      return response[2]

  return 'Mi dispiace, non ho capito'
}

const testResponse = ({ method, base = '', text = '' }) =>
  method === 'identity' ? text === base
    : method === 'includes' ? text.includes(base)
      : false

export default {
  textsElaborateNewText,
}
