const Terach = {
  name: 'Terach',
  sons: ['Abramo'],
}

const Abramo = {
  name: 'Abramo',
  surname: null,

  birthday: null,
  deathDay: null,
  century: 'XVIII a.C.',

  // Geographical data
  motherland: 'Mesopotamia',

  profession: 'Pastore',
  home: 'Nomade',
  status: 'Capotribù',

  father: 'Terach',
  wifes: ['Sarah'],
  sons: ['Ismaele', 'Isacco'],
  
  problem: 'Non ho figli maschi',
  importance: 'Sono il capostipite degli Ebrei',
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