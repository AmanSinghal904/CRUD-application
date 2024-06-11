import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';

const Home = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {


    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },



    });

    const data = await res.json();
    console.log(data)

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data)
      console.log("get data");
    }

  }
  useEffect(() => {
    getdata();
  }, [])

  const deleteuser = async(id)=>{
    const res2 = await fetch(`/deleteuser/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const deletedata = await res2.json();
    console.log(deletedata)
    if(res2.status === 422 || !deletedata){
      console.log("error");
    }else{
        console.log("data deleted");
        getdata();
    }
  }
  

  return (
    <div className='mt-5'>
      <div className="container">
        <div className="add_btn" mt-2>
          <button id="addbtn" className='btn btn-primary'><a href="/register"> Add data </a></button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr className='table-dark'>

            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Job</th>
            <th>Mobile</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {
            getuserdata.map((element, id) => {
              return (
                <>
                  <tr>
                    <td>{id+1}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.work}</td>
                    <td>{element.mobile}</td>
                    <td className='d-flex justify-content-between'>
                      <NavLink to={`view/${element._id}`}><button className='btn btn-success'> <RemoveRedEyeIcon /></button></NavLink>
                      <NavLink to = {`edit/${element._id}`}><button className='btn btn-primary'><CreateIcon /></button></NavLink>
                      <button onClick={()=>deleteuser(element._id)} className='btn btn-danger'><DeleteIcon /></button>
                    </td>
                  </tr>
                </>
              )
            })
          }


        </tbody>
      </Table>

    </div>
  )
}

export default Home