import { Avatar, Badge, Card, Col, Row, Space, Tabs } from "antd";
import { useEffect, useState } from "react";
import { socket } from "./../Roletas/socket";
import HistoryTriggersRace from "../../../../components/historyTriggersRace";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import RaceTrackRegras from "../../../../components/raceTrackRegrasC1C3";
import RaceTrackRegrasC2C3 from "../../../../components/raceTrackRegrasC2C3";
import RaceTrackRegrasC1C2C3 from "../../../../components/raceTrackRegrasC1C2C3";
import {
    UserOutlined,
    LoginOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";

function RaceTrack() {

    const [oitoUltimos, setOitoUltimos] = useState();
    const [allTrigger, setAllTrigger] = useState();
    const linhaVerificadas = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34,];
    const linhasC2C3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
    const linhaTop = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
    const linhaMiddle = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
    const linhaBottom = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
    const [aba, setAba] = useState()

    const onChange = (key) => {
        setAba(key)
    };
    const items = [
        { key: '1', label: 'Regra C1 e C3', children: <RaceTrackRegras></RaceTrackRegras> },
        { key: '2', label: 'Regra C2 e C3', children: <RaceTrackRegrasC2C3></RaceTrackRegrasC2C3> },
        { key: '3', label: 'Regra C1, C2 e C3', children: <RaceTrackRegrasC1C2C3></RaceTrackRegrasC1C2C3> },
    ];

    const verificarComboC1C3 = async (e) => {

        let tabela = document.querySelectorAll(
            "#rc-tabs-0-panel-1 > div > table > tr:nth-child(2)"
        );

        if (tabela.length !== 0) {
            if (
                linhaVerificadas.includes(Number(e[0])) //&& linhaVerificadas.includes(Number(e[1])) //&&
                //   linhaVerificadas.includes(Number(e[2]) &&
                //   linhaVerificadas.includes(Number(e[3]) &&
                //   linhaVerificadas.includes(Number(e[4]) &&
                //   linhaVerificadas.includes(Number(e[5])
            ) {
                let valueRace1 = document.querySelectorAll("#rc-tabs-0-panel-1 > div > table > tr:nth-child(2)");
                let valueRace2 = document.querySelectorAll("#rc-tabs-0-panel-1 > div > table > tr:nth-child(4)");
                let arrayNodes = []

                for (const i of valueRace1[0].childNodes) {
                    arrayNodes.push(i)
                }

                for (const i of valueRace2[0].childNodes) {
                    arrayNodes.push(i)
                }

                for (const i of e) {
                    if (linhaVerificadas.includes(Number(i))) {
                        for (const j of arrayNodes) {
                            if (Number(j.innerHTML) === Number(i)) {
                                j.style.backgroundColor = "orange"
                            }
                        }
                    } else {
                        break;
                    }
                }
            } else {

                let valueRace1 = document.querySelectorAll("#rc-tabs-0-panel-1 > div > table > tr:nth-child(2)");

                valueRace1[0].childNodes[0].style.backgroundColor = "red";
                valueRace1[0].childNodes[1].style.backgroundColor = "black";
                valueRace1[0].childNodes[2].style.backgroundColor = "red";
                valueRace1[0].childNodes[3].style.backgroundColor = "red";
                valueRace1[0].childNodes[4].style.backgroundColor = "black";
                valueRace1[0].childNodes[5].style.backgroundColor = "red";
                valueRace1[0].childNodes[6].style.backgroundColor = "red";
                valueRace1[0].childNodes[7].style.backgroundColor = "black";
                valueRace1[0].childNodes[8].style.backgroundColor = "red";
                valueRace1[0].childNodes[9].style.backgroundColor = "red";
                valueRace1[0].childNodes[10].style.backgroundColor = "black";
                valueRace1[0].childNodes[11].style.backgroundColor = "red";

                let valueRace2 = document.querySelectorAll("#rc-tabs-0-panel-1 > div > table > tr:nth-child(4)");

                valueRace2[0].childNodes[0].style.backgroundColor = "red";
                valueRace2[0].childNodes[1].style.backgroundColor = "black";
                valueRace2[0].childNodes[2].style.backgroundColor = "red";
                valueRace2[0].childNodes[3].style.backgroundColor = "black";
                valueRace2[0].childNodes[4].style.backgroundColor = "black";
                valueRace2[0].childNodes[5].style.backgroundColor = "red";
                valueRace2[0].childNodes[6].style.backgroundColor = "red";
                valueRace2[0].childNodes[7].style.backgroundColor = "black";
                valueRace2[0].childNodes[8].style.backgroundColor = "red";
                valueRace2[0].childNodes[9].style.backgroundColor = "black";
                valueRace2[0].childNodes[10].style.backgroundColor = "black";
                valueRace2[0].childNodes[11].style.backgroundColor = "red";
            }
        }
    };

    const verificarComboC2C3 = async (e) => {

        let tabela = document.querySelectorAll(
            "#rc-tabs-0-panel-2 > div > table > tr:nth-child(2)"
        );

        if (tabela.length !== 0) {
            if (Number(e[0]) === 0) {

                if (
                    linhasC2C3.includes(Number(e[1])) //&& linhaVerificadas.includes(Number(e[1])) //&&
                    //   linhaVerificadas.includes(Number(e[2]) &&
                    //   linhaVerificadas.includes(Number(e[3]) &&
                    //   linhaVerificadas.includes(Number(e[4]) &&
                    //   linhaVerificadas.includes(Number(e[5])
                ) {

                    alert("sinal para dar entrada")

                    let valueRace = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(2)");

                    valueRace[0].childNodes[0].style.backgroundColor = "red";
                    valueRace[0].childNodes[1].style.backgroundColor = "black";
                    valueRace[0].childNodes[2].style.backgroundColor = "red";
                    valueRace[0].childNodes[3].style.backgroundColor = "red";
                    valueRace[0].childNodes[4].style.backgroundColor = "black";
                    valueRace[0].childNodes[5].style.backgroundColor = "red";
                    valueRace[0].childNodes[6].style.backgroundColor = "red";
                    valueRace[0].childNodes[7].style.backgroundColor = "black";
                    valueRace[0].childNodes[8].style.backgroundColor = "red";
                    valueRace[0].childNodes[9].style.backgroundColor = "red";
                    valueRace[0].childNodes[10].style.backgroundColor = "black";
                    valueRace[0].childNodes[11].style.backgroundColor = "red";

                    let valueRace2 = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(3)");

                    valueRace2[0].childNodes[0].style.backgroundColor = "black";
                    valueRace2[0].childNodes[1].style.backgroundColor = "red";
                    valueRace2[0].childNodes[2].style.backgroundColor = "black";
                    valueRace2[0].childNodes[3].style.backgroundColor = "black";
                    valueRace2[0].childNodes[4].style.backgroundColor = "red";
                    valueRace2[0].childNodes[5].style.backgroundColor = "black";
                    valueRace2[0].childNodes[6].style.backgroundColor = "black";
                    valueRace2[0].childNodes[7].style.backgroundColor = "red";
                    valueRace2[0].childNodes[8].style.backgroundColor = "black";
                    valueRace2[0].childNodes[9].style.backgroundColor = "black";
                    valueRace2[0].childNodes[10].style.backgroundColor = "red";
                    valueRace2[0].childNodes[11].style.backgroundColor = "black";

                } else {
                    let valueRace = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(2)");

                    valueRace[0].childNodes[0].style.backgroundColor = "red";
                    valueRace[0].childNodes[1].style.backgroundColor = "black";
                    valueRace[0].childNodes[2].style.backgroundColor = "red";
                    valueRace[0].childNodes[3].style.backgroundColor = "red";
                    valueRace[0].childNodes[4].style.backgroundColor = "black";
                    valueRace[0].childNodes[5].style.backgroundColor = "red";
                    valueRace[0].childNodes[6].style.backgroundColor = "red";
                    valueRace[0].childNodes[7].style.backgroundColor = "black";
                    valueRace[0].childNodes[8].style.backgroundColor = "red";
                    valueRace[0].childNodes[9].style.backgroundColor = "red";
                    valueRace[0].childNodes[10].style.backgroundColor = "black";
                    valueRace[0].childNodes[11].style.backgroundColor = "red";

                    let valueRace2 = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(3)");

                    valueRace2[0].childNodes[0].style.backgroundColor = "black";
                    valueRace2[0].childNodes[1].style.backgroundColor = "red";
                    valueRace2[0].childNodes[2].style.backgroundColor = "black";
                    valueRace2[0].childNodes[3].style.backgroundColor = "black";
                    valueRace2[0].childNodes[4].style.backgroundColor = "red";
                    valueRace2[0].childNodes[5].style.backgroundColor = "black";
                    valueRace2[0].childNodes[6].style.backgroundColor = "black";
                    valueRace2[0].childNodes[7].style.backgroundColor = "red";
                    valueRace2[0].childNodes[8].style.backgroundColor = "black";
                    valueRace2[0].childNodes[9].style.backgroundColor = "black";
                    valueRace2[0].childNodes[10].style.backgroundColor = "red";
                    valueRace2[0].childNodes[11].style.backgroundColor = "black";
                }

            } else {

                if (
                    linhasC2C3.includes(Number(e[0])) //&& linhaVerificadas.includes(Number(e[1])) //&&
                    //   linhaVerificadas.includes(Number(e[2]) &&
                    //   linhaVerificadas.includes(Number(e[3]) &&
                    //   linhaVerificadas.includes(Number(e[4]) &&
                    //   linhaVerificadas.includes(Number(e[5])
                ) {

                    let valueRace = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(2)");
                    let valueRace2 = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(3)");

                    let arrayNodes = []


                    for (const i of valueRace[0].childNodes) {
                        arrayNodes.push(i)
                    }

                    for (const i of valueRace2[0].childNodes) {
                        arrayNodes.push(i)
                    }


                    for (const i of e) {

                        if (linhasC2C3.includes(Number(i))) {

                            for (const j of arrayNodes) {

                                if (Number(j.innerHTML) === Number(i)) {

                                    j.style.backgroundColor = "orange"

                                }

                            }

                        } else {
                            break;
                        }
                    }


                } else {
                    let valueRace = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(2)");

                    valueRace[0].childNodes[0].style.backgroundColor = "red";
                    valueRace[0].childNodes[1].style.backgroundColor = "black";
                    valueRace[0].childNodes[2].style.backgroundColor = "red";
                    valueRace[0].childNodes[3].style.backgroundColor = "red";
                    valueRace[0].childNodes[4].style.backgroundColor = "black";
                    valueRace[0].childNodes[5].style.backgroundColor = "red";
                    valueRace[0].childNodes[6].style.backgroundColor = "red";
                    valueRace[0].childNodes[7].style.backgroundColor = "black";
                    valueRace[0].childNodes[8].style.backgroundColor = "red";
                    valueRace[0].childNodes[9].style.backgroundColor = "red";
                    valueRace[0].childNodes[10].style.backgroundColor = "black";
                    valueRace[0].childNodes[11].style.backgroundColor = "red";

                    let valueRace2 = document.querySelectorAll("#rc-tabs-0-panel-2 > div > table > tr:nth-child(3)");

                    valueRace2[0].childNodes[0].style.backgroundColor = "black";
                    valueRace2[0].childNodes[1].style.backgroundColor = "red";
                    valueRace2[0].childNodes[2].style.backgroundColor = "black";
                    valueRace2[0].childNodes[3].style.backgroundColor = "black";
                    valueRace2[0].childNodes[4].style.backgroundColor = "red";
                    valueRace2[0].childNodes[5].style.backgroundColor = "black";
                    valueRace2[0].childNodes[6].style.backgroundColor = "black";
                    valueRace2[0].childNodes[7].style.backgroundColor = "red";
                    valueRace2[0].childNodes[8].style.backgroundColor = "black";
                    valueRace2[0].childNodes[9].style.backgroundColor = "black";
                    valueRace2[0].childNodes[10].style.backgroundColor = "red";
                    valueRace2[0].childNodes[11].style.backgroundColor = "black";
                }

            }
        }
    }

    const verificarComboC1C2C3 = async (e, all) => {

        let tabela = document.querySelectorAll("#rc-tabs-0-panel-3 > div > table > tr:nth-child(2)");

        let valueRace1 = document.querySelectorAll("#rc-tabs-0-panel-3 > div > table > tr:nth-child(2)");
        let valueRace2 = document.querySelectorAll("#rc-tabs-0-panel-3 > div > table > tr:nth-child(3)");
        let valueRace3 = document.querySelectorAll("#rc-tabs-0-panel-3 > div > table > tr:nth-child(4)");

        console.log(valueRace2)

        if (tabela.length !== 0) {

            if (linhaMiddle.includes(Number(e[0]))) {

                let arrayNodes = []

                for (const i of valueRace2[0].childNodes) {
                    arrayNodes.push(i)
                }

                if (linhaMiddle.includes(Number(all[0]))) {
                    for (const j of arrayNodes) {
                        if (Number(j.innerHTML) === Number(all[0])) {
                            j.style.backgroundColor = "orange"
                        }
                    }
                }

                if (linhaBottom.includes(Number(e[1]))) {

                    let pago = []


                    let arrayNodes = []

                    for (const i of valueRace3[0].childNodes) {
                        arrayNodes.push(i)
                    }

                    for (const i of valueRace2[0].childNodes) {
                        arrayNodes.push(i)
                    }

                    if (linhaMiddle.includes(Number(all[0]))) {
                        for (const j of arrayNodes) {
                            if (Number(j.innerHTML) === Number(all[0])) {
                                j.style.backgroundColor = "orange"
                            }
                        }
                    }

                    if (linhaBottom.includes(Number(all[1]))) {
                        for (const j of arrayNodes) {
                            if (Number(j.innerHTML) === Number(all[1])) {
                                j.style.backgroundColor = "orange"
                            }
                        }
                    }



                    for (let index = 0; index < all.length; index++) {

                        if (Number(all[index]) === Number(e[1])) {

                            if (linhaTop.includes(Number(all[index + 1]))) {
                                pago.push(true)
                            } else {
                                pago.push(false)
                            }
                        }
                    }

                    console.log(pago)
                }

                if (linhaTop.includes(Number(e[1]))) {

                    let pago = []


                    let arrayNodes = []

                    for (const i of valueRace1[0].childNodes) {
                        arrayNodes.push(i)
                    }

                    for (const i of valueRace2[0].childNodes) {
                        arrayNodes.push(i)
                    }

                    if (linhaMiddle.includes(Number(all[0]))) {
                        for (const j of arrayNodes) {
                            if (Number(j.innerHTML) === Number(all[0])) {
                                j.style.backgroundColor = "orange"
                            }
                        }
                    }

                    if (linhaTop.includes(Number(all[1]))) {
                        for (const j of arrayNodes) {
                            if (Number(j.innerHTML) === Number(all[1])) {
                                j.style.backgroundColor = "orange"
                            }
                        }
                    }


                    for (let index = 0; index < all.length; index++) {

                        if (Number(all[index]) === Number(e[1])) {

                            if (linhaBottom.includes(Number(all[index + 1]))) {
                                pago.push(true)
                            } else {
                                pago.push(false)
                            }
                        }
                    }

                    console.log(pago)
                }

                if (!linhaTop.includes(Number(e[1])) && !linhaBottom.includes(Number(e[1]))) {
                    let valueRace1 = document.querySelectorAll(
                        "#rc-tabs-0-panel-3 > div > table > tr:nth-child(2)"
                    );

                    valueRace1[0].childNodes[0].style.backgroundColor = "red";
                    valueRace1[0].childNodes[1].style.backgroundColor = "black";
                    valueRace1[0].childNodes[2].style.backgroundColor = "red";
                    valueRace1[0].childNodes[3].style.backgroundColor = "red";
                    valueRace1[0].childNodes[4].style.backgroundColor = "black";
                    valueRace1[0].childNodes[5].style.backgroundColor = "red";
                    valueRace1[0].childNodes[6].style.backgroundColor = "red";
                    valueRace1[0].childNodes[7].style.backgroundColor = "black";
                    valueRace1[0].childNodes[8].style.backgroundColor = "red";
                    valueRace1[0].childNodes[9].style.backgroundColor = "red";
                    valueRace1[0].childNodes[10].style.backgroundColor = "black";
                    valueRace1[0].childNodes[11].style.backgroundColor = "red";


                    let valueRace2 = document.querySelectorAll(
                        "#rc-tabs-0-panel-3 > div > table > tr:nth-child(3)"
                    );

                    valueRace2[0].childNodes[0].style.backgroundColor = "black";
                    valueRace2[0].childNodes[1].style.backgroundColor = "red";
                    valueRace2[0].childNodes[2].style.backgroundColor = "black";
                    valueRace2[0].childNodes[3].style.backgroundColor = "black";
                    valueRace2[0].childNodes[4].style.backgroundColor = "red";
                    valueRace2[0].childNodes[5].style.backgroundColor = "black";
                    valueRace2[0].childNodes[6].style.backgroundColor = "black";
                    valueRace2[0].childNodes[7].style.backgroundColor = "red";
                    valueRace2[0].childNodes[8].style.backgroundColor = "black";
                    valueRace2[0].childNodes[9].style.backgroundColor = "black";
                    valueRace2[0].childNodes[10].style.backgroundColor = "red";
                    valueRace2[0].childNodes[11].style.backgroundColor = "black";


                    let valueRace3 = document.querySelectorAll(
                        "#rc-tabs-0-panel-3 > div > table > tr:nth-child(4)"
                    );

                    valueRace3[0].childNodes[0].style.backgroundColor = "red";
                    valueRace3[0].childNodes[1].style.backgroundColor = "black";
                    valueRace3[0].childNodes[2].style.backgroundColor = "red";
                    valueRace3[0].childNodes[3].style.backgroundColor = "black";
                    valueRace3[0].childNodes[4].style.backgroundColor = "black";
                    valueRace3[0].childNodes[5].style.backgroundColor = "red";
                    valueRace3[0].childNodes[6].style.backgroundColor = "red";
                    valueRace3[0].childNodes[7].style.backgroundColor = "black";
                    valueRace3[0].childNodes[8].style.backgroundColor = "red";
                    valueRace3[0].childNodes[9].style.backgroundColor = "black";
                    valueRace3[0].childNodes[10].style.backgroundColor = "black";
                    valueRace3[0].childNodes[11].style.backgroundColor = "red";
                }


            } else {
                let valueRace1 = document.querySelectorAll(
                    "#rc-tabs-0-panel-3 > div > table > tr:nth-child(2)"
                );

                valueRace1[0].childNodes[0].style.backgroundColor = "red";
                valueRace1[0].childNodes[1].style.backgroundColor = "black";
                valueRace1[0].childNodes[2].style.backgroundColor = "red";
                valueRace1[0].childNodes[3].style.backgroundColor = "red";
                valueRace1[0].childNodes[4].style.backgroundColor = "black";
                valueRace1[0].childNodes[5].style.backgroundColor = "red";
                valueRace1[0].childNodes[6].style.backgroundColor = "red";
                valueRace1[0].childNodes[7].style.backgroundColor = "black";
                valueRace1[0].childNodes[8].style.backgroundColor = "red";
                valueRace1[0].childNodes[9].style.backgroundColor = "red";
                valueRace1[0].childNodes[10].style.backgroundColor = "black";
                valueRace1[0].childNodes[11].style.backgroundColor = "red";


                let valueRace2 = document.querySelectorAll(
                    "#rc-tabs-0-panel-3 > div > table > tr:nth-child(3)"
                );

                valueRace2[0].childNodes[0].style.backgroundColor = "black";
                valueRace2[0].childNodes[1].style.backgroundColor = "red";
                valueRace2[0].childNodes[2].style.backgroundColor = "black";
                valueRace2[0].childNodes[3].style.backgroundColor = "black";
                valueRace2[0].childNodes[4].style.backgroundColor = "red";
                valueRace2[0].childNodes[5].style.backgroundColor = "black";
                valueRace2[0].childNodes[6].style.backgroundColor = "black";
                valueRace2[0].childNodes[7].style.backgroundColor = "red";
                valueRace2[0].childNodes[8].style.backgroundColor = "black";
                valueRace2[0].childNodes[9].style.backgroundColor = "black";
                valueRace2[0].childNodes[10].style.backgroundColor = "red";
                valueRace2[0].childNodes[11].style.backgroundColor = "black";


                let valueRace3 = document.querySelectorAll(
                    "#rc-tabs-0-panel-3 > div > table > tr:nth-child(4)"
                );

                valueRace3[0].childNodes[0].style.backgroundColor = "red";
                valueRace3[0].childNodes[1].style.backgroundColor = "black";
                valueRace3[0].childNodes[2].style.backgroundColor = "red";
                valueRace3[0].childNodes[3].style.backgroundColor = "black";
                valueRace3[0].childNodes[4].style.backgroundColor = "black";
                valueRace3[0].childNodes[5].style.backgroundColor = "red";
                valueRace3[0].childNodes[6].style.backgroundColor = "red";
                valueRace3[0].childNodes[7].style.backgroundColor = "black";
                valueRace3[0].childNodes[8].style.backgroundColor = "red";
                valueRace3[0].childNodes[9].style.backgroundColor = "black";
                valueRace3[0].childNodes[10].style.backgroundColor = "black";
                valueRace3[0].childNodes[11].style.backgroundColor = "red";
            }
        }
    }

    const styleTabelaRed = {
        width: 70,
        height: 50,
        backgroundColor: "red",
        fontSize: 26,
        color: "white",
    };

    const styleTabelaBlack = {
        width: 70,
        height: 50,
        backgroundColor: "black",
        color: "white",
        fontSize: 26,
    };
    const styleTabelaGreen = {
        backgroundColor: "green",
        width: 70,
        color: "white",
        fontSize: 26,
    };

    useEffect(() => {
        async function onConnect(e) {
            let triggerSlice = e.alltrigger.slice(0, 12);

            setAllTrigger(e.alltrigger);
            setOitoUltimos(triggerSlice);

            await verificarComboC1C3(triggerSlice);

            await verificarComboC2C3(triggerSlice)

            await verificarComboC1C2C3(triggerSlice, e.alltrigger)
        }

        socket.on("new-trigger", onConnect);

        return () => {
            socket.off("new-trigger", onConnect);
        };
    }, [oitoUltimos, allTrigger]);

    return (
        <Card title="Regra dos 6">
            <Row justify={"center"} style={{ marginBottom: 20 }}>
                <Col span={24}>
                    <Row
                        style={{
                            backgroundColor: "#fff",
                            color: "#fff",
                            border: "solid 1px silver",
                            borderRadius: 10,
                        }}
                        justify={"space-evenly"}
                        align={"middle"}
                    >
                        <HistoryTriggersRace
                            allTrigger={allTrigger}
                            oitoTriggers={oitoUltimos}
                        ></HistoryTriggersRace>


                    </Row>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </Col>
            </Row>
        </Card>
    );
}

export default RaceTrack;
