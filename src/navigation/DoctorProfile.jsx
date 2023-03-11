//for doctor profile or information except appointment 
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Timeline, Row, Col, Descriptions, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/reducer/UserReducer';
import { UserOutlined } from '@ant-design/icons';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

function DoctorProfile() {
    const { state } = useLocation();
    const [profile, setProfile] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        console.log(state);
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
            <Descriptions bordered style={{ marginTop: '3%' }} extra={<Button type="primary" onClick={()=>{ViewAppointment(profile.ID)}}>View Appointments</Button>}>
                <Descriptions.Item label="First Name">{profile?.FirstName}</Descriptions.Item>
                <Descriptions.Item label="Last Name">{profile?.LastName}</Descriptions.Item>
                <Descriptions.Item label="Profession">{profile?.Profession}</Descriptions.Item>
                <Descriptions.Item label="ContactNo"> 
                <p>{profile?.ContactNo}</p>
                <p>{profile?.OfficeNo}</p>
                </Descriptions.Item>
                <Descriptions.Item label="Email">{profile?.Email}</Descriptions.Item>
                <Descriptions.Item label="Email">{profile?.Email}</Descriptions.Item>
                <Descriptions.Item label="Description" span={3}>{profile?.Description}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}
export default DoctorProfile;