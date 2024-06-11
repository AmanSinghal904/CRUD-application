import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

  const [inpval,setINP] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    address:"",
    desc:""
  })

  const setdata = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target;
    setINP((preval)=>{
      return {
        ...preval,
        [name]:value
      }
    })
  }
  const addinpdata= async(e)=>{
    e.preventDefault();
    const {address,age,desc,email,mobile,name,work}=inpval;

    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        address,age,desc,email,mobile,name,work

      })
    })

    const data = await res.json();
    console.log(data)

    if(res.status === 404 || !data){
      alert("error");
      console.log("error");
    }else{
      alert("data added");
      console.log("data added");
    }

  }

  return (
    <div className='container'>
      <NavLink to="/"> Home </NavLink>
      <Form className='mt-5'>
        <div className="row">
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control value = {inpval.name} onChange={setdata}  name="name" type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value = {inpval.email} onChange={setdata} name="email" type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control value = {inpval.age} onChange={setdata} name="age" type="text" placeholder="Age" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Mobile</Form.Label>
            <Form.Control value = {inpval.mobile} onChange={setdata} name="mobile" type="number" placeholder="Mobile" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Work</Form.Label>
            <Form.Control value = {inpval.work} onChange={setdata} name="work" type="text" placeholder="Work" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control value = {inpval.address} onChange={setdata} name="address" type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group className=" mb-3 col-lg-12 col-md-12 col-12" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control value = {inpval.desc} onChange={setdata} name='desc'  as="textarea" rows={3} />
          </Form.Group>


          <Button onClick ={addinpdata} variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Register