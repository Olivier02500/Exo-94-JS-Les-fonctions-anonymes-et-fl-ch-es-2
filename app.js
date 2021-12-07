let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
function inner(tableNum) {
    document.body.appendChild(document.createElement('p')).innerHTML = tableNum;
}

let arrayOne = tableauUn.map( item => item**item );
inner(arrayOne);

let arrayTwo = tableauUn.map( item => item * 10 );
inner(arrayTwo);

let arrayThree = tableauUn.map( item => (item + 2) / 24 );
inner(arrayThree);

let arrayFour = tableauUn.slice(1);
inner(arrayFour);

let arrayFive = tableauUn.filter( item => item % 2 === 0);
inner(arrayFive);

let arraySix = tableauUn.filter( item => (item*3) > 10);
inner(arraySix);

//tableau deux
let arraySeven = tableauDeux.map( item => item.length + " " + item);
inner(arraySeven);

let arrayHeight = tableauDeux.map( item => item + " " + item);
inner(arrayHeight);

let arrayNine = tableauDeux.filter( item => item.length > 2 + 2);
inner(arrayNine);

let arrayTen = tableauDeux.filter( item => item.length % 2 === 0 );
inner(arrayTen);

let arrayEleven = tableauDeux.filter( item => item.length -3 > 10 );
inner(arrayEleven);





