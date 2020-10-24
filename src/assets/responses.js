export default ({ character: { name = '', problem = '', sons = [] } = {} }) => ([
  ['identity', 'ciao', 'Ciao, piacere di conoscerti'],
  ['identity', 'salve', 'Oh oh, amico amico, salve lo dici a tua sorella! 😉'],
  ['includes', 'nome', `Il mio nome è ${name}`],
  ['includes', 'chiami', `Il mio nome è ${name}`],
  ['includes', 'problema', problem !== '' ? `Il mio problema è che ${problem}` : 'Nulla di particolare, grazie'],
  ['includes', 'figli', sons.length === 0 ? 'Non ho figli' : sons.length === 1 ? `Ho un figlio, ${sons[0]}` : `Ho ${sons.length} figli, ${sons.join(', ')}`],
])
