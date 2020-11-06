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

const Sarah = {
  name: 'Sarah',
  husband: 'Abramo',
  sons: ['Isacco'],
  problem: 'Ho paura che Ismaele soppianti Isacco',
}

const Ismaele = {
  name: 'Ismaele',
  father: 'Abramo',
  mother: 'Agar',
  problem: 'Non sono figlio di Sarah, ma di una schiava',
}

const Isacco = {
  name: 'Isacco',
  father: 'Abramo',
  mother: 'Sarah',
  problem: 'Mio padre era pronto a sacrificarmi a Dio',
}

export default {
  Terach,
  Abramo,
  Sarah,
  Ismaele,
  Isacco,
}
