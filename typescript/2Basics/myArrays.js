// const superHeros : string[] = []
// const heroPower: Array<number> = []
// type User1 = {
//     name: string
//     isActive: boolean
// }
var humans = ["Bob", "Jon", "Jane"];
console.log(humans[0]);
console.log(humans[1]);
console.log(humans[2]);
console.log(humans);
humans = ["Tarzan", "Mario", "Luigi"];
//let muutujat saab mitu korda muuta
console.log(humans);
var heros = ["Spiderman", "Catwoman", "Thor"];
//heros = ["Spiderman", "Catwoman", "Thor"] see annab errorit
//kuna consti saab ainult ühe korra deklareerida
console.log(heros);
var someNumbers = [
    [255, 255, 255],
    [1, 1, 1]
];
console.log(someNumbers);
//push lisab uue väärtuse juurde
heros.push("Spiderman");
//heros.push(3); //annab errorit kuna nr 3 on int andmetüüp
console.log(heros);
