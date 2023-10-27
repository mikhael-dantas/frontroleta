import { Card, Col, Image, Row } from "antd";
import robot from "./../../../assets/img/robot.gif"
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <Card>
            <Row>
                <Col span={12}>
                    <Image src={robot} preview={false}></Image>
                </Col>
                <Col span={12}>
                    <h1 style={imageStyle}>ANALISADOR DINHUTECH</h1>
                    <TypeAnimation
                        sequence={[
                            "Sistema feito para fazer raspagem das informações de roletas e trabalhar isso em uma página separada", // Types 'One'
                            5000, // Waits 1s
                            "Qualquer dúvida sobre o sistema contate o desenvolvedor",
                            5000,
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "2em", marginRight: 30 }}
                    />
                </Col>
            </Row>
        </Card>
    );
}

export default Home;

const imageStyle = {
    //fontFamily: "Segoe UI Emoji",
    fontSize: "50px",
    textAlign: "left",
    color: "#002140",
};