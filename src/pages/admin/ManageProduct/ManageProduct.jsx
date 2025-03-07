import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/Dasboard/DasboardLayout/DasboardLayout'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useDeleteProductMutation, useGetAllProductQuery } from '../../../redux/features/productApi'
import Swal from 'sweetalert2'

const ManageProduct = () => {
  const navigate = useNavigate()
  const {data: allProduct, refetch} = useGetAllProductQuery({
		refetchOnMountOrArgChange: true,
	  });
    
  const [productDeleteTrigger, {}] = useDeleteProductMutation()
  const [dltCount, setDltCount] = useState(0)

  useEffect(() => {
    refetch()
  },[dltCount])

    const deleteHandler = async (id) => {
      const result = await productDeleteTrigger(id)
       if(result.data?.msg == "Product Deleted Successfully"){
           
            Swal.fire({
              title: "Success!",
              text: "Product Deleted Successfully",
              icon: "success"
            })
            setTimeout(() => { setDltCount((prev) => prev + 1)},2000)
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
              allProduct?.map((item) => (
                <tr>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>{item?.size}</td>
                <td>{item?.gender}</td>
                <td>
                  <button onClick={() => deleteHandler(item?._id)} className='bg-[#d84315] p-2 text-white edit_btn'>Delete</button>
                  <button onClick={() => navigate(`/dashboard/EditProduct/${item?._id}`)} className='bg-[#4527a0] ms-2 p-2 text-white edit_btn'>Edit</button>
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