import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Timeline, Row, Col, Space, Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

function PharmacistList() {
    const [PrescriptionList, setPrescriptionList] = useState([]);

    useEffect(() => {
        var test_list = [
            {
                id: 'asdadefgs',
                Medicine:[
                    {
                        name: 'Paracetamol',
                        dose: '50mg'
                    },
                    {
                        name: 'Med Name',
                        dose: '100mg'
                    }
                ],
                PatientName: 'TestPatientName'
            },
            {
                id: 'asdadbrtb',
                Medicine:[
                    {
                        name: 'Paracetamol',
                        dose: '50mg'
                    },
                    {
                        name: 'Med Name',
                        dose: '100mg'
                    }
                ],
                PatientName: 'TestPatientName'
            },
            {
                id: 'asdadrtrs',
                Medicine:[
                    {
                        name: 'Paracetamol',
                        dose: '50mg'
                    },
                    {
                        name: 'Med Name',
                        dose: '100mg'
                    }
                ],
                PatientName: 'TestPatientName'
            },
            {
                id: 'asdadbfnt',
                Medicine:[
                    {
                        name: 'Paracetamol',
                        dose: '50mg'
                    },
                    {
                        name: 'Med Name',
                        dose: '100mg'
                    }
                ],
                PatientName: 'TestPatientName'
            },
            {
                id: 'asdadsfg',
                Medicine:[
                    {
                        name: 'Paracetamol',
                        dose: '50mg'
                    },
                    {
                        name: 'Med Name',
                        dose: '100mg'
                    }
                ],
                PatientName: 'TestPatientName'
            },
            {
                id: 'asdadbfgb',
                Medicine:[
                    {
                        name: 'Paracetamol',
                        dose: '50mg'
                    },
                    {
                        name: 'Med Name',
                        dose: '100mg'
                    }
                ],
                PatientName: 'TestPatientName'
            },
            {
                id: 'asdadd',
                Medicine:[
                    {
                        name: 'Paracetamol',
                        dose: '50mg'
                    },
                    {
                        name: 'Med Name',
                        dose: '100mg'
                    }
                ],
                PatientName: 'TestPatientName'
            }
        ];
        setPrescriptionList(test_list);
    }, []);

    const DoseGiven = (id) => {
        console.log("Update Prescription Status");
        PrescriptionList.splice(PrescriptionList.indexOf(x=> x.id === id) , 1);
        setPrescriptionList([...PrescriptionList]);
    }

    return (
        <div>
            <Title level={3}>Prescription List</Title>
            <Divider></Divider>
            <div style={{ backgroundColor: '#dbdbdb', minHeight: window.innerHeight - 160, borderRadius: 10, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Row style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        PrescriptionList.map(x =>
                            <Col key={x.id} xs={24} xl={6} sm={24} style={{ alignContent: 'center', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Card title={x.PatientName} bordered={false} style={{ padding: 10 }}
                                    extra={
                                        <Button
                                            type='link'
                                            icon={<CloseOutlined />}
                                            onClick={() => { DoseGiven(x.id) }}
                                        />}>
                                    {x.Medicine.map(med =>
                                        <p>{med.name + "( " + med.dose + ")"}</p>
                                    )}
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>

        </div>
    )
}
export default PharmacistList;