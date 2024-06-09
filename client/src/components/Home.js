import React from 'react'
import Table from 'react-bootstrap/Table';
const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn" mt-2>
                    <button className='btn btn-primary'> Add data</button>
                </div>
            </div>
            <Table striped bordered hover>
      <thead>
        <tr className='table-dark'>
          
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          
          <th>Mobile</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td className='d-flex justify-content-between'>
          <button className='btn btn-success'> <i class="fa-regular fa-eye"></i></button>
            <button className='btn btn-primary'><i class="fa-regular fa-pen-to-square"></i></button>
            <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td className='d-flex justify-content-between'>
          <button className='btn btn-success'> <i class="fa-regular fa-eye"></i></button>
            <button className='btn btn-primary'><i class="fa-regular fa-pen-to-square"></i></button>
            <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td className='d-flex justify-content-between'>
            <button className='btn btn-success'> <i class="fa-regular fa-eye"></i></button>
            <button className='btn btn-primary'><i class="fa-regular fa-pen-to-square"></i></button>
            <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </Table>

        </div>
    )
}

export default Home