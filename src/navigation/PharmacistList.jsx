import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Divider, Timeline, Row, Col, Space, Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { FuncGetPrescriptions } from '../functions/Prescription';
const { Title, Text } = Typography;

function PharmacistList() {
    const [PrescriptionList, setPrescriptionList] = useState([]);

    useEffect(() => {
        GetPrescriptionLists();
    }, []);

    const GetPrescriptionLists=()=>{
        FuncGetPrescriptions("", "").then((resp)=>{
            var list = [];
            resp.histories.forEach(hist => {
                var Medicine_list = [];
                hist.medicine.forEach(med => {
                    Medicine_list.push({
                        name : med.name,
                        dose : med.dose.toString() + "mg"
                    });
                });

                list.push(
                    {
                        id : hist.id,
                        PatientName: hist.patient.firstName + " " + hist.patient.lastName,
                        NRIC : hist.patient.nric,
                        Medicine : Medicine_list
                    }
                );
            });
            setPrescriptionList(list);
        })
    }
    const DoseGiven = (id) => {
        console.log("Update Prescription Status");
        PrescriptionList.splice(PrescriptionList.indexOf(x => x.id === id), 1);
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
                                            <p><b>{x.NRIC}</b></p>
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