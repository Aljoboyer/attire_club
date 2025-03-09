import React from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { Table } from 'react-bootstrap'
import { useChangeOrderStatusMutation, useGetAllOrdersQuery } from '../../redux/features/productApi';
import Swal from 'sweetalert2';

const Myorders = () => {

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
                <th>Pieces</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
              allOrders?.map((item) => (
                <tr>
                <td>{item?.name}</td>
                <td>{item?.totalProdPrice}</td>
                <td>{item?.status}</td>
                <td>{item?.size}</td>
                <td>{item?.pieces}</td>
                <td>
                  {
                    item?.status == 'Pending' ? <button onClick={() => updateStatus('Canceled', item?._id)} className='bg-[#d84315] p-2 text-white edit_btn'>Cancel</button> : 
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
    </VisitorLayout>
  )
}

export default Myorders