import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch, useStore } from 'react-redux'
import { login, logout, userSlice } from '../redux/reducer/UserReducer';
import React, {useEffect} from "react";
import {store} from '../redux/store';
const { Content, Sider } = Layout;
function NavigationHeader(param) {
    let navigate = useNavigate();
    const user = store.getState();
    const dispatch = useDispatch();

    useEffect(() => {
        //navigate to login if not found user 
        if(user.UserName == null || user.FirstName == null || user.LastName == null || user.Role == null || user.UserId == null || user.RoleId == null){
            //go to login page
            window.alert("Please Login to Proceed");
            Logout();
        }
      }, []);
    const Logout=()=>{
        dispatch(logout());
        navigate('/Login');
    }
    // setting menu item 
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type
        };
    }
    //replace the key to route 
    const items = [
        getItem('Home', '/', <UserOutlined />, null, null),
        getItem('Search Patient', '/PatientList', <UserOutlined />, null, null),
        getItem('Admin', '/Admin', <UserOutlined />, null, null),
        getItem('Doctor', '/DoctorProfile', <UserOutlined />, null, null),
        getItem('Prescription List', '/PharmacistList', <UserOutlined />, null, null),
        getItem('New Patient', '/NewPatient', <UserOutlined />, null, null),
        getItem('Logout', 'logout', <UserOutlined />, null, null)
    ];

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onClick = (item) => {
        if(item.key == 'logout'){
            Logout();
            return;
        }
        navigate(item.key);
    };
    
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={onClick}
                    defaultSelectedKeys={['home']}
                    defaultOpenKeys={['home']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        padding: 20
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: window.innerHeight - 40,
                            background: colorBgContainer,
                        }}
                    >
                        {param.Content}
                    </div>
                </Content>
                {/* <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer> */}
            </Layout>
        </Layout>
    )
}

export default NavigationHeader;