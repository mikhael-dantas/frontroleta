let valueRace = document.querySelectorAll("#root > div > section > section > main > div:nth-child(2) > div > div > div:nth-child(2) > div > table > tr:nth-child(2)")

const raceBackgroundTop = [
    { number: 3, value: valueRace[0].childNodes[0] },
    { number: 6, value: valueRace[0].childNodes[1] },
    { number: 9, value: valueRace[0].childNodes[2] },
    { number: 12, value: valueRace[0].childNodes[3] },
    { number: 15, value: valueRace[0].childNodes[4] },
    { number: 18, value: valueRace[0].childNodes[5] },
    { number: 21, value: valueRace[0].childNodes[6] },
    { number: 24, value: valueRace[0].childNodes[7] },
    { number: 27, value: valueRace[0].childNodes[8] },
    { number: 30, value: valueRace[0].childNodes[9] },
    { number: 33, value: valueRace[0].childNodes[10] },
    { number: 36, value: valueRace[0].childNodes[11] },
];
module.exports = raceBackgroundTop;