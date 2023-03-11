import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Checkbox, Form, Input, Typography, Divider, Timeline, Row, Col, Descriptions, Select, Space, Table, Tag } from 'antd';
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Option } = Select;
function PatientList() {
    let navigate = useNavigate();
    const [value, setValue] = useState('');
    const [type , setType] = useState('name');

    const onCurrencyChange = (newType) => {
        console.log(newType);
        setType(newType);
    };

    const Search=()=>{
        if(value == ''){
            window.alert("Value Required for Search");
            return;
        }
        console.log("Search => " + value + "  " + type);
    }
    const GoToDetail=(patient_id)=>{
        navigate('/PatientDetails', { state: { id: patient_id} });
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={()=>{GoToDetail(record.Id)}}>View Detail</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            Id : '123'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
            Id : '123'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
            Id : '123'
        },
    ];
    return (
        <div>
            <Title level={3}>Search Patient</Title>
            <Divider></Divider>
            <div style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Input
                    type="text"
                    value={value}
                    style={{
                        width: '40%',
                    }}
                    onChange={(val)=>{setValue(val.target.value)}}
                />
                <Select
                    value={type}
                    style={{
                        margin: '0 8px'
                    }}
                    onChange={onCurrencyChange}
                >
                    <Option value="name">Name</Option>
                    <Option value="nric">NRIC</Option>
                </Select>
                <Button type="primary" onClick={Search}>Search</Button>
            </div>
            <div style={{ width: '100%', marginTop:'5%' }}>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default PatientList;