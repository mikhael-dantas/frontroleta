import { Col, Steps, Badge } from "antd";
import { useState } from "react";
import gatilhosRoulette from "../../assets/consts/triggers";


function HistoryTriggers(props) {

    return (
        <Col span={22} style={{ padding: 10 }}>
            <Steps
                current={1}
                items={[
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[0])) && (
                                    <Badge count={props.historyPay[0]} offset={[props.allTrigger[0] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[0] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[0] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[0])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[0] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[1])) && (
                                    <Badge count={props.historyPay[1]} offset={[props.allTrigger[1] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[1] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[1] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[1])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[1] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[2])) && (
                                    <Badge count={props.historyPay[2]} offset={[props.allTrigger[2] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[2] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[2] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[2])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[2] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[3])) && (
                                    <Badge count={props.historyPay[3]} offset={[props.allTrigger[3] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[3] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[3] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[3])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[3] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[4])) && (
                                    <Badge count={props.historyPay[4]} offset={[props.allTrigger[4] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[4] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[4] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[4])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[4] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[5])) && (
                                    <Badge count={props.historyPay[5]} offset={[props.allTrigger[5] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[5] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[5] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[5])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[5] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[6])) && (
                                    <Badge count={props.historyPay[6]} offset={[props.allTrigger[6] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[6] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[6] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[6])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[6] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[7])) && (
                                    <Badge count={props.historyPay[7]} offset={[props.allTrigger[7] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[7] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[7] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[7])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[7] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[8])) && (
                                    <Badge count={props.historyPay[8]} offset={[props.allTrigger[8] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[8] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[8] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[8])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[8] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[9])) && (
                                    <Badge count={props.historyPay[9]} offset={[props.allTrigger[9] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[9] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[9] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[9])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[9] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[10])) && (
                                    <Badge count={props.historyPay[10]} offset={[props.allTrigger[10] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[10] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[10] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[10])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[10] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },
                    {
                        title: (
                            <>
                                {gatilhosRoulette.includes(Number(props.oitoTriggers[11])) && (
                                    <Badge count={props.historyPay[11]} offset={[props.allTrigger[11] >= 10 ? -25 : -18, -2]} size="small" style={{ backgroundColor: props.historyPay[11] !== "X" ? '#52c41a' : '#FF4D4F' }}>
                                        {props.allTrigger !== undefined ? props.allTrigger[11] : "?"}
                                    </Badge>
                                )}
                                {!gatilhosRoulette.includes(Number(props.oitoTriggers[11])) && (
                                    <>{props.allTrigger !== undefined ? props.allTrigger[11] : "?"}</>
                                )}

                            </>
                        ),
                        status: 'finish',
                    },

                ]}
            />
        </Col>

    );
}

export default HistoryTriggers;