
let temperatura = Number(prompt(`inserisci la temperatura:`));

// if (temperatura < 20 ) {
//     console.log('non ci sono più le mezze stagioni');
    
// }else if ( temperatura <30) {
//     console.log('mi dia una peroni sudata');
    
// }else if ( temperatura <=0) {
//     console.log('non e’ tanto il freddo quanto l’umidità');
    
// }else if ( temperatura <=-10) {
//     console.log('copriti…ancora ti raffreddi');
    
// }else{
//     console.log('lu sule, lu mare, lu ientu');
    
// }

let descrizione;

switch (true) {
    case temperatura <20:
    descrizione ='non ci sono più le mezze stagioni';
    break;
    
    case temperatura <30:
    descrizione = 'mi dia una peroni sudata';
    break;
    
    case temperatura <=0:
    descrizione ='non e’ tanto il freddo quanto l’umidità';
    break;
    
    case temperatura <=-10:
    descrizione = 'copriti…ancora ti raffreddi';
    break;
    
    default:
    descrizione = 'lu sole, lu mare, lu ientu';
    break;
}

console.log(descrizione);
