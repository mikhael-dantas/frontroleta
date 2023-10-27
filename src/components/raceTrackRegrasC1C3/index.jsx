import { Col } from "antd";

function RaceTrackRegras() {

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
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
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
    );
}



export default RaceTrackRegras;