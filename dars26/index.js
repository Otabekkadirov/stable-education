// Loops (Takroriy amallar)
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// 3 xil loop mavjud;
// 1. for loops
// 2. while loops
// 3. do ... while loops

// for loop
// for (let son = 100; son >= 10; son = son - 10) {
//   if (son === 50) {
//     console.log("Siz o'rtadasiz");
//     continue;
//   }
//   console.log(son);
// }

// let friends = [
//   "Amir",
//   "Nozim",
//   "Shaxzod",
//   "Islom",
//   "Mirfayz",
//   "Mirzohid",
//   "Ahmad",
//   "Jamshid",
//   "Asliddin",
//   "Jasur",
//   "Javohir",
//   "Aziz",
// ];
// console.log(friends.length);
// for (let index = friends.length - 1; index >= 0; index--) {
//   console.log(friends[index]);
// }

// while loop
// let friends = [
//   "Amir",
//   "Nozim",
//   "Shaxzod",
//   "Islom",
//   "Mirfayz",
//   "Mirzohid",
//   "Ahmad",
//   "Jamshid",
//   "Asliddin",
//   "Jasur",
//   "Javohir",
//   "Aziz",
// ];
// let index = friends.length - 1;

// while (index >= 0) {
//   console.log(friends[index]);
//   index--;
// }

// do ... while loops

// let time = 8;
// do {
//   console.log("Good morning!");
//   time++;
// } while (time < 12);

// 1 dan 100 gacha bo'lgan sonlar yig'indisini console da chiqaring.

// function sumAll(start, end) {
//   let natija = 0;
//   for (let son = start; son <= end; son++) {
//     natija = natija + son;
//   }
//   return natija;
// }

// console.log(sumAll(1, 4));

// Vazifa:
// 1 dan 100 gacha bo'lgan sonlarni console da chiqaring.
// Agar sonimiz 10/20/30/40/50/60/70/80/90/100 bo'lsa shu sonlar chiqmasinda,
// o'rniga '##' chiqsin.

// function logNumbersAndHashtags() {
//   for (let number = 1; number <= 1000; number += 1) {
//     if (number % 10 === 0) {
//       console.log("###");
//       continue;
//     }
//     console.log(number);
//   }
// }

// logNumbersAndHashtags();

//
//
//
// logNumber(son) degan funksiya yarating.
// funksiya logNumber(son) oladi va o'sha sonning har bir sonini console ga chiqarsin.
// Masalan:
// logNumber(255) => 2, 5, 5
// logNumber(12345) => 1, 2, 3, 4, 5
// logNumber(3000) => 3, 0, 0, 0
// function logNumber(son) {
//   let number = [];
//   while (son) {
//     number.push(son % 10);
//     son = Math.floor(son / 10);
//   }
//   for (let index = number.length - 1; index >= 0; index--) {
//     console.log(number[index]);
//   }
// }

// logNumber(235);
// logNumber(1234567890);
// logNumber(5432);

// juftToq(son) degan funksiya yarating.
// juftToq(son) son ning juft yoki toq ekanligini console da aytsin.
// Masalan:
// juftToq(2) => 'juft'
// juftToq(5) => 'toq'
// juftToq(10) => 'juft'
// juftToq(87) => 'toq'
// function juftToq(son) {
//   son % 2 === 0 ? console.log("Juft!") : console.log("Toq!");
// }

// const juftToq = (son) =>
//   son % 2 === 0 ? console.log("Juft!") : console.log("Toq!");

// juftToq(190);

// party() degan funksiya yarating.
// party() 1 dan 50 gacha sonlarni console da chiqarsin.
// agar son 3 ga bo'linsa, *** chiqsin.
// agar son 5 ga bo'linsa, ### chiqsin.
// agar son ham 3 ga ham 5 ga bo'linsa, *#*#*#* chiqsin.
//
// function party(son) {
//   if (son % 3 === 0 && son % 5 === 0) {
//     console.log("*#*#*#*");
//   } else if (son % 5 === 0) {
//     console.log("###");
//   } else if (son % 3 === 0) {
//     console.log("***");
//   } else {
//     console.log(son);
//   }
// }

// party(11);
//
//
//
//
//

// canWeDivide(a, b) degan funksiya yarating.
// canWeDivide(a, b) a b ga bo'linsa 'true' desin, bo'linmasa 'false' desin.
// canWeDivide(10, 2) => 'true'
// canWeDivide(10, 3) => 'false'
// canWeDivide(15, 3) => 'true'
// canWeDivide(45, 15) => 'true'
// canWeDivide(45, 0) => 'false'

// function canWeDivide(x, z) {
//   if (x % z === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// canWeDivide(36, 3);
//
//
//
//
//
//

// yildanAsr(yil) funksoya.
// yildanAsr(yil) => o'sha yil nechinchi asrda
// ekanligini consoleda chiqarsin.

// yildanAsr(1206) => 13
// yildanAsr(374) => 4
// yildanAsr(1475) => 15
// yildanAsr(1810) => 19
// yildanAsr(1900) => 19
// yildanAsr(1901) => 20
// yildanAsr(2000) => 20
// yildanAsr(2001) => 21
//
// function yildanAsr(yil) {
//   if (yil % 100 === 0) {
//     console.log(`Siz ${Math.floor(yil / 100)}-yilda tug'ilgansiz.`);
//   } else {
//     console.log(`Siz ${Math.floor(yil / 100) + 1}-yilda tug'ilgansiz.`);
//   }
// }

// yildanAsr(2001);
// yildanAsr(2000);
// yildanAsr(320);
// yildanAsr(300);

// meningAsrim(yil) => 'Siz n-chi asrda tug'ilgansiz'
// meningAsrim(1309) => 'Siz 14-asrdd tug'ilgansiz'
//
//
//
//
//
//
//
//
//
//

// reverseNumber() degan funksiya yarating.
// funksiya reverseNumber(number) o'sha sonni teskariga o'girib bersin.
// Masalan:
// reverseNumber(12345) => 54321
// reverseNumber(10022) => 22001
// reverseNumber(35) => 53
//
//
//
//
//
//
//
// toBinary(number) funksiya yarating.
// toBinary(number) number ni binar kodga aylantirib bersin.
// toBinary(15) => 1111
// toBinary(2) => 0010
// toBinary(1) => 0001
// toBinary(7) => 0111
// toBinary(72) => 10010000
