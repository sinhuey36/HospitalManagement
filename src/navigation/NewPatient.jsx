import React, { useState, useEffect } from "react";
import { Button, TimePicker, Form, Input, Typography, Divider, Timeline, Row, Col, Descriptions, Tag, Modal, Select, DatePicker } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/reducer/UserReducer';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const { Title, Text } = Typography;

function NewPatient() {
    const { state } = useLocation();
    const [Profile, setProfile] = useState({});
    const [UpdateProfile, setUpdateProfile] = useState([]);
    const [NewAppointmentModal, setNewAppModal] = useState(false);
    const [DoctorList, setDoctorList] = useState([]);
    const [AppointmentList, setAppointmentList] = useState([]);
    const [MedicineList, setMedicineList] = useState([]);
    const [NewAppVal, setNewAppVal] = useState({
        AppDate: '',
        AppTime: '',
        DoctorID: '',
        Remark: ''
    });
    useEffect(() => {
        //get id from state 
        // var patient_id = state.id;
        var profile_test = {
            Id: 'test id ',
            UserName: 'Test Name',
            FirstName: 'First Name',
            LastName: 'Last Name',
            Remark: 'Remark',
            Address: 'Temp address',
            ContactNum: '0123456789',
            Tag: 'Red'
        }
        setProfile(profile_test);
        setUpdateProfile({ ...profile_test });

        var test_doctor_list = [
            {
                ID: 'test_id_6',
                Name: 'Doctor Name Test',
                Profession: 'Test Profession'
            },
            {
                ID: 'test_id_5',
                Name: 'Doctor Name Test',
                Profession: 'Test Profession'
            },
            {
                ID: 'test_id_4',
                Name: 'Doctor Name Test',
                Profession: 'Test Profession'
            },
            {
                ID: 'test_id_3',
                Name: 'Doctor Name Test',
                Profession: 'Test Profession'
            },
            {
                ID: 'test_id_2',
                Name: 'Doctor Name Test',
                Profession: 'Test Profession'
            },
            {
                ID: 'test_id_1',
                Name: 'Doctor Name Test',
                Profession: 'Test Profession'
            }
        ];
        setDoctorList(test_doctor_list);

        var test_appointment_list = [
            {
                id: 'fnodfbodbv',
                date: '2022-05-02',
                time: '15:21:21',
                status: 'Booked',
                doctor_in_charge: 'Doctor Testing',
                remark: 'tes remark',
                CreateDate: '2022'
            },
            {
                id: 'fnodfbodbv',
                date: '2022-05-02',
                time: '15:21:21',
                status: 'Booked',
                doctor_in_charge: 'Doctor Testing',
                remark: 'tes remark'
            },
            {
                id: 'fnodfbodbv',
                date: '2022-05-02',
                time: '15:21:21',
                status: 'Booked',
                doctor_in_charge: 'Doctor Testing',
                remark: 'tes remark'
            },
            {
                id: 'fnodfbodbv',
                date: '2022-05-02',
                time: '15:21:21',
                status: 'Booked',
                doctor_in_charge: 'Doctor Testing',
                remark: 'tes remark'
            },
            {
                id: 'fnodfbodbv',
                date: '2022-05-02',
                time: '15:21:21',
                status: 'Booked',
                doctor_in_charge: 'Doctor Testing',
                remark: 'tes remark'
            },
            {
                id: 'fnodfbodbv',
                date: '2022-05-02',
                time: '15:21:21',
                status: 'Booked',
                doctor_in_charge: 'Doctor Testing',
                remark: 'tes remark'
            }
        ];
        setAppointmentList(test_appointment_list);
        var test_medicine_list = [
            {
                name: 'TestMedicine',
                dose: '500mg',
                value: 'Test Medicine 500mg'
            },
            {
                name: 'TestMedicine2',
                dose: '100mg',
                value: 'Test Medicine 2 100mg'
            }
        ];
        setMedicineList(test_medicine_list);
    }, []);

    const GetAppointmentList = () => {
        var list = [];
        AppointmentList.map(x => {
            list.push({
                label: x.date + " " + x.time,
                children: <Text>{'Appointment ' + x.status + " with " + x.doctor_in_charge}</Text>,
            })
        });
        return list;
    }

    const GetTagWording = (tag_color) => {
        switch (tag_color) {
            case 'Red':
                return 'Extreme'
            case 'Blue':
                return 'Normal'
            case 'Green':
                return 'Recovered'
            default:
                return ''
        }
    }

    const UpdateDetail = () => {
        console.log(Profile);
        setProfile({ ...UpdateProfile });
    }

    const UpdateSpecificColumn = (column, value) => {
        Profile[column] = value;
        setProfile({ ...Profile });
    }

    const UpdateNewAppVar = (column, value) => {
        NewAppVal[column] = value;
        setNewAppVal({ ...NewAppVal });
    }

    const MakeNewApp = () => {
        console.log("Make New Appointment")
    }

    const GetDoctorListSelection = () => {
        var list = [];
        DoctorList.forEach(x => list.push({ value: x.ID, label: x.Name }));
        return list;
    }

    const onDateChange = (date, dateString) => {
        NewAppVal.AppDate = dateString;
        setNewAppVal({ ...NewAppVal });
    };

    const onTimeChange = (time, timeString) => {
        NewAppVal.AppTime = timeString;
        setNewAppVal({ ...NewAppVal });
    };

    return (
        <div>
            <Title level={3}>{Profile?.FirstName + " " + Profile?.LastName}</Title>
            <Divider></Divider>
            <Row>
                <Col xs={24} xl={12} sm={24} style={{ border: '1px solid grey', alignContent: 'center', padding: 10 }}>
                    <Descriptions title="Profile" extra={<Button type="primary">Save</Button>}>
                        <Descriptions.Item label="UserName" span={3}>
                            <Input value={Profile?.UserName} onChange={(val) => { UpdateSpecificColumn("UserName", val.target.value) }} />
                        </Descriptions.Item>
                        <Descriptions.Item label="First Name" span={3}>
                            <Input value={Profile?.FirstName} onChange={(val) => { UpdateSpecificColumn("FirstName", val.target.value) }} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Last Name" span={3}>
                            <Input value={Profile?.LastName} onChange={(val) => { UpdateSpecificColumn("LastName", val.target.value) }} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Contact" span={3}>
                            <Input value={Profile?.ContactNum} onChange={(val) => { UpdateSpecificColumn("ContactNum", val.target.value) }} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Remark" span={3}>
                            <Input value={Profile?.Remark} onChange={(val) => { UpdateSpecificColumn("Remark", val.target.value) }} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Tag" span={3}>
                            <Select
                                onChange={(val) => { UpdateSpecificColumn("Tag", val) }}
                                options={[
                                    { value: 'Red', label: GetTagWording('Red') },
                                    { value: 'Blue', label: GetTagWording('Blue') },
                                    { value: 'Green', label: GetTagWording('Green') }
                                ]}
                                value={Profile?.Tag}
                            />

                        </Descriptions.Item>
                        <Descriptions.Item label="Address" span={3}>
                            <Input.TextArea value={Profile?.Address} onChange={(val) => { UpdateSpecificColumn("Address", val.target.value) }} />
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col xs={24} xl={12} sm={24} style={{ border: '1px solid grey', alignContent: 'center', padding: 10 }}>
                    <Descriptions title="Histories" extra={<Button type="primary" onClick={() => { setNewAppModal(true) }}>New Appointment</Button>}></Descriptions>
                    <Timeline style={{ textAlign: 'start', alignSelf: 'center' }} mode={"left"}
                        items={GetAppointmentList()}
                    />
                </Col>
            </Row>
            <Modal
                title="New Appointment"
                open={NewAppointmentModal}
                onOk={MakeNewApp}
                onCancel={() => { setNewAppModal(false) }}
                okText="Book"
                cancelText="Cancel"
            >
                <Descriptions>
                    <Descriptions.Item label="Date" span={3}>
                        <DatePicker onChange={onDateChange} />
                    </Descriptions.Item>
                    <Descriptions.Item label="Time" span={3}>
                        <TimePicker onChange={onTimeChange} defaultValue={dayjs('00:00:00', 'HH:mm:ss')} />

                    </Descriptions.Item>
                    <Descriptions.Item label="Doctor" span={3}>
                        <Select
                            style={{ minWidth: 150 }}
                            onChange={(val) => { UpdateNewAppVar("DoctorID", val) }}
                            options={GetDoctorListSelection()}
                            value={NewAppVal?.DoctorID}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="Remark" span={3}>
                        <Input.TextArea value={NewAppVal?.Remark} onChange={(val) => { UpdateNewAppVar("Remark", val.target.value) }} />
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </div>
    )
}
export default NewPatient;