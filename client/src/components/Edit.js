import React, { useState, useEffect, } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata)

  const navigate = useNavigate("");

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    desc: ""
  })

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }
  const { id } = useParams("");
  console.log(id)



  const getdata = async () => {


    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },



    });

    const data = await res.json();


    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setINP(data)
      console.log("get data");
    }

  }
  useEffect(() => {
    getdata();
  }, [])


  const updateuser = async (e) => {
    e.preventDefault();
    const { address, age, desc, email, mobile, name, work } = inpval;
    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        address, age, desc, email, mobile, name, work
      })
    })
    const data2 = await res2.json();
    console.log(data2);
    if (res2.status === 422 || !data2) {
      alert("fill data");
    } else {
        alert("data added");
        navigate("/")
    }
  }




  return (
    <div className='container'>
      <NavLink to="/"> Home </NavLink>
      <Form className='mt-5'>
        <div className="row">
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control value={inpval.name} onChange={setdata} name="name" type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={inpval.email} onChange={setdata} name="email" type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control value={inpval.age} onChange={setdata} name="age" type="text" placeholder="Age" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Mobile</Form.Label>
            <Form.Control value={inpval.mobile} onChange={setdata} name="mobile" type="number" placeholder="Mobile" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Work</Form.Label>
            <Form.Control value={inpval.work} onChange={setdata} name="work" type="text" placeholder="Work" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control value={inpval.address} onChange={setdata} name="address" type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group className=" mb-3 col-lg-12 col-md-12 col-12" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control value={inpval.desc} onChange={setdata} name='desc' as="textarea" rows={3} />
          </Form.Group>


          <Button onClick={updateuser} variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Edit