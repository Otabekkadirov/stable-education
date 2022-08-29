/*
function salomAyt(person = "o'quvchi") {
  if (
    person === "Javohir" ||
    person === "Mirjon" ||
    person === "Otabek" ||
    person === "Nurali"
  ) {
    return `Salom ${person} ustoz!`;
  }

  return `Salom ${person}`;
}
*/

// let alexgaSalom = salomAyt("Alex");

// console.log(alexgaSalom); =>

// alexgaSalom = "Qalaysan Alex?";

// console.log(alexgaSalom);
// console.log(salomAyt("Javohir"));
// console.log(salomAyt("Otabek"));
// console.log(salomAyt("Nozim"));
// console.log(salomAyt("Nurali"));
// console.log(salomAyt("Javohir"));

// Tosh-qaychi-qog'oz o'yinini yaratish

// 1. game() funksiya yarating.

// 2.1 game() funksiya 2 ta parametr olsin.
// 2.2  1-parametr = playerOne,
//      2-parametr = playerTwo

// 3.   tosh kuchli qaychidan,
//      qaychi kuchli qog'ozdan,
//      qog'oz kuchli toshdan.

// 4.   tosh bilan tosh durang,
//      qaychi bilan qaychi durang
//      qog'oz bilan qog'oz durang

// Function declaration
// function game(playerOne, playerTwo) {
//   playerOne = playerOne.toLowerCase().trim();
//   playerTwo = playerTwo.toLowerCase().trim();
//   if (playerOne === playerTwo) {
//     return `Durang`;
//   }
//   if (
//     (playerOne === "tosh" && playerTwo === "qaychi") ||
//     (playerOne === "qaychi" && playerTwo === "qog'oz") ||
//     (playerOne === "qog'oz" && playerTwo === "tosh")
//   ) {
//     return `1-o'yinchi g'olib!`;
//   }
//   return `2-o'yinchi g'olib!`;
// }

// Function expression
// const game = function(playerOne, playerTwo) {
//   playerOne = playerOne.toLowerCase().trim();
//   playerTwo = playerTwo.toLowerCase().trim();
//   if (playerOne === playerTwo) {
//     return `Durang`;
//   }
//   if (
//     (playerOne === "tosh" && playerTwo === "qaychi") ||
//     (playerOne === "qaychi" && playerTwo === "qog'oz") ||
//     (playerOne === "qog'oz" && playerTwo === "tosh")
//   ) {
//     return `1-o'yinchi g'olib!`;
//   }
//   return `2-o'yinchi g'olib!`;
// }

// Arrow function
const game = (playerOne, playerTwo) => {
  playerOne = playerOne.toLowerCase().trim();
  playerTwo = playerTwo.toLowerCase().trim();
  if (playerOne === playerTwo) {
    return `Durang`;
  }
  if (
    (playerOne === "tosh" && playerTwo === "qaychi") ||
    (playerOne === "qaychi" && playerTwo === "qog'oz") ||
    (playerOne === "qog'oz" && playerTwo === "tosh")
  ) {
    return `1-o'yinchi g'olib!`;
  }
  return `2-o'yinchi g'olib!`;
};

console.log(game("Tosh", "   Qaychi"));
console.log(game("qaychi   ", "qog'oz"));
console.log(game("qOg'oz  ", "tosh"));
console.log(game("qaychi  ", "tosh   "));
console.log(game("qog'oz   ", "qaychi"));
console.log(game("tosh  ", "qog'oz"));
console.log(game("tosh  ", "toSh"));
console.log(game("qaychi  ", "qaychi"));
console.log(game("qog'oz    ", "qog'oz"));

// Final:
// game('tosh', 'qaychi') => 1-o'yinchi g'olib
// game('tosh', 'qog'oz') => 2-o'yinchi g'olib
// game('qaychi', 'qog'oz') => 1-o'yinchi g'olib
// game('qog'oz', 'qog'oz') => durang
