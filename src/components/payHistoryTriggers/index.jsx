import { Avatar, Badge, Col } from "antd";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function PayHistoryTriggers(props) {
    return (

        <Col span={24} style={{ backgroundColor: "#fff", border: "solid 1px silver", borderRadius: 10, display: "flex", justifyContent: "start", alignItems: "center", paddingLeft: 15, paddingTop: 15, paddingBottom: 15 }} >
            <Col>
                <Avatar size={60} ><span style={{ fontSize: 35, }}>{props.lastTrigger}</span></Avatar>
            </Col>
            <Col>
                {props.trigger[0] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>1ª</Avatar>
                    </Badge>
                )}
                {props.trigger[0] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>1ª</Avatar>
                    </Badge>
                )}
                {props.trigger[0] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>1ª</Avatar>
                )}


                {props.trigger[1] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>2ª</Avatar>
                    </Badge>
                )}
                {props.trigger[1] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>2ª</Avatar>
                    </Badge>
                )}
                {props.trigger[1] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>2ª</Avatar>
                )}


                {props.trigger[2] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>3ª</Avatar>
                    </Badge>
                )}
                {props.trigger[2] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>3ª</Avatar>
                    </Badge>
                )}
                {props.trigger[2] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>3ª</Avatar>
                )}

{/* 
                {props.trigger[3] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>4ª</Avatar>
                    </Badge>
                )}
                {props.trigger[3] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>4ª</Avatar>
                    </Badge>
                )}
                {props.trigger[3] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>4ª</Avatar>
                )}


                {props.trigger[4] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>5ª</Avatar>
                    </Badge>
                )}
                {props.trigger[4] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>5ª</Avatar>
                    </Badge>
                )}
                {props.trigger[4] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>5ª</Avatar>
                )}


                {props.trigger[5] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>6ª</Avatar>
                    </Badge>
                )}
                {props.trigger[5] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>6ª</Avatar>
                    </Badge>
                )}
                {props.trigger[5] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>6ª</Avatar>
                )}


                {props.trigger[6] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>7ª</Avatar>
                    </Badge>
                )}
                {props.trigger[6] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>7ª</Avatar>
                    </Badge>
                )}
                {props.trigger[6] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>7ª</Avatar>
                )}


                {props.trigger[7] === "sim" && (
                    <Badge count={<CheckCircleIcon style={{ color: 'blue' }}></CheckCircleIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>8ª</Avatar>
                    </Badge>
                )}
                {props.trigger[7] === "nao" && (
                    <Badge count={<CancelIcon style={{ color: '#f5222d', }}></CancelIcon>} offset={[-42, 40]}>
                        <Avatar style={{ margin: 5 }} size={40}>8ª</Avatar>
                    </Badge>
                )}
                {props.trigger[7] === "nda" && (
                    <Avatar style={{ margin: 5 }} size={40}>8ª</Avatar>
                )} */}

                {/* 

                <Badge count={Boolean(props.trigger[1]) === false ? <CancelIcon style={{ color: '#f5222d', }}></CancelIcon> : <CheckCircleIcon style={{ color: 'blue', }}></CheckCircleIcon>} offset={[-42, 40]}>
                    <Avatar style={{ margin: 5 }} size={40}>2ª</Avatar>
                </Badge>
                <Badge count={Boolean(props.trigger[2]) === false ? <CancelIcon style={{ color: '#f5222d', }}></CancelIcon> : <CheckCircleIcon style={{ color: 'blue', }}></CheckCircleIcon>} offset={[-42, 40]}>
                    <Avatar style={{ margin: 5 }} size={40}>3ª</Avatar>
                </Badge>

                <Badge count={Boolean(props.trigger[3]) === false ? <CancelIcon style={{ color: '#f5222d', }}></CancelIcon> : <CheckCircleIcon style={{ color: 'blue', }}></CheckCircleIcon>} offset={[-42, 40]}>
                    <Avatar style={{ margin: 5 }} size={40}>4ª</Avatar>
                </Badge>

                <Badge count={Boolean(props.trigger[4]) === false ? <CancelIcon style={{ color: '#f5222d', }}></CancelIcon> : <CheckCircleIcon style={{ color: 'blue', }}></CheckCircleIcon>} offset={[-42, 40]}>
                    <Avatar style={{ margin: 5 }} size={40}>5ª</Avatar>
                </Badge>

                <Badge count={Boolean(props.trigger[5]) === false ? <CancelIcon style={{ color: '#f5222d', }}></CancelIcon> : <CheckCircleIcon style={{ color: 'blue', }}></CheckCircleIcon>} offset={[-42, 40]}>
                    <Avatar style={{ margin: 5 }} size={40}>6ª</Avatar>
                </Badge>

                <Badge count={Boolean(props.trigger[6]) === false ? <CancelIcon style={{ color: '#f5222d', }}></CancelIcon> : <CheckCircleIcon style={{ color: 'blue', }}></CheckCircleIcon>} offset={[-42, 40]}>
                    <Avatar style={{ margin: 5 }} size={40}>7ª</Avatar>
                </Badge>

                <Badge count={Boolean(props.trigger[7]) === false ? <CancelIcon style={{ color: '#f5222d', }}></CancelIcon> : <CheckCircleIcon style={{ color: 'blue', }}></CheckCircleIcon>} offset={[-42, 40]}>
                    <Avatar style={{ margin: 5 }} size={40}>8ª</Avatar>
                </Badge> */}
            </Col>
        </Col>
    );
}

export default PayHistoryTriggers;