const Adamo = {
  name: 'Adamo',
  father: null,
  mother: null,
  wifes: ['Eva'],
  sons: ['Caino', 'Abele', 'Set', '...'],
}

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
  genre: 'f',
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
  wifes: ['Rebecca'],
  sons: ['Esaù', 'Giacobbe'],
  problem: 'Mio padre era pronto a sacrificarmi a Dio',
  nameMeaning: 'Io/Dio ho riso',
}

const Rebecca = {
  name: 'Rebecca',
  husband: 'Isacco',
  sons: ['Esaù', 'Giacobbe'],
  problem: 'Voglio che Giacobbe diventi il primogenito',
}

const Giacobbe = {
  name: 'Giacobbe',
  father: 'Isacco',
  mother: 'Rebecca',
  brothers: ['Esaù'],
  problem: 'Mio zio mi ha fatto sposare sua figlia maggiore con l\'inganno',
  wifes: ['Lia', 'Rachele'],
  sons: ['Ruben', 'Giuda', 'Giuseppe', 'Beniamino', '...']
}

const Esaù  = {
  name: 'Esaù',
  father: 'Isacco',
  mother: 'Rebecca',
  brothers: ['Giacobbe'],
  problem: 'Mio fratello mi ha rubato primogenitura e la benedizione di mio padre',
}

const Giuseppe = {
  name: 'Giuseppe',
  father: 'Giacobbe',
  mother: 'Rachele',
  wifes: ['Asenat'],
  sons: ['Efraim', 'Manasse'],
  problem: 'I miei fratelli mi hanno venduto come schiavo',
  status: 'Vicerè d\'Egitto',
}

export default {
  Adamo,
  Terach,
  Abramo,
  Sarah,
  Ismaele,
  Isacco,
  Rebecca,
  Giacobbe,
  Esaù,
  Giuseppe,
}
