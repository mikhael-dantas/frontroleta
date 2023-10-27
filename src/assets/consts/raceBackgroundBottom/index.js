let valueRace = document.querySelectorAll("#root > div > section > section > main > div:nth-child(2) > div > div > div:nth-child(2) > div > table > tr:nth-child(4)")

const raceBackgroundBottom = [
    { number: 1, value: valueRace[0].childNodes[0] },
    { number: 4, value: valueRace[0].childNodes[1] },
    { number: 7, value: valueRace[0].childNodes[2] },
    { number: 10, value: valueRace[0].childNodes[3] },
    { number: 13, value: valueRace[0].childNodes[4] },
    { number: 16, value: valueRace[0].childNodes[5] },
    { number: 19, value: valueRace[0].childNodes[6] },
    { number: 22, value: valueRace[0].childNodes[7] },
    { number: 25, value: valueRace[0].childNodes[8] },
    { number: 28, value: valueRace[0].childNodes[9] },
    { number: 31, value: valueRace[0].childNodes[10] },
    { number: 34, value: valueRace[0].childNodes[11] },
];
module.exports = raceBackgroundBottom;