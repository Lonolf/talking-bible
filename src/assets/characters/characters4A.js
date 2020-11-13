const Adamo = {
  name: 'Adamo',
  father: null,
  mother: null,
  wifes: ['Eva'],
  sons: ['Caino', 'Abele', 'Set', '...'],
}

const Eva = {
  name: 'Eva',
  father: null,
  mother: null,
  husband: 'Adamo',
  sons: ['Caino', 'Abele', 'Set', '...'],
}

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

  profession: 'pastore',
  home: 'nomade',
  status: 'capotribù',

  father: 'Terach',
  wifes: ['Sarah'],
  sons: ['Ismaele', 'Isacco'],

  problem: 'non ho figli maschi',
  importance: 'Sono il capostipite degli Ebrei',
}

const Ismaele = {
  name: 'Ismaele',
  father: 'Abramo',
  mother: 'Agar',
  problem: 'Non sono figlio di Sarah, ma di una schiava',
}

const Sarah = {
  genre: 'f',
  name: 'Sarah',
  husband: 'Abramo',
  sons: ['Isacco'],
  problem: 'Ho paura che Ismaele soppianti Isacco',
}

const Isacco = {
  name: 'Isacco',
  father: 'Abramo',
  sons: ['Esaù', 'Giacobbe'],
  mother: 'Sarah',
  wifes: ['Rebecca'],
  problem: 'Mio padre era pronto a sacrificarmi a Dio',
  nameMeaning: 'Io/Dio ho riso',
}

const Giacobbe = {
  name: 'Giacobbe',
  father: 'Isacco',
  sons: ['Ruben', 'Giuda', 'Giuseppe', 'Beniamino'],
}

export default {
  Adamo,
  Eva,
  Terach,
  Abramo,
  Sarah,
  Isacco,
  Giacobbe,
  Ismaele,
}
