import React from 'react';
import { Button } from "antd";

import "./styles.css";

const RegistrationForm = () => {
    const clickHandle = () => {
        window.Main.openMinecraft("CLICK")
    }

    return (
        <div className={"registration-container"}>
            <div className={"registration-inner"}>
                <input type={"text"}/>
                <Button onClick={clickHandle} type="primary">Кнопкич</Button>
            </div>
        </div>
    );
};

export default RegistrationForm;