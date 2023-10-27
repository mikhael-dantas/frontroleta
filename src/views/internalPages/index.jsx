
import { Image, Layout, Menu } from "antd";
import { removeState } from "../../services/localStorage";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import FooterLayout from "./../../components/footer";
import BreadCrumb from "./../../components/breadcrumb";
import HeaderLayout from "./../../components/headerApps";
import { itemsNavigationMobile } from "./../../components/mobileNavibar";
import { itemsNavigationDesktop } from "./../../components/desktopNavbar";
import { Route, Routes } from "react-router-dom";
import RoutesMap from "./../../services/routes/InternalRoutes";

function InternalPages() {

    const { Content, Sider, Header, Footer } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    const mobile = useMediaQuery("(max-width:520px)");

    return (
        <>
            {mobile === false && (
                <Layout style={layoutStyle}>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={(value) => setCollapsed(value)}
                    >
                        {collapsed === false ? (
                            <div style={divStyle}>
                                {/* <Image src={logo} preview={false}></Image> */}
                            </div>
                        ) : (
                            <div style={divStyleMin}>
                                {/* <Image src={faviIcon} width={30} preview={false}></Image> */}
                            </div>
                        )}

                        <Menu
                            theme="dark"
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                            items={itemsNavigationDesktop}
                        />
                    </Sider>

                    <Layout>
                        <Header>
                            <HeaderLayout></HeaderLayout>
                        </Header>
                        <Content style={contentStyle}>
                            <BreadCrumb></BreadCrumb>
                            <div
                                style={{
                                    padding: 24,
                                    minHeight: 360,
                                }}
                            >
                                <Routes>
                                    {RoutesMap.map((rota, index) => {
                                        return <Route key={index} {...rota}></Route>;
                                    })}
                                </Routes>
                            </div>
                        </Content>
                        <Footer>
                            <FooterLayout />
                        </Footer>
                    </Layout>
                </Layout>
            )}
            {mobile === true && (
                <Layout>
                    <Header style={headerMobile}>
                        <div style={imgMobile}>
                            {/* <Image src={logo} preview={false}></Image> */}
                        </div>

                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                            items={itemsNavigationMobile}
                            onClick={(e) => {
                                if (e.key === "19") {
                                    removeState("user");
                                    removeState("token");
                                    removeState("company");
                                    removeState("session_user");
                                    removeState("2fagoogle");
                                    removeState("permissions");
                                    window.location.reload();
                                }
                            }}
                        />
                    </Header>

                    <Content>
                        <BreadCrumb></BreadCrumb>
                        <Routes>
                            {RoutesMap.map((rota, index) => {
                                return <Route key={index} {...rota}></Route>;
                            })}
                        </Routes>
                    </Content>
                    <Footer>
                        <FooterLayout />
                    </Footer>
                </Layout>
            )}
        </>
    );
}

export default InternalPages;

const imgMobile = {
    float: "left",
    width: 60,
    margin: "0px 20px 0px 0",
};

const headerMobile = {
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
};

const contentStyle = {
    margin: "0 16px",
};

const divStyle = {
    margin: 26,
};

const divStyleMin = {
    margin: 26,
};

const layoutStyle = {
    minHeight: "100vh",
};