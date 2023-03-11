import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Row, Col, Card, Space, Modal, Tag } from 'antd';
import { useNavigate } from "react-router-dom";
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { FuncCreateUser, FuncRegisterDoctor, FuncGetDoctor } from '../functions/Users';

const { Title } = Typography;

function Admin() {
    let navigate = useNavigate();
    const [showModel, setShowModel] = useState('');
    const [doctorList, setDoctorList] = useState([]);
    const [pharmacistList, setPharmacistList] = useState([]);
    const [NewDoctor, setNewDoctor] = useState({});

    useEffect(() => {
        //test for add doctorList
        GetDoctorList();
        // var test_doctor_list = [
        //     {
        //         Id: 'test id',
        //         name: 'Test Name',
        //         profession: 'profession',
        //         Onduty: true
        //     },
        //     {
        //         Id: 'test id',
        //         name: 'Test Name',
        //         profession: 'profession',
        //         Onduty: true
        //     },
        //     {
        //         Id: 'test id',
        //         name: 'Test Name',
        //         profession: 'profession',
        //         Onduty: false
        //     },
        //     {
        //         Id: 'test id',
        //         name: 'Test Name',
        //         profession: 'profession',
        //         Onduty: false
        //     },
        //     {
        //         Id: 'test id',
        //         name: 'Test Name',
        //         profession: 'profession',
        //         Onduty: true
        //     },
        //     {
        //         Id: 'test id',
        //         name: 'Test Name',
        //         profession: 'profession',
        //         Onduty: true
        //     }
        // ];
        // setDoctorList(test_doctor_list);
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

    const GetDoctorList=()=>{
        FuncGetDoctor().then((resp)=>{
            console.log(resp);
            setDoctorList([...resp.doctorList]);
        })
    }

    const SetDoctorVal = (obj, val) => {
        NewDoctor[obj] = val;
        setNewDoctor({...NewDoctor});
    }
    const OnModelFinished = () => {
        if(showModel === 'Doctor'){
            CreateNewDoctor();
        }
        console.log("Close Model")
    }

    const NavigateToDoctors = (doctor_id) => {
        navigate('/DoctorProfile', { state: { id: doctor_id } });
    }

    const NavigateToPharmacy = (pharmacist_id) => {
        navigate('/DoctorList', { state: { id: pharmacist_id } });
    }

    const CreateNewDoctor = () => {
        //calling to create new doctor 
        FuncCreateUser(NewDoctor.UserName , NewDoctor.Password, NewDoctor.ConfirmPassword, NewDoctor.Email).then((resp)=>{
            if(resp.success && resp.userId){
                FuncRegisterDoctor(resp.userId , NewDoctor.FirstName , NewDoctor.LastName , 
                    NewDoctor.Introduction, NewDoctor.Professional, NewDoctor.ContactNum, NewDoctor.Email).then((regis_resp)=>{
                        window.alert(regis_resp.message);
                        setShowModel('');
                        setNewDoctor({});
                    });
            }
        }).catch((exp)=>{
            console.warn(exp);
        })
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
                            <Card title={x.firstName + " " + x.lastName} extra={<Button type="link" icon={<InfoCircleOutlined />} onClick={() => { NavigateToDoctors(x.id) }} />} style={{ minWidth: 300, margin: 20 }}>
                               <p><b>{x.profession}</b></p>
                               <p>{x.introduction}</p>
                               <p>{x.contactNum}</p>
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
            <Modal title={"Register New " + showModel} open={showModel != ''} onOk={OnModelFinished} onCancel={() => { setShowModel('') }}>
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
                                        <Input value={NewDoctor?.UserName} onChange={(val) => { SetDoctorVal("UserName", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password value={NewDoctor?.Password} onChange={(val) => { SetDoctorVal("Password", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Confirm Password"
                                        name="Confirmpassword"
                                        rules={[{ required: true, message: 'Re-enter Password' }]}
                                    >
                                        <Input.Password value={NewDoctor?.ConfirmPassword} onChange={(val) => { SetDoctorVal("ConfirmPassword", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="First Name"
                                        name="firstname"
                                        rules={[{ required: true, message: 'First Name Required' }]}
                                    >
                                        <Input value={NewDoctor?.FirstName} onChange={(val) => { SetDoctorVal("FirstName", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Last Name"
                                        name="lastname"
                                        rules={[{ required: true, message: 'Last Name Required' }]}
                                    >
                                        <Input value={NewDoctor?.LastName} onChange={(val) => { SetDoctorVal("LastName", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Last Name Required' }]}
                                    >
                                        <Input value={NewDoctor?.Email} onChange={(val) => { SetDoctorVal("Email", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Professional"
                                        name="professional"
                                        rules={[{ required: true, message: 'Professional Required' }]}
                                    >
                                        <Input value={NewDoctor?.Professional} onChange={(val) => { SetDoctorVal("Professional", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Contact Number"
                                        name="contact"
                                        rules={[{ required: true, message: 'Contact Number Required' }]}
                                    >
                                        <Input value={NewDoctor?.ContactNum} onChange={(val) => { SetDoctorVal("ContactNum", val.target.value) }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Introduction"
                                        name="Introduction"
                                    >
                                        <Input.TextArea value={NewDoctor?.Introduction} onChange={(val) => { SetDoctorVal("Introduction", val.target.value) }} />
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