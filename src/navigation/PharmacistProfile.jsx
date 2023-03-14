//for doctor profile or information except appointment 
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Timeline, Row, Col, Descriptions, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/reducer/UserReducer';
import { UserOutlined } from '@ant-design/icons';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {FuncGetDoctor, FuncGetPharmacist} from '../functions/Users';
import { store } from '../redux/store';

const { Title, Text } = Typography;

function PharmacistProfile() {
    const user = store.getState();
    const { state } = useLocation();
    const [profile, setProfile] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        console.log(state.id);
        GetProfile(state.id);
    }, []);

    const GetProfile=(id)=>{
        FuncGetPharmacist("", id).then((resp)=>{
            if(resp.pharmacistList.length != 1){
                window.alert("User Not found");
                return;
            }else{
                const doctor = resp.pharmacistList[0];
                setProfile({...doctor});
            }

            console.log(resp);
        }).catch((exp)=>{
            console.warn(exp);
        })
    }   
    return (
        <div>
            <Title level={3}>Profile</Title>
            <Divider></Divider>
            <div>
                <Avatar size={80} icon={<UserOutlined />} />
            </div>
            <Descriptions bordered style={{ marginTop: '3%' }}>
                <Descriptions.Item label="First Name">{profile?.firstName}</Descriptions.Item>
                <Descriptions.Item label="Last Name">{profile?.lastName}</Descriptions.Item>
                <Descriptions.Item label="Email">{profile?.email}</Descriptions.Item>
                <Descriptions.Item label="Date of Join">{profile?.createDateTime?.split("T")[0]}</Descriptions.Item>
                <Descriptions.Item label="Introduction" span={3}>{profile?.introduction}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}
export default PharmacistProfile;