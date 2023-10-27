import { Col, Image, Row } from "antd";
import loadingGif from "./../../assets/img/95728-loading-19.gif"

function CurrentNumber(props) {

    return (
        <Row justify={"center"}>
            <Col span={24} style={{ textAlign: "center", marginBottom: 10 }}><span style={{ fontSize: 26, color: "black" }}>{props.trigger === "aguardando..." ? "Aguarde..." : "Nº da roleta"}</span></Col>
            <Col span={24} style={{ backgroundColor: props.trigger === "aguardando..." ? "#FFFFFF" : "#fff", textAlign: "center", color: "black", borderRadius: 10, paddingTop: 20, paddingBottom: 20 }}>
                <span style={{ fontSize: 110 }}>{props.trigger === "aguardando..." ? (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Image src={loadingGif} preview={false} width={100} ></Image></div>) : props.trigger === undefined ? "?" : props.trigger}</span>
            </Col>
        </Row >
    );
}

export default CurrentNumber;