const first = {
  default: true,
  name: 'first',
  sons: ['second'],
  problem: 'sono sempre il primo dell\'elenco',
}

const second = {
  father: 'first',
  name: 'second',
  sons: ['third'],
}

const third = {
  father: 'second',
  name: 'third',
}

export default {
  first,
  second,
  third,
}
