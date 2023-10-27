import { Col } from "antd";

function RaceTrack(props) {
    return (

        <Col>
            <table>
                <tbody>
                    <tr>
                        {props.nSuperior.map((item, index) => {
                            let css = {}
                            css.color = "white"
                            css.paddingLeft = 12
                            css.paddingRight = 12
                            css.fontSize = 30
                            if (item === 5) {
                                css.borderRadius = "20px 0px 0px 0px"
                            }
                            if (item === 3) {
                                css.borderRadius = "0px 30px 0px 0px"
                            }
                            if (index % 2 === 0) {
                                css.backgroundColor = "red"
                            } else {
                                css.backgroundColor = "black"
                            }

                            return (<td style={css} key={index} >{item}</td>)
                        })}

                    </tr>
                    <tr>
                        {props.nMiddle.map((item, index) => {
                            let css = {}
                            css.color = "white"
                            css.paddingLeft = 12
                            css.paddingRight = 12
                            css.fontSize = 30
                            css.backgroundColor = "black"

                            return (index === 1 ? <td colSpan={15} rowSpan={2} style={{ backgroundColor: "green" }} key={index}></td> : <td style={css} rowSpan={index === 2 ? 2 : 1} key={index}>{item}</td>)
                        })}
                    </tr>
                    <tr>
                        {[23].map((item, index) => {
                            let css = {}
                            css.color = "white"
                            css.paddingLeft = 12
                            css.paddingRight = 12
                            css.fontSize = 30
                            css.backgroundColor = "red"

                            return (<td style={css} key={index}>{item}</td>)
                        })}
                    </tr>
                    <tr>

                        {props.nBottom.map((item, index) => {
                            let css = {}
                            css.color = "white"
                            css.paddingLeft = 12
                            css.paddingRight = 12
                            css.fontSize = 30
                            if (item === 8) {
                                css.borderRadius = "0px 0px 0px 20px"
                            }
                            if (item === 0) {
                                css.borderRadius = "0px 0px 20px 0px"
                            }
                            if (index % 2 === 0) {
                                css.backgroundColor = "black"
                            } else {
                                css.backgroundColor = "red"
                            }
                            if (item === 0) {
                                css.backgroundColor = "green"
                            }


                            return (<td style={css} key={index}>{item}</td>)
                        }
                        )}
                    </tr>
                </tbody>
            </table>
        </Col>
    );
}

export default RaceTrack;