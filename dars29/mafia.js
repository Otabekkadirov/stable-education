// Mafiya
// 1. Nechta o'yinchilar borligi aniqlanadi.
// 2. Sudya tanlanadi. (random orqali)
// 3. Agar o'yinchilar soni 10 tadan kam bo'lsa, 1 ta mafia bo'ladi. (random orqali)
// 4. Agar o'yinchilar soni 10 dan ko'p bo'lsa, 2 ta mafiya bo'ladi. (random orqali)
// 5. Doktor aniqlanadi. (random orqali)

function mafiaGame(players) {
  const PLAYERS = makePlayers(players);
  let randomIndex = Math.floor(Math.random() * players);
  if (PLAYERS.length < 10) {
    PLAYERS[randomIndex] = "Jury";
    randomIndex = Math.floor(Math.random() * players);
    while (PLAYERS[randomIndex] === "Jury") {
      randomIndex = Math.floor(Math.random() * players);
    }
    PLAYERS[randomIndex] = "Mafia";
    randomIndex = Math.floor(Math.random() * players);
    while (
      PLAYERS[randomIndex] === "Jury" ||
      PLAYERS[randomIndex] === "Mafia"
    ) {
      randomIndex = Math.floor(Math.random() * players);
    }
    PLAYERS[randomIndex] = "Doctor";
  } else {
    PLAYERS[randomIndex] = "Jury";
    randomIndex = Math.floor(Math.random() * players);
    while (PLAYERS[randomIndex] === "Jury") {
      randomIndex = Math.floor(Math.random() * players);
    }
    PLAYERS[randomIndex] = "Mafia";
    randomIndex = Math.floor(Math.random() * players);
    while (
      PLAYERS[randomIndex] === "Jury" ||
      PLAYERS[randomIndex] === "Mafia"
    ) {
      randomIndex = Math.floor(Math.random() * players);
    }
    PLAYERS[randomIndex] = "Mafia";
    randomIndex = Math.floor(Math.random() * players);
    while (
      PLAYERS[randomIndex] === "Jury" ||
      PLAYERS[randomIndex] === "Mafia"
    ) {
      randomIndex = Math.floor(Math.random() * players);
    }
    PLAYERS[randomIndex] = "Doctor";
  }

  for (let i = 0; i < PLAYERS.length; i++) {
    if (
      PLAYERS[i] !== "Jury" &&
      PLAYERS[i] !== "Mafia" &&
      PLAYERS[i] !== "Doctor"
    ) {
      PLAYERS[i] = "Aholi";
    }
  }

  console.table(PLAYERS);
  return PLAYERS;
}
function makePlayers(playersCount) {
  const PLAYERS = [];
  for (let i = 1; i <= playersCount; i++) {
    PLAYERS.push(i);
  }
  return PLAYERS;
}

mafiaGame(14);
