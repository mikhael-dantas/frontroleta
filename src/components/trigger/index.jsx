import { Col, Row } from "antd";

function Trigger(props) {
    return (
        <Row justify={"center"} style={{ textAlign: "center" }}>
            <Col span={24} style={{ marginTop: 10 }}>
                <span style={{ fontSize: 26 }}>Gatilho</span>
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
                <span style={{ fontSize: 90 }}>{props.lastTrigger !== undefined ? props.lastTrigger : "?"}</span>
            </Col>
        </Row>
    );
}

export default Trigger;