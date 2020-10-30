export default ({ character: { name = '', problem = '', sons = [], domicile, profession, importance } = {} }) => ([
  ['identity', 'ciao', 'Ciao, piacere di conoscerti'],
  ['identity', 'salve', 'Oh oh, amico amico, salve lo dici a tua sorella! 😉'],
  ['includes', 'importante', importance == null ? 'Mi dispiace, devi scoprirlo tu.' : importance],
  ['identity', 'dove abiti', domicile == null ? 'Non ho fissa dimora' : `Io abito a ${domicile}`],
  ['includes', 'lavoro', profession == null ? 'Sono disoccupato' : `Il mio lavoro è fare il ${profession.toLowerCase()}`],
  ['includes', 'nome', `Il mio nome è ${name}`],
  ['includes', 'chiami', `Il mio nome è ${name}`],
  ['includes', 'problema', problem !== '' ? `Il mio problema è che ${problem}` : 'Nulla di particolare, grazie'],
  ['includes', 'figli', sons.length === 0 ? 'Non ho figli' : sons.length === 1 ? `Ho un figlio, ${sons[0]}` : `Ho ${sons.length} figli, ${sons.join(', ')}`],
])
