// toBinary(number) funksiya yarating.
// toBinary(number) number ni binar kodga aylantirib bersin.
// toBinary(15) => 1111
// toBinary(2) => 0010
// toBinary(1) => 0001
// toBinary(7) => 0111
// toBinary(72) => 10010000

// function toBinary(number) {
//   let natija = "";
//   while (number > 0) {
//     natija = (number % 2) + natija;
//     number = Math.floor(number / 2);
//   }
//   console.log(natija);
// }
// toBinary(1);
// toBinary(2);
// toBinary(3);
// toBinary(4);
// toBinary(20);
// toBinary(70);
// toBinary(71);
// toBinary(255);

// reverseText(string) funksiya yarating
// reverseText(string) string ni teskariga o'girib bersin.
// reverseText('Adxam') => maxdA
// reverseText('Islom') => molsI
// reverseText('Mehrangiz') => zignarheM
// reverseText('Oybek') => kebyO

// function reverseText(string) {
//   let teskariText = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     teskariText = teskariText + string[i];
//   }
//   return teskariText;
// }

// console.log(reverseText("Oybek"));
// console.log(reverseText("O'zbekiston"));
// console.log(reverseText("Aziza"));
// console.log(reverseText("kiyik"));
// console.log(reverseText("arra"));

// unlilar(string) funksiya yarating.
// unlilar(string) string ichida nechta unli harf borligini aytsin.
// unlilar('Tom') => 1
// unlilar('Nozim') => 2
// unlilar('Stable Education') => 7
// unlilar('TTT') => 0

// funksiya so'z oladi
// so'zning har bir harfini unli ekanligini tekshiradi
// agar unli bo'lsa, birorta o'zgaruvchiga 1 qo'shiladi.
// agar unli bo'lmasa, keyingi harfda davom etsin.
// so'zda harflar tugasa, o'zgaruvchiga yig'ilgan son qaytariladi va funksiya yakunlanadi.
// function unlilar(text) {
//   if (typeof text !== "string") {
//     return "Iltimos, so'z yoki matn kiriting.";
//   }
//   text = text.toLowerCase();

//   const unliHarflar = ["a", "e", "i", "o", "u"];
//   let unlilarSoni = 0;

//   for (let harf = 0; harf < text.length; harf++) {
//     let ayniHarf = text[harf];

//     if (unliHarflar.includes(ayniHarf)) {
//       unlilarSoni++;
//     }
//   }

//   return unlilarSoni;
// }

// console.log(unlilar("Men nechun sevaman O'zbekistonni?"));
// console.log(unlilar("a'a'a'a'a"));
// console.log(unlilar("Amir"));
// console.log(unlilar("natija"));
// console.log(unlilar(1213132));

// function undoshlar(tekst) {
//   if (typeof tekst !== "string") {
//     return "Iltimos, so'z yoki matn kiriting.";
//   }
//   tekst = tekst.toLowerCase();
//   const undoshHarflar = [
//     `b`,
//     `d`,
//     `f`,
//     `g`,
//     `h`,
//     `j`,
//     `k`,
//     `l`,
//     `m`,
//     `n`,
//     `p`,
//     `q`,
//     `r`,
//     `s`,
//     `t`,
//     `v`,
//     `x`,
//     `y`,
//     `z`,
//     `g'`,
//     `sh`,
//     `ch`,
//     `ng`,
//   ];
//   let undoshlarSoni = 0;

//   for (let harf = 0; harf < tekst.length; harf++) {
//     let ayniHarf = tekst[harf];

//     if (ayniHarf === "s" && tekst[harf + 1] === "h") {
//       ayniHarf = `sh`;
//       harf += 2;
//     }
//     if (ayniHarf === "n" && tekst[harf + 1] === "g") {
//       ayniHarf = `ng`;
//       harf += 2;
//     }
//     if (undoshHarflar.includes(ayniHarf)) {
//       undoshlarSoni++;
//     }
//   }
//   return undoshlarSoni;
// }
// console.log(undoshlar("shahar"));
// console.log(undoshlar("tosh"));
// console.log(undoshlar("tong"));
// console.log(undoshlar("rang"));
// console.log(undoshlar("bodring"));
// console.log(undoshlar("g'alati"));

// console.log(undoshlar("Otabek"));
// console.log(undoshlar("Islom"));
// console.log(undoshlar("aaaa"));
// console.log(undoshlar("durang"));
// console.log(undoshlar("chorak"));
// console.log(undoshlar("g'oz"));
