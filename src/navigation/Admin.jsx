import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Row, Col, Card, Space, Modal, Tag } from 'antd';
import { useNavigate } from "react-router-dom";
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';


const { Title } = Typography;

function Admin() {
    let navigate = useNavigate();
    const [showModel, setShowModel] = useState('');
    const [doctorList, setDoctorList] = useState([]);
    const [pharmacistList, setPharmacistList] = useState([]);

    useEffect(() => {
        //test for add doctorList
        var test_doctor_list = [
            {
                Id: 'test id',
                name: 'Test Name',
                profession: 'profession',
                Onduty: true
            },
            {
                Id: 'test id',
                name: 'Test Name',
                profession: 'profession',
                Onduty: true
            },
            {
                Id: 'test id',
                name: 'Test Name',
                profession: 'profession',
                Onduty: false
            },
            {
                Id: 'test id',
                name: 'Test Name',
                profession: 'profession',
                Onduty: false
            },
            {
                Id: 'test id',
                name: 'Test Name',
                profession: 'profession',
                Onduty: true
            },
            {
                Id: 'test id',
                name: 'Test Name',
                profession: 'profession',
                Onduty: true
            }
        ];
        setDoctorList(test_doctor_list);
        //test for add pharmacist List
        var test_pharmacist_list = [
            {
                Id: 'test id',
                name: 'Test Name',
                Onduty: true
            },
            {
                Id: 'test id',
                name: 'Test Name',
                Onduty: false
            },
            {
                Id: 'test id',
                name: 'Test Name',
                Onduty: true
            },
            {
                Id: 'test id',
                name: 'Test Name',
                Onduty: true
            },
            {
                Id: 'test id',
                name: 'Test Name',
                Onduty: true
            },
            {
                Id: 'test id',
                name: 'Test Name',
                Onduty: false
            },
            {
                Id: 'test id',
                name: 'Test Name',
                Onduty: true
            },
        ];
        setPharmacistList(test_pharmacist_list);
    }, []);

    const OnModelFinished = () => {
        console.log("Close Model")
    }

    const NavigateToDoctors = (doctor_id) => {
        navigate('/DoctorProfile', { state: { id: doctor_id } });
    }

    const NavigateToPharmacy = (pharmacist_id) => {
        navigate('/DoctorList', { state: { id: pharmacist_id } });
    }

    return (
        <div style={{ width: '100%', height: '100%', padding: 20 }}>
            <Title level={3}>Administration</Title>
            <Divider orientation="left">Doctors</Divider>
            <Row justify='start' align='top'>
                <Button type="primary" style={{ alignSelf: 'flex-start' }} onClick={() => { setShowModel('Doctor') }}>New</Button>
            </Row>
            <Row justify='start' align='top' style={{ padding: 10 }} >
                {
                    doctorList.map(x =>
                        <Col xl={8} xs={16} xxl={8}>
                            <Card title={x.name} extra={<Button type="link" icon={<InfoCircleOutlined />} onClick={() => { NavigateToDoctors(x.Id) }} />} style={{ width: 300, margin: 20 }}>
                                <Tag color={x.Onduty ? 'green' : 'red'} key={x.Id}>
                                    {x.Onduty ? 'On Duty' : 'Off Duty'}
                                </Tag>
                            </Card>
                        </Col>
                    )
                }

            </Row>


            <Divider orientation="left">Pharmacist</Divider>
            <Row justify='start' align='top'>
                <Button type="primary" style={{ alignSelf: 'flex-start' }} onClick={() => { setShowModel('Pharmacist') }}>New</Button>
            </Row>
            <Row justify='start' align='top' style={{ padding: 10 }} >
            {
                    pharmacistList.map(x =>
                        <Col xl={8} xs={16} xxl={8}>
                            <Card title={x.name} extra={<Button type="link" icon={<InfoCircleOutlined />} onClick={() => { NavigateToPharmacy(x.Id) }} />} style={{ width: 300, margin: 20 }}>

                                <p>{x.profession}</p>
                                <Tag color={x.Onduty ? 'green' : 'red'} key={x.Id}>
                                    {x.Onduty ? 'On Duty' : 'Off Duty'}
                                </Tag>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Modal title="Basic Modal" open={showModel != ''} onOk={OnModelFinished} onCancel={() => { setShowModel('') }}>
                <div>
                    <Row justify="center" align="middle">
                        <Col span={16}>
                            {
                                (showModel === 'Doctor') &&
                                <Form
                                    name="basic"
                                    style={{ width: '100%', alignSelf: 'center', marginTop: '10%' }}
                                    initialValues={{ remember: true }}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Confirm Password"
                                        name="Confirmpassword"
                                        rules={[{ required: true, message: 'Re-enter Password' }]}
                                    >
                                        <Input.Password value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="First Name"
                                        name="firstname"
                                        rules={[{ required: true, message: 'First Name Required' }]}
                                    >
                                        <Input value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Last Name"
                                        name="lastname"
                                        rules={[{ required: true, message: 'Last Name Required' }]}
                                    >
                                        <Input value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Introduction"
                                        name="Introduction"
                                    >
                                        <Input.TextArea value={"Test"} />
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                        <Button type="primary" htmlType="button">
                                            Create
                                        </Button>
                                    </Form.Item>
                                </Form>
                            }
                            {
                                (showModel === 'Pharmacist') &&
                                <Form
                                    name="basic"
                                    style={{ width: '100%', alignSelf: 'center', marginTop: '10%' }}
                                    initialValues={{ remember: true }}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Confirm Password"
                                        name="Confirmpassword"
                                        rules={[{ required: true, message: 'Re-enter Password' }]}
                                    >
                                        <Input.Password value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="First Name"
                                        name="firstname"
                                        rules={[{ required: true, message: 'First Name Required' }]}
                                    >
                                        <Input value={"Test"} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Last Name"
                                        name="lastname"
                                        rules={[{ required: true, message: 'Last Name Required' }]}
                                    >
                                        <Input value={"Test"} />
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                        <Button type="primary" htmlType="button">
                                            Create
                                        </Button>
                                    </Form.Item>
                                </Form>
                            }
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    )
}
export default Admin;