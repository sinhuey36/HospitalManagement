//for doctor profile or information except appointment 
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Timeline, Row, Col, Descriptions, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/reducer/UserReducer';
import { UserOutlined } from '@ant-design/icons';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {FuncGetDoctor} from '../functions/Users';

const { Title, Text } = Typography;

function DoctorProfile() {
    const { state } = useLocation();
    const [profile, setProfile] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        console.log(state.id);
        GetProfile(state.id);
        //test profile data 
        var profile_test = {
            FirstName: 'First Name',
            LastName: 'Last Name',
            Profession: 'Profession',
            Description: 'Description asdlfjklgblkfjdgdfgkasdasdasdsdfdgdgbgbngsnffgnff   <br />  ljhfdgkjfdbrbub;h;roeghogh;',
            ContactNo: '012345679',
            Email: 'sample email',
            OfficeNo: '0123456789',
            ID : 'test_id'
        };
        setProfile(profile_test);
    }, []);

    const GetProfile=(id)=>{
        FuncGetDoctor("", id).then((resp)=>{
            if(resp.doctorList.length != 1){
                window.alert("User Not found");
                return;
            }else{
                const doctor = resp.doctorList[0];
                setProfile({...doctor});
            }

            console.log(resp);
        }).catch((exp)=>{
            console.warn(exp);
        })
    }   
    const ViewAppointment=(Id)=>{
        navigate('/DoctorList', { state: { id: Id } });
    }
    return (
        <div>
            <Title level={3}>Profile</Title>
            <Divider></Divider>
            <div>
                <Avatar size={80} icon={<UserOutlined />} />
            </div>
            <Descriptions bordered style={{ marginTop: '3%' }} extra={<Button type="primary" onClick={()=>{ViewAppointment(profile.id)}}>View Appointments</Button>}>
                <Descriptions.Item label="First Name">{profile?.firstName}</Descriptions.Item>
                <Descriptions.Item label="Last Name">{profile?.lastName}</Descriptions.Item>
                <Descriptions.Item label="Profession">{profile?.profession}</Descriptions.Item>
                <Descriptions.Item label="ContactNo"> 
                <p>{profile?.contactNum}</p>
                </Descriptions.Item>
                <Descriptions.Item label="Email">{profile?.email}</Descriptions.Item>
                <Descriptions.Item label="Date of Join">{profile?.createDateTime?.split("T")[0]}</Descriptions.Item>
                <Descriptions.Item label="Introduction" span={3}>{profile?.introduction}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}
export default DoctorProfile;