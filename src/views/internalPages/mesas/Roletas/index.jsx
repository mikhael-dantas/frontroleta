import {
  Avatar,
  Card,
  Col,
  Row,
  Badge,
  Image,
  Steps,
  Divider,
  Collapse,
} from "antd";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import "./index.css";
import gatilhosRoulette from "../../../../assets/consts/triggers";
import CurrentNumber from "../../../../components/currentNumber";
import Trigger from "../../../../components/trigger";
import HistoryTriggers from "../../../../components/historyTriggers";
import PayHistoryTriggers from "../../../../components/payHistoryTriggers";
import RaceTrack from "../../../../components/raceTrack";
import nSuperiorArray from "../../../../assets/consts/nSuperior";
import nMiddleArray from "../../../../assets/consts/nMiddle";
import nBottomArray from "../../../../assets/consts/nBottom";
import RaceTrackClass from "../../../../classes/raceTrack";
import vizinhosZero from "./../../../../assets/consts/vizinhosZero";
import { DisconnectOutlined } from "@ant-design/icons";
import nomesRoletas from "./../../../../assets/consts/nomesRoletas";

function Roletas() {
  const [trigger, setTrigger] = useState();
  const [allTrigger, setAllTrigger] = useState();

  const [firstTrigger, setFirstTrigger] = useState([]);
  const [secondTrigger, setSecondTrigger] = useState([]);
  const [thirdTrigger, setThirdTrigger] = useState([]);
  const raceTrackClass = new RaceTrackClass();
  const [exibirPrimeiro, setExibirPrimeiro] = useState();
  const [exibirSegundo, setExibirSegundo] = useState();
  const [exibirTerceiro, setExibirTerceiro] = useState();
  const [numberZeros, setNumberZeros] = useState();
  const [numberVoisnsPagos, setNumberVoisnsPagos] = useState();
  const [vizinho, setVizinho] = useState();
  const [historyPay, setHistoryPay] = useState();
  const [oitoTriggers, setOitoTrigger] = useState();
  const [xxxextreme, setXxxextreme] = useState();

  const [nSuperior] = useState(nSuperiorArray);
  const [nMiddle] = useState(nMiddleArray);
  const [nBottom] = useState(nBottomArray);
  const [lastTrigger, setLastTrigger] = useState();
  const [lengthRoulette, setLengthRoulette] = useState();
  const [nomeRoleta, setNomeRoleta] = useState();
  const [desconectou, setDesconectou] = useState(true);
  const [voisns, setVoisns] = useState();

  const gerarAllTrigger = async (e) => {
    let arrTrigger = [e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]];

    raceTrackClass.pintarRaceTopo(arrTrigger);

    raceTrackClass.pintarRaceMiddle(arrTrigger);

    raceTrackClass.pintarRaceBottom(arrTrigger);
  };

  const pintarNumeros = async (gat) => {
    raceTrackClass.pintarNumerosSuperior(gat);

    raceTrackClass.pintarNumerosMiddle(gat);

    raceTrackClass.pintarNumerosBottom(gat);
  };

  const resetarRace = async (gat, all) => {
    raceTrackClass.resetarRace();
  };

  const gerarCssTopo = async (gat, all) => {
    if (gat !== "aguardando..." && gatilhosRoulette.includes(Number(gat))) {
      await resetarRace();

      await pintarNumeros(gat);

      await gerarAllTrigger(all);

      setLastTrigger(gat);
    }
  };

  useEffect(() => {
    async function onConnect(e) {
      console.log(e);

      setDesconectou(false);

      if (e.xxxextreme) {
        if (e.xxxextreme !== null) {
          setXxxextreme(e.xxxextreme);
        }
      }

      if (e.vizinhosPagos) {
        if (e.vizinhosPagos !== null) {
          setNumberZeros(e.vizinhosPagos);
          setVizinho(e.newtrigger);
        }
      }

      if (e.voisnsPagos) {
        if (e.voisnsPagos !== null) {
          setNumberVoisnsPagos(e.voisnsPagos);
          setVoisns(e.newtrigger);
        }
      }

      if (e.historyPayNumbers) {
        let triggerSlice = e.alltrigger.slice(0, 12);

        setOitoTrigger(triggerSlice);

        let history = [];

        for (const i of e.historyPayNumbers) {
          if (i.length !== 0) {
            history.push(i[0]);
          } else {
            history.push("X");
          }
        }

        setHistoryPay(history);
      }

      setNomeRoleta(e.nomeRoletta);
      setTrigger(e.newtrigger);
      setAllTrigger(e.alltrigger);
      gerarCssTopo(e.newtrigger, e.alltrigger);
    }

    async function onPayTrigger(e) {
      if (e !== null) {
        setLengthRoulette(e.length);

        if (e.length === 8) {
          setSecondTrigger([]);
          setThirdTrigger([]);
          setExibirPrimeiro(true);
          setExibirSegundo(false);
          setExibirTerceiro(false);
        }

        if (e.length === 16) {
          setThirdTrigger([]);
          setExibirPrimeiro(true);
          setExibirSegundo(true);
          setExibirTerceiro(false);
        }

        if (e.length === 24) {
          setExibirPrimeiro(true);
          setExibirSegundo(true);
          setExibirTerceiro(true);
        }

        for (const [index, item] of e.entries()) {
          if ([0, 1, 2, 3, 4, 5, 6, 7].includes(index)) {
            if (index === 0) {
              setFirstTrigger([]);
            }
            setFirstTrigger((prevState) => [...prevState, item.pago]);
          }

          if ([8, 9, 10, 11, 12, 13, 14, 15].includes(index)) {
            if (index === 8) {
              setSecondTrigger([]);
            }
            setSecondTrigger((prevState) => [...prevState, item.pago]);
          }

          if ([16, 17, 18, 19, 20, 21, 22, 23].includes(index)) {
            if (index === 16) {
              setThirdTrigger([]);
            }
            setThirdTrigger((prevState) => [...prevState, item.pago]);
          }
        }
      } else {
        // setFirstTrigger([])
        // setSecondTrigger([])
        // setThirdTrigger([])
        // setExibirPrimeiro(false)
        // setExibirSegundo(false)
        // setExibirTerceiro(false)
        // setLengthRoulette(undefined)
      }
    }

    async function teste() {
      setDesconectou(true);
    }

    socket.on("new-trigger", onConnect);
    socket.on("pay-trigger", onPayTrigger);
    socket.on("disconnect", teste);

    return () => {
      socket.off("new-trigger", onConnect);
      socket.off("pay-trigger", onPayTrigger);
      socket.off("disconnect", teste);
    };
  }, [
    trigger,
    firstTrigger,
    secondTrigger,
    thirdTrigger,
    exibirPrimeiro,
    exibirSegundo,
    exibirTerceiro,
    nomeRoleta,
    historyPay,
    lastTrigger,
    desconectou,
    voisns,
  ]);

  return (
    <>
      {desconectou === true && (
        <>
          <Card style={{ display: "flex", justifyContent: "center" }}>
            <h1>
              {" "}
              <DisconnectOutlined /> Aguardando conexão do servidor
            </h1>
          </Card>
        </>
      )}
      {desconectou === false && (
        <>
          <Row style={{ flexWrap: "nowrap" }}>
            <Col span={20} style={{ minWidth: 1070 }}>
              <Card
                title={nomeRoleta === undefined ? "Carregando..." : nomeRoleta}
              >
                <Row
                  justify={"space-between"}
                  style={{ marginBottom: 20, minHeight: 300 }}
                >
                  <Col
                    span={7}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      color: "#fff",
                      border: "solid 1px silver",
                      borderRadius: 10,
                    }}
                  >
                    <CurrentNumber trigger={trigger}></CurrentNumber>
                  </Col>
                  <Col
                    span={5}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      border: "solid 1px silver",
                      borderRadius: 10,
                    }}
                  >
                    <Trigger lastTrigger={lastTrigger}></Trigger>
                  </Col>

                  <Col
                    span={11}
                    style={{
                      display: "flex",
                      justifyContent:
                        lengthRoulette === undefined ? "center" : "start",
                      alignContent: "space-between",
                    }}
                  >
                    <Row
                      gutter={[16, 16]}
                      justify={"space-between"}
                      style={{
                        marginBottom: 2,
                        alignContent:
                          lengthRoulette === 16 ? "start" : "space-between",
                      }}
                    >
                      {exibirPrimeiro === true && (
                        <PayHistoryTriggers
                          trigger={firstTrigger}
                          lastTrigger={lastTrigger}
                        ></PayHistoryTriggers>
                      )}
                      {exibirSegundo === true && (
                        <PayHistoryTriggers
                          trigger={secondTrigger}
                          lastTrigger={lastTrigger}
                        ></PayHistoryTriggers>
                      )}
                      {exibirTerceiro === true && (
                        <PayHistoryTriggers
                          trigger={thirdTrigger}
                          lastTrigger={lastTrigger}
                        ></PayHistoryTriggers>
                      )}
                    </Row>
                    {lengthRoulette === undefined && (
                      <Row
                        justify={"center"}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#fff",
                          borderRadius: 10,
                        }}
                      >
                        <Col span={24} style={{ marginTop: 10 }}>
                          <span style={{ fontSize: 26 }}>
                            Nenhum gatilho foi encontrado
                          </span>
                        </Col>
                      </Row>
                    )}
                  </Col>
                </Row>

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
                  {allTrigger !== undefined && historyPay !== undefined ? (
                    <HistoryTriggers
                      allTrigger={allTrigger}
                      historyPay={historyPay}
                      oitoTriggers={oitoTriggers}
                    ></HistoryTriggers>
                  ) : null}
                </Row>
                <Row justify={"center"} style={{ margin: 20 }}>
                  <RaceTrack
                    nSuperior={nSuperior}
                    nMiddle={nMiddle}
                    nBottom={nBottom}
                  ></RaceTrack>
                </Row>
              </Card>
            </Col>
            <Col span={4}>
              <Collapse
                style={{ backgroundColor: "#fff" }}
                items={[
                  {
                    key: "1",
                    label: "Regra zero (vizinhos)",
                    children: (
                      <Row justify={"center"}>
                        <Col
                          span={24}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 20,
                          }}
                        >
                          <Col>
                            {vizinho === undefined && (
                              <Avatar
                                size={80}
                                style={{ backgroundColor: "#FFA500" }}
                              >
                                <span style={{ fontSize: 35 }}>?</span>
                              </Avatar>
                            )}
                            {vizinho !== undefined && (
                              <Avatar
                                size={80}
                                style={{ backgroundColor: "#FFA500" }}
                              >
                                <span style={{ fontSize: 35 }}>{vizinho}</span>
                              </Avatar>
                            )}
                          </Col>
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[0] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[0]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[1] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[1]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[2] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[2]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[3] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[3]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[4] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[4]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[5] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[5]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[6] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[6]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[7] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[7]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[8] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[8]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingBottom: 31,
                          }}
                        >
                          {numberZeros === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberZeros !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberZeros[9] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberZeros[9]}ª
                            </Avatar>
                          )}
                        </Col>
                      </Row>
                    ),
                  },
                ]}
              />

              <Collapse
                style={{ marginTop: 20, backgroundColor: "#fff" }}
                items={[
                  {
                    key: "1",
                    label: "Números Voisns",
                    children: (
                      <Row justify={"center"}>
                        <Col
                          span={24}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 20,
                          }}
                        >
                          <Col>
                            {voisns === undefined && (
                              <Avatar
                                size={80}
                                style={{ backgroundColor: "#FFA500" }}
                              >
                                <span style={{ fontSize: 35 }}>?</span>
                              </Avatar>
                            )}
                            {voisns !== undefined && (
                              <Avatar
                                size={80}
                                style={{ backgroundColor: "#FFA500" }}
                              >
                                <span style={{ fontSize: 35 }}>{voisns}</span>
                              </Avatar>
                            )}
                          </Col>
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[0] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[0]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[1] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[1]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[2] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[2]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[3] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[3]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[4] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[4]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[5] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[5]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[6] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[6]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[7] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[7]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[8] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[8]}ª
                            </Avatar>
                          )}
                        </Col>
                        <Col
                          span={24}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingBottom: 31,
                          }}
                        >
                          {numberVoisnsPagos === undefined && (
                            <Avatar style={{ margin: 5 }} size={40}>
                              ?
                            </Avatar>
                          )}
                          {numberVoisnsPagos !== undefined && (
                            <Avatar
                              style={{
                                margin: 5,
                                backgroundColor:
                                  numberVoisnsPagos[9] <= 3 ? "green" : "red",
                              }}
                              size={40}
                            >
                              {numberVoisnsPagos[9]}ª
                            </Avatar>
                          )}
                        </Col>
                      </Row>
                    ),
                  },
                ]}
              />

              {nomesRoletas.light.includes(nomeRoleta) && (
                <Collapse
                  style={{ marginTop: 20, backgroundColor: "#fff" }}
                  items={[
                    {
                      key: "1",
                      label: "XXXtreme Lightning Roulette",
                      children: (
                        <Row justify={"center"}>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: 20,
                            }}
                          >
                            <Col>
                              {voisns === undefined && (
                                <Avatar
                                  size={80}
                                  style={{ backgroundColor: "#FFA500" }}
                                >
                                  <span style={{ fontSize: 35 }}>?</span>
                                </Avatar>
                              )}
                              {voisns !== undefined && (
                                <Avatar
                                  size={80}
                                  style={{ backgroundColor: "#FFA500" }}
                                >
                                  <span style={{ fontSize: 35 }}>
                                    {trigger}
                                  </span>
                                </Avatar>
                              )}
                            </Col>
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[0] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[0]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[1] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[1]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[2] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[2]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[3] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[3]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[4] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[4]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[5] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[5]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[6] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[6]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[7] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[7]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[8] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[8]}ª
                              </Avatar>
                            )}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              paddingBottom: 31,
                            }}
                          >
                            {xxxextreme === undefined && (
                              <Avatar style={{ margin: 5 }} size={40}>
                                ?
                              </Avatar>
                            )}
                            {xxxextreme !== undefined && (
                              <Avatar
                                style={{
                                  margin: 5,
                                  backgroundColor:
                                    xxxextreme[9] <= 3 ? "green" : "red",
                                }}
                                size={40}
                              >
                                {xxxextreme[9]}ª
                              </Avatar>
                            )}
                          </Col>
                        </Row>
                      ),
                    },
                  ]}
                />
              )}
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default Roletas;
