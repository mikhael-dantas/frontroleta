import { Link } from "react-router-dom";
import { removeState } from "../../../services/localStorage";
import React from "react";
import { Button, Dropdown } from "antd";
import {
  UserOutlined,
  LoginOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

function UserMenuDropDown() {
  const items = [
    {
      key: "1",
      label: (
        <Link
          onClick={() => {
            removeState("user");
            window.location.reload();
          }}
          to={"/"}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "red",
            }}
          >
            <LoginOutlined style={{ marginRight: 8 }} />
            Deslogar
          </div>
        </Link>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
    >
      <Button ghost>
        <UserOutlined />
      </Button>
    </Dropdown>
  );
}

export default UserMenuDropDown;
