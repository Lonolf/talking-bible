export default ({
  character: {
    name = '',
    genre = 'm',
    problem = '',
    father,
    mother,
    sons = [],
    wifes = [],
    husband,
    domicile,
    profession,
    importance,
  } = {},
}) => ([
  ['identity', 'ciao', 'Ciao, piacere di conoscerti'],
  ['identity', 'salve', name === 'Abramo' ? 'Oh oh, amico amico, salve lo dici a tua sorella! 😉' : 'Salve a voi'],
  ['includes', 'importante', importance == null ? 'Mi dispiace, devi scoprirlo tu.' : importance],
  ['identity', 'dove abiti', domicile == null ? 'Non ho fissa dimora' : `Io abito a ${domicile}`],

  ['includes', 'padre', father == null ? 'Mi dispiace, non conosco mio padre' : `Mio padre si chiama ${father}`],
  ['includes', 'madre', name === 'Adamo' || name === 'Eva' ? 'Non ho una madre' : mother == null ? 'Mi dispiace, non conosco mia madre' : `Mia madre si chiama ${mother}`],
  ['includes', 'mamma', name === 'Adamo' || name === 'Eva' ? 'Non ho una mamma' : mother == null ? 'Mi dispiace, non conosco mia madre' : `Mia madre si chiama ${mother}`],
  ['includes', 'moglie', genre === 'f' ? '...' : wifes.length === 0 ? 'Non sono sposato' : wifes.length === 1 ? `Ho una moglie, ${wifes[0]}` : `Ho ${wifes.length} mogli, ${wifes.join(', ')}`],
  ['includes', 'marito', genre === 'm' ? '...' : husband == null ? 'Non ho marito' : `Mio marito si chiama ${husband}`],
  ['includes', 'figli', sons.length === 0 ? 'Non ho figli' : sons.length === 1 ? `Ho un figlio, ${sons[0]}` : `Ho ${sons.length} figli, ${sons.join(', ')}`],

  ['includes', 'lavoro', profession == null ? 'Non ho una professione particolare' : `Il mio lavoro è fare il ${profession.toLowerCase()}`],
  ['includes', 'nome', `Il mio nome è ${name}`],
  ['includes', 'chiami', `Il mio nome è ${name}`],
  ['includes', 'problema', problem !== '' ? `Il mio problema è che ${problem}` : 'Nulla di particolare, grazie'],
])
