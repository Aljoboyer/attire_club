import React from 'react'
import DashboardLayout from '../../../components/Dasboard/DasboardLayout/DasboardLayout'
import { Table } from 'react-bootstrap'
import { useChangeOrderStatusMutation, useGetAllOrdersQuery } from '../../../redux/features/productApi';
import Swal from 'sweetalert2';

const ManageOrders = () => {

  const {data: allOrders, refetch} = useGetAllOrdersQuery({
                refetchOnMountOrArgChange: true,
              });
  const [changeOrderStatusTrigger, {}] = useChangeOrderStatusMutation()
  
  const updateStatus = async (status, id) => {
    const requestBody = {
        status: status
    }

    const response = await changeOrderStatusTrigger({requestBody, id})
    
          if(response.data?.msg == "Order updated"){
                
                Swal.fire({
                  title: "Success!",
                  text: "Order Status changed Successfully",
                  icon: "success"
                })
                refetch()
              }
              else{
                Swal.fire({
                  title: "Error!",
                  text: "Something went wrong",
                  icon: "error"
                })
              }
  }
  return (
    <DashboardLayout>
     <div  className='pl-[200px] py-4 flex flex-row justify-center'>
          <div className='w-full add_form'>
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>Customer Name</th>
              <th>Phone</th>
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
             allOrders?.map((item) => (
                <tr>
                 <td>{item?.customerName}</td>
                  <td>{item?.phone}</td>
                 <td>{item?.name}</td>
                  <td>{item?.location}</td>
                  <td>{item?.totalProdPrice}</td>
                  <td>{item?.pieces}</td>
                  <td>{item?.size}</td>
                <td>
                  {
                    item?.status == 'Pending' ? <div  className='flex flex-row'><button onClick={() => updateStatus('Canceled', item?._id)} className='bg-[#d84315] p-2 text-white edit_btn'>Cancel</button>
                  <button onClick={() => updateStatus('Approved', item?._id)} className='bg-[#00c853] ms-2 p-2 text-white edit_btn'>Approve</button></div> : 
                  <p>{item?.status}</p>
                  }
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