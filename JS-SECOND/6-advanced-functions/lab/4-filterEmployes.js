function solve (jsonData, criteria) {
    let arg = criteria.split('-');
    let arr = JSON.parse(jsonData);

    return arr.filter(e => e[arg[0]] === arg[1]).map((e,i) =>
        `${i}. ${[e['first_name'],e['last_name']].join(' ')} - ${e.email}`).join('\n')
}
console.log(solve (`[{ 

    "id": "1", 

    "first_name": "Ardine", 

    "last_name": "Bassam", 

    "email": "abassam0@cnn.com", 

    "gender": "Female" 

  }, { 

    "id": "2", 

    "first_name": "Kizzee", 

    "last_name": "Jost", 

    "email": "kjost1@forbes.com", 

    "gender": "Female" 

  },   

{ 

    "id": "3", 

    "first_name": "Evanne", 

    "last_name": "Maldin", 

    "email": "emaldin2@hostgator.com", 

    "gender": "Male" 

  }]`,

    'gender-Female' ))
/*
scope - блок код, в който "живеят" декларирани променливи ?
context - референция към мястото на обекта (от паметта) на изпълнения на код/функция ?  (edited)
 */