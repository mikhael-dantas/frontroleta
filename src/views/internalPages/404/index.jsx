import React from "react";

import { Button, Result } from 'antd';
import { Link } from "react-router-dom";

function Page404() {
    return (

        <Result
            status="404"
            title="404"
            subTitle="Desculpe, não encontramos a página desejada."
            extra={
                <Link to={"/"}>
                    <Button type="primary">Voltar para Home</Button>
                </Link>
            }
        />
    );
}

export default Page404;