import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Timeline, Row, Col, Space, Card } from 'antd';
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function DoctorList() {
    let navigate = useNavigate();
    const [AppointmentList, SetAppointmentList] = useState([]);
    useEffect(() => {
        //test to initialize the list 
        var list = [
            {
                Name: 'Patient Name',
                Description: 'test description here',
                ID: 'test id '
            },
            {
                Name: 'Patient Name',
                Description: 'test description here',
                ID: 'test id '
            },
            {
                Name: 'Patient Name',
                Description: 'test description here',
                ID: 'test id '
            },
            {
                Name: 'Patient Name',
                Description: 'test description here',
                ID: 'test id '
            },
            {
                Name: 'Patient Name',
                Description: 'test description here',
                ID: 'test id '
            },
            {
                Name: 'Patient Name',
                Description: 'test description here',
                ID: 'test id '
            },
            {
                Name: 'Patient Name',
                Description: 'test description here',
                ID: 'test id '
            }
        ]
        SetAppointmentList(list);
    }, []);

    const GoToPatientDetail = (patient_id) => {
        console.log(patient_id);
        navigate('/PatientDetails', { state: { id: patient_id} });
    }

    const DonePatient = (patient_id)=>{
        console.log(patient_id);
    }

    return (
        <div>
            <Title level={3}>Appointment List</Title>
            <Divider></Divider>
            <div style={{ backgroundColor: '#dbdbdb', minHeight: window.innerHeight - 160, borderRadius: 10, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Row>
                    {
                        AppointmentList.map(x =>
                            <Col xs={24} xl={6} sm={24} style={{ alignContent: 'center', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Card title={x.Name} bordered={false} style={{ padding: 10 }}
                                    extra={
                                        <>
                                            <Button
                                                type='link'
                                                icon={<CloseOutlined />}
                                                onClick={()=>{DonePatient(x.ID)}}
                                            />
                                            <Button
                                                type='link'
                                                icon={<InfoCircleOutlined /> }
                                                onClick={()=>{GoToPatientDetail(x.ID)}}
                                            />
                                        </>
                                    }>
                                    <p>{x.Description}</p>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>

        </div>
    )
}
export default DoctorList;