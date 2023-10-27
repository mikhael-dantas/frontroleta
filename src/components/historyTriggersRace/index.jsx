import { Col, Steps, Badge } from "antd";
import { useState } from "react";
import gatilhosRoulette from "../../assets/consts/triggers";


function HistoryTriggersRace(props) {

    return (
        <Col span={22} style={{ padding: 10 }}>
            <Steps
                current={1}
                items={[
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[0] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[1] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[2] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[3] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[4] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[5] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[6] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[7] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[8] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[9] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[10] : "?"}</>),
                        status: 'finish',
                    },
                    {
                        title: (<>{props.allTrigger !== undefined ? props.allTrigger[11] : "?"}</>),
                        status: 'finish',
                    },

                ]}
            />
        </Col >
    );
}

export default HistoryTriggersRace;