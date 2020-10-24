export const findDefaultCharacter = charactersList =>
  Object.values(charactersList).filter(character => character.default)[0] ??
  Object.values(charactersList)[0]
