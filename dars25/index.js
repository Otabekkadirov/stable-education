// Array

// let student1 = 'Islom'
// let student2 = 'Jamshid'
// let student3 = 'Mirfayz'

// let students = ["Islom", "Jamshid", "Mirfayz", "Asliddin"];

// let myArr = [1, "Salom", 10, "cat", null, undefined, false, 19];

// let sonlar = [
//   [1, 2],
//   [3, 4, [4.5, 4.6]],
//   [5, 6],
//   [7, 8],
//   [9, 10, 11],
//   [9, 10, 11],
//   [9, 10, 11],
//   [9, 10, 11],
//   [9, 10, 11],
//   [9, 10, 11],
//   [95, 105, 115],
//   [94, 110, 113],
// ];

// console.log(sonlar[1], sonlar[2]);
// console.log(sonlar[sonlar.length - 2][1]);

// console.log(typeof myArr[6]);
// console.log(students[0]);
// console.log(students[3]);
// console.log(students[1]);
// console.log(students[4]);

const qurollar = ["tosh", "qaychi", "qog'oz"];

function computerWeapon() {
  let weaponIndex = Math.floor(Math.random() * qurollar.length);
  return qurollar[weaponIndex];
}

function game(playerOne, playerTwo) {
  playerOne = playerOne.trim().toLowerCase();
  playerTwo = playerTwo.trim().toLowerCase();

  if (playerOne === "bomba") {
    return `Inson yashirin qurolni ishlatdi!`;
  }
  if (playerOne === playerTwo) {
    return `Jang davom etadi!`;
  }

  if (qurollar.includes(playerOne) && qurollar.includes(playerTwo)) {
    if (
      (playerOne === qurollar[0] && playerTwo === qurollar[1]) ||
      (playerOne === qurollar[1] && playerTwo === qurollar[2]) ||
      (playerOne === qurollar[2] && playerTwo === qurollar[0])
    ) {
      return `Insoniyat g'alaba qozondi!`;
    }
    return `Terminatrolar dunyoni egalladi!`;
  }
  return `Bu o'yin qoidasiga zid!`;
}

function playAgainstComputer(myWeapon) {
  let compWeapon = computerWeapon();
  return game(myWeapon, compWeapon);
}

let result = playAgainstComputer("qaychi");
console.log(result);
// console.log(game("tosh", "bomba"));
// console.log(game("tosh", "tosh"));
// console.log(game("qaychi", "tosh"));
// console.log(game("qaychi", "qog'oz"));
// console.log(game("qaychi", "qilich"));
