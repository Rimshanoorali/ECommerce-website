import 'antd/dist/reset.css';
import './App.css';
import { Button, Form, Select, Input, Table, message, Alert, DatePicker, TimePicker, Spin, Progress } from 'antd'
import { useState } from 'react';
import { PoweroffOutlined, UserOutlined} from '@ant-design/icons' ;
import TableFilters from './TabelFilters';

function App() {

  const [loading, setLoading] = useState(false)

  const fruits = ['Banana','Mango','Orange','Cherry']

  const [showAlert, setShowAlert] =  useState(false)

  const onButtonClick = (e) => {
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 2000);
  }

  const onFinish = (e) => {
     console.log(e)
     setTimeout(() =>{
      setShowAlert(true)
     }, 1000);
  }

  const data = [
    {
      name: 'Name1',
      age:10,
      address:'Address1',
      key: '1'
    },
    {
      name: 'Name2',
      age:20,
      address:'Address2',
      key: '2'
    },
    {
      name: 'Name3',
      age:30,
      address:'Address3',
      key: '3'
    }
  ] 

  const columns = [
    {
      title: 'Name',
      dataIndex:'name',
      key: 'key',
      render: name => {
        return<a>{name}</a>
      }
    },
    {
      title: 'Age',
      dataIndex:'age',
      key: 'key',
      sorter: (a,b) => a.age - b.age
    },
    {
      title: 'Address',
      dataIndex:'address',
      key: 'key'
    },
    {
    title: 'Graduated?',
    key: 'key',
    render: payload=>{
      return <p>{payload.age>20? 'True' : 'False'}</p>
      }
    },
  ]

  return (
    <div className="App">
    <header className='App-header'>

    <Table
    dataSource={data}
    columns={columns}>
    </Table>

     {showAlert && 
     <Alert type='error'
      message='Error'
      description='There are an error on login.'
      closable />
    }
    <Form onFinish={onFinish}>
      <Form.Item label='User Name' style={{color: 'white'}} name='username'>
       <Input placeholder='User Name' required></Input>
      </Form.Item>
      <Form.Item label='User Password' name='password'>
       <Input.Password placeholder='Password' required></Input.Password>
      </Form.Item>
      <Form.Item>
       <Button type='primary' htmlType='submit' block>Log In</Button>
      </Form.Item>
    </Form>

    <Button 
    type='primary'
    block
    loading={loading}
    icon={<PoweroffOutlined />}
    className='my-button'
    onClick={onButtonClick}>My First Button</Button>

    <Input.Search
    placeholder='Name'
    maxLength={10}
    prefix={<UserOutlined/>}
    allowClear
     >
    </Input.Search>

    <p>Which is your favourite fruits?</p>
    <Select mode='multiple'
     placeholder='Select Fruit' 
     style={{width:'50%'}}
     maxTagCount={2}
     allowClear>
      {fruits.map((fruit,index) => {
        return<Select.Option key={index} value={fruit}>{fruit}</Select.Option>
      })}
    </Select>

    <DatePicker picker='quarter' />
    <DatePicker.RangePicker picker='month'/>
    <TimePicker/>

    <Spin spinning={loading}></Spin>
     <Button onClick={() => {setLoading(preValue=>!preValue)}}>Toggle Spinning</Button>
    <Spin spinning={loading}>
    <p>p tag 1</p>
    <p>p tag 2</p>
    <p>p tag 3</p>
     </Spin>

     <Progress percent={33} />   
     <Progress percent={45} type='line' strokeColor='red' status='active'/> 
     <Progress percent={67} type='line' strokeColor='yellow' strokeWidth={50} status='active' /> 
     <Progress percent={12} type='line' status='success' steps={3} />
     <Progress percent={34} type='circle' /> 
     <Progress percent={38} type='circle' status='success' /> 
     <Progress percent={87} type='circle' status='failure' />
     <Progress percent={89} type='circle' status='exception' />

    
     
    

    </header>
    </div>
  );
}

export default App;
