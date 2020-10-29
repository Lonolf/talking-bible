const Terach = {
  name: 'Terach',
  surname: null,
  sons: ['Abramo'],
}

const Abramo = {
  default: true,
  name: 'Abramo',
  surname: null,

  father: 'Terach',
  sons: ['Ismaele', 'Isacco'],
  wifes: ['Sarah'],

  birthday: null,
  deathDay: null,
  century: 'XVIII a.C.',

  motherland: 'Mesopotamia',
  domicile: null,
  profession: 'Pastore',
  status: 'capotribù',

  problem: 'Nonostante io e mia moglie siamo sposati da molti anni, non abbiamo figli maschi.',
}

export default {
  Terach,
  Abramo,
}
