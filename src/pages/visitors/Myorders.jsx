import React from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { Table } from 'react-bootstrap'

const Myorders = () => {
  return (
    <VisitorLayout>
         <h1 className='my-7 font-bold text-blue-700 text-center'>Your Orders</h1>
       <div  className='p-[200px] py-4 flex flex-row justify-center'>
     
          <div className='w-full add_form'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Paid Amount</th>
                <th>Status</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
              [1,2,3,4,5]?.map((item) => (
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className='bg-[#d84315] p-2 text-white edit_btn'>Cancel</button>
                </td>
              </tr>
              ))
             }
            </tbody>
          </Table>
          </div>
        </div>
    </VisitorLayout>
  )
}

export default Myorders