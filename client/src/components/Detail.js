import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import CardContent from '@mui/material/CardContent';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import LocationOn from '@mui/icons-material/LocationOn';
const Detail = () => {
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
                            <h3 className='mt-3'> Name: <span>aman singhal</span></h3>
                            <h3 className='mt-3'> Age: <span>21</span></h3>

                            <p className='mt-3'><EmailIcon /> Email: <span> amansinghal904@gmail.com</span> </p>
                            <p className='mt-3'> <WorkIcon /> Occupation: <span> Dev</span> </p>
                        </div>
                        <div className="rightview col-lg-6 col-md-6 col-12" >

                            <p className='mt-4'><PhoneAndroidIcon /> <span>7073578125</span></p>
                            <p className='mt-4'><LocationOn /> <span>jaipur</span></p>
                            <p className='mt-4'>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam, quos nulla voluptatibus earum facilis sunt consectetur eius hic ut.</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Detail