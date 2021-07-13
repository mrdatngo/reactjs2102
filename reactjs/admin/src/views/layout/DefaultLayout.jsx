import React, { useState } from "react";

import { Link, Switch, Route, Redirect } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DefaultLayout = ({ routes }) => {
  console.log(routes);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {routes.map((route) => {
            return route.children ? (
              <SubMenu
                key={route.path}
                icon={<UserOutlined />}
                title={route.title}
              >
                {route.children.map((subRoute) => {
                  return (
                    !subRoute.hidden && (
                      <Menu.Item key={subRoute.path}>
                        <Link to={subRoute.path}>{subRoute.title}</Link>
                      </Menu.Item>
                    )
                  );
                })}
              </SubMenu>
            ) : (
              !route.hidden && true && (
                <Menu.Item key={route.path} icon={<FileOutlined />}>
                  <Link to={route.path}>{route.title}</Link>
                </Menu.Item>
              )
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              {routes.map((route) => {
                return route.children ? (
                  route.children.map((subRoute) => {
                    return (
                      <Route path={subRoute.path}>{subRoute.component}</Route>
                    );
                  })
                ) : (
                  <Route path={route.path}>{route.component}</Route>
                );
              })}
              <Route exact path="/">
                <Redirect to="/home" />
                {/* Page not found! */}
              </Route>
              <Route>
                <Redirect to="/page404" />
                {/* Page not found! */}
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
