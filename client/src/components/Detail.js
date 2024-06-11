import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import CardContent from '@mui/material/CardContent';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import LocationOn from '@mui/icons-material/LocationOn';
import { useParams } from 'react-router-dom';
const Detail = () => {

    const { id } = useParams("");
    console.log(id)

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata)

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
            setUserdata(data)
            console.log("get data");
        }

    }
    useEffect(()=>{
       getdata(); 
    },[])

    return (
        <div className='container mt-3'>
            <h1> welcome </h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='add_btn'>
                        <button className='btn btn-primary mx-2'><CreateIcon /></button>
                        <button className='btn btn-danger mx-2'><DeleteIcon /></button>
                    </div>
                    <div className="row">
                        <div className="leftview col-lg-6 col-md-6 col-12" >
                            <h3 className='mt-3'> Name: <span>{getuserdata.name}</span></h3>
                            <h3 className='mt-3'> Age: <span>{getuserdata.age}</span></h3>

                            <p className='mt-3'><EmailIcon /> Email: <span> {getuserdata.email}</span> </p>
                            <p className='mt-3'> <WorkIcon /> Occupation: <span> {getuserdata.work}</span> </p>
                        </div>
                        <div className="rightview col-lg-6 col-md-6 col-12" >

                            <p className='mt-4'><PhoneAndroidIcon /> <span>{getuserdata.mobile}</span></p>
                            <p className='mt-4'><LocationOn /> <span>{getuserdata.address}</span></p>
                            <p className='mt-4'>Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Detail