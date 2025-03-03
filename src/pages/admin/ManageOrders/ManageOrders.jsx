import React from 'react'
import DashboardLayout from '../../../components/Dasboard/DasboardLayout/DasboardLayout'
import { Table } from 'react-bootstrap'

const ManageOrders = () => {
  return (
    <DashboardLayout>
     <div  className='pl-[200px] py-4 flex flex-row justify-center'>
          <div className='w-full add_form'>
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>Customer Name</th>
                <th>Product Name</th>
                <th>Location</th>
                <th>Paid Amount</th>
                <th>Total Piece</th>
                <th>Size</th>
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
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className='bg-[#d84315] p-2 text-white edit_btn'>Delete</button>
                  <button  className='bg-[#00c853] ms-2 p-2 text-white edit_btn'>Approve</button>
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

export default ManageOrders