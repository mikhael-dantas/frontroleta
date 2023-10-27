class RaceTrackClass {

    pintarRaceTopo(arrTrigger) {

        let page = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tr:nth-child(1) >td")

        for (const item of page) {
            if (arrTrigger.includes(item.innerHTML)) {

                if (item.style.backgroundColor === "orange") {
                    item.style.background = "linear-gradient(145deg, #ffa500 50%, #c0c0c0 50%)";

                } else {
                    item.style.backgroundColor = "silver"
                }
            }
        }

    }

    pintarRaceMiddle(arrTrigger) {
        let page2 = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tr:nth-child(2) >td")

        for (const item of page2) {
            if (arrTrigger.includes(item.innerHTML)) {


                if (item.style.backgroundColor === "orange") {
                    item.style.background = "linear-gradient(145deg, #ffa500 50%, #c0c0c0 50%)";

                } else {
                    item.style.backgroundColor = "silver"
                }
            }
        }

        let page223 = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tr:nth-child(3) >td")

        for (const item of page223) {
            if (arrTrigger.includes(item.innerHTML)) {


                if (item.style.backgroundColor === "orange") {
                    item.style.background = "linear-gradient(145deg, #ffa500 50%, #c0c0c0 50%)";

                } else {
                    item.style.backgroundColor = "silver"
                }
            }
        }


    }

    pintarRaceBottom(arrTrigger) {
        let page3 = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tr:nth-child(4) >td")


        for (const item of page3) {
            if (arrTrigger.includes(item.innerHTML)) {

                if (item.style.backgroundColor === "orange") {
                    item.style.background = "linear-gradient(145deg, #ffa500 50%, #c0c0c0 50%)";

                } else {
                    item.style.backgroundColor = "silver"
                }
            }
        }
    }

    pintarNumerosSuperior(gat) {

        let page = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tr:nth-child(1) >td")

        for (const item of page) {

            if (gat === "21") {
                if ([16, 7].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "2") {
                if ([22, 5].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

            if (gat === "5") {
                if ([5, 22].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "7") {
                if ([22, 33].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

            if (gat === "1") {
                if ([33].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "0") {
                if ([33].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "13") {
                if ([9].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "32") {
                if ([33].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "29") {
                if ([7].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "9") {
                if ([7].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "4") {
                if ([24].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "6") {
                if ([9, 7].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "15") {
                if ([9, 3].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "16") {
                if ([16].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "20") {
                if ([20].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "24") {
                if ([24].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "26") {
                if ([33].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "28") {
                if ([28].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "36") {
                if ([1].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

        }

    }

    pintarNumerosMiddle(gat) {

        let page2 = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tr:nth-child(2) >td")

        for (const item of page2) {

            if (gat === "1") {
                if ([26].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "0") {
                if ([26].includes(item.innerHTML === "" ? null : Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

            if (gat === "32") {
                if ([26].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

            if (gat === "23") {
                if ([23].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "26") {
                if ([26].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

        }


    }

    pintarNumerosBottom(gat) {

        let page3 = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tr:nth-child(4) >td")

        for (const item of page3) {

            if (gat === "21") {
                if ([21].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "2") {
                if ([2].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

            if (gat === "5") {
                if ([2].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "7") {
                if ([2].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }

            if (gat === "1") {
                if ([25].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "0") {
                if ([2].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "13") {
                if ([13, 19].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "32") {
                if ([25].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "29") {
                if ([27, 19].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "9") {
                if ([19, 27].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "11") {
                if ([0, 8, 2].includes(item.innerHTML === "" ? null : Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "4") {
                if ([4].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "6") {
                if ([6].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "15") {
                if ([19].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "16") {
                if ([21].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "20") {
                if ([17].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "23") {
                if ([25].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "24") {
                if ([19].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "26") {
                if ([2].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "28") {
                if ([27].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
            if (gat === "36") {
                if ([36].includes(Number(item.innerHTML))) {
                    item.style.backgroundColor = "orange"
                }
            }
        }
    }

    resetarRace() {

        let page = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tbody > tr:nth-child(1) >td")

        for (const [index, item] of page.entries()) {
            if (index % 2 === 0) {
                item.style.backgroundColor = "red"
                item.style.background = "red"
            } else {
                item.style.backgroundColor = "black"
                item.style.background = "black"
            }
        }

        let page2 = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tbody > tr:nth-child(2) >td")

        for (const item of page2) {

            item.style.backgroundColor = "black"
            item.style.background = "black"
        }
        page2[1].style.backgroundColor = "green"
        page2[1].style.background = "green"

        let page3 = window.document.querySelectorAll("#root >div > section > section > main>div:nth-child(2) > div >div:nth-child(1) > div > div:nth-child(2)> div:nth-child(3) > div > table > tbody > tr:nth-child(4) >td")

        for (const [index, item] of page3.entries()) {

            if (index % 2 === 0) {
                item.style.backgroundColor = "black"
                item.style.background = "black"
            } else {
                item.style.backgroundColor = "red"
                item.style.background = "red"
            }
            if (item.innerHTML === "0") {
                item.style.backgroundColor = "green"
                item.style.background = "green"
            }
        }
    }
}
export default RaceTrackClass