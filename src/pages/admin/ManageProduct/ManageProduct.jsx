import React from 'react'
import DashboardLayout from '../../../components/Dasboard/DasboardLayout/DasboardLayout'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const ManageProduct = () => {
  const navigate = useNavigate()
  return (
    <DashboardLayout>
        <div  className='pl-[200px] py-4 flex flex-row justify-center'>
          <div className='w-4/5 add_form'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Size</th>
                <th>Audience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
              [1,2,3,4,5]?.map((item) => (
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className='bg-[#d84315] p-2 text-white edit_btn'>Delete</button>
                  <button onClick={() => navigate('/dashboard/EditProduct')} className='bg-[#4527a0] ms-2 p-2 text-white edit_btn'>Edit</button>
                </td>
              </tr>
              ))
             }
            </tbody>
          </Table>
          </div>
        </div>
    </DashboardLayout>
  )
}

export default ManageProduct