import { Avatar, Badge, Col, Row, Space } from "antd";
import {
    UserOutlined,
    LoginOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function RaceTrackRegrasC1C2C3() {

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

    return (
        <>
            <Row>
                <Col span={16} style={{ display: "flex", justifyContent: "center" }}>
                    <table style={{ textAlign: "center" }}>
                        <tbody>
                            <tr>
                                <td rowspan="4" style={styleTabelaGreen}>
                                    0
                                </td>
                            </tr>
                            <tr>
                                <td style={styleTabelaRed}>3</td>
                                <td style={styleTabelaBlack}>6</td>
                                <td style={styleTabelaRed}>9</td>
                                <td style={styleTabelaRed}>12</td>
                                <td style={styleTabelaBlack}>15</td>
                                <td style={styleTabelaRed}>18</td>
                                <td style={styleTabelaRed}>21</td>
                                <td style={styleTabelaBlack}>24</td>
                                <td style={styleTabelaRed}>27</td>
                                <td style={styleTabelaRed}>30</td>
                                <td style={styleTabelaBlack}>33</td>
                                <td style={styleTabelaRed}>36</td>
                            </tr>
                            <tr>
                                <td style={styleTabelaBlack}>2</td>
                                <td style={styleTabelaRed}>5</td>
                                <td style={styleTabelaBlack}>8</td>
                                <td style={styleTabelaBlack}>11</td>
                                <td style={styleTabelaRed}>14</td>
                                <td style={styleTabelaBlack}>17</td>
                                <td style={styleTabelaBlack}>20</td>
                                <td style={styleTabelaRed}>23</td>
                                <td style={styleTabelaBlack}>26</td>
                                <td style={styleTabelaBlack}>29</td>
                                <td style={styleTabelaRed}>32</td>
                                <td style={styleTabelaBlack}>35</td>
                            </tr>
                            <tr>
                                <td style={styleTabelaRed}>1</td>
                                <td style={styleTabelaBlack}>4</td>
                                <td style={styleTabelaRed}>7</td>
                                <td style={styleTabelaBlack}>10</td>
                                <td style={styleTabelaBlack}>13</td>
                                <td style={styleTabelaRed}>16</td>
                                <td style={styleTabelaRed}>19</td>
                                <td style={styleTabelaBlack}>22</td>
                                <td style={styleTabelaRed}>25</td>
                                <td style={styleTabelaBlack}>28</td>
                                <td style={styleTabelaBlack}>31</td>
                                <td style={styleTabelaRed}>34</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

                <Col span={7} style={{ display: "flex", alignItems: "center", justifyContent: "start", marginLeft: 20 }}>
                    <Space size={24} direction="vertical">
                        <Badge count={<CancelIcon style={{ color: '#f5222d' }}></CancelIcon>}>
                            <Avatar shape="square" >1ª</Avatar>
                        </Badge>
                        <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>}>
                            <Avatar shape="square" >2ª</Avatar>
                        </Badge>
                        <Badge count={1}>
                            <Avatar shape="square" >3ª</Avatar>
                        </Badge>
                    </Space>
                </Col>
            </Row>
        </>
    );
}

export default RaceTrackRegrasC1C2C3;