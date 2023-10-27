import React, { useEffect, useState } from "react";
import UserMenuDropDown from "../dropdownMenu/user";
import { Badge, Tag, Image } from "antd";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersWater } from "@fortawesome/free-solid-svg-icons";


function HeaderLayout() {
  const [temp, setTemp] = useState();
  const [dolar, setDolar] = useState();
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    if (temp === undefined && dolar === undefined) {
      setLoading(false);
    }
  }, [dolar, temp]);

  return (
    <div
      style={{
        float: "right",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <UserMenuDropDown></UserMenuDropDown>
    </div>
  );
}

export default HeaderLayout;
