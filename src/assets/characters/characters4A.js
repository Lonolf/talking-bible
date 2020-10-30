const Terach = {
  name: 'Terach',
  sons: ['Abramo'],
}

const Abramo = {
  default: true,
  name: 'Abramo',
  surname: null,

  birthday: null,
  deathDay: null,
  century: 'XVIII a.C.',

  // Geographical data
  motherland: 'Mesopotamia',
  domicile: null,

  profession: 'Pastore',
  home: 'Nomade',
  status: 'Capotribù',

  father: 'Terach',
  wifes: ['Sarah'],
  sons: ['Ismaele', 'Isacco'],

  problem: 'non ho figli maschi',
  importance: 'Sono il capostipite degli Ebrei',
}

const Sarah = {
  name: 'Sarah',
  husband: 'Abramo',
  sons: ['Isacco'],
  problem: 'Ho paura che Ismaele soppianti Isacco',
}

const Isacco = {
  name: 'Isacco',
  father: 'Abramo',
  sons: ['Esaù', 'Giacobbe'],
}

const Giacobbe = {
  name: 'Giacobbe',
  father: 'Isacco',
  sons: ['Ruben', 'Giuda', 'Giuseppe', 'Beniamino'],
}

export default {
  Terach,
  Abramo,
  Isacco,
  Giacobbe,
}
