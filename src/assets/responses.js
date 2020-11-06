export default ({
  character: {
    name = '',
    problem = '',
    father,
    sons = [],
    wifes = [],
    domicile,
    profession,
    importance,
  } = {},
}) => ([
  ['identity', 'ciao', 'Ciao, piacere di conoscerti'],
  ['identity', 'salve', 'Oh oh, amico amico, salve lo dici a tua sorella! 😉'],
  ['includes', 'importante', importance == null ? 'Mi dispiace, devi scoprirlo tu.' : importance],
  ['identity', 'dove abiti', domicile == null ? 'Non ho fissa dimora' : `Io abito a ${domicile}`],
  ['includes', 'padre', father == null ? 'Mi dispiace, non conosco mio padre' : `Mio padre si chiama ${father}`],
  ['includes', 'moglie', wifes.length === 0 ? 'Non sono sposato' : wifes.length === 1 ? `Ho una moglie, ${wifes[0]}` : `Ho ${wifes.length} mogli, ${wifes.join(', ')}`],
  ['includes', 'lavoro', profession == null ? 'Sono disoccupato' : `Il mio lavoro è fare il ${profession.toLowerCase()}`],
  ['includes', 'nome', `Il mio nome è ${name}`],
  ['includes', 'chiami', `Il mio nome è ${name}`],
  ['includes', 'problema', problem !== '' ? `Il mio problema è che ${problem}` : 'Nulla di particolare, grazie'],
  ['includes', 'figli', sons.length === 0 ? 'Non ho figli' : sons.length === 1 ? `Ho un figlio, ${sons[0]}` : `Ho ${sons.length} figli, ${sons.join(', ')}`],
])
