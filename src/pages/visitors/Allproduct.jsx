import React, { useEffect, useState } from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { useGetAllProductQuery } from '../../redux/features/productApi';
import ProductCard from '../../components/ProductCard/ProductCard';

const Allproduct = () => {
     const {data: allProduct, refetch} = useGetAllProductQuery({
            refetchOnMountOrArgChange: true,
          });
     
    const [products, setProducts] = useState([])

    useEffect(() => {
        refetch()
        },[])

    useEffect(() => {
       if(allProduct?.length > 0){
        setProducts(allProduct)
       }
        },[allProduct?.length])
    
    const filterHandler = (filterVal) => {
        const filterData = allProduct?.filter((item) => item.gender == filterVal)
        setProducts(filterData)

    }
  return (
    <VisitorLayout>
        <div className='flex flex-row justify-evenly'>
        <button onClick={() => filterHandler('male')} className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-medium p-2 w-28 mx-4 mt-4 text-[#e40f0a] block'>Male</button>
        <button onClick={() => filterHandler('female')} className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-medium p-2 w-28 mx-4 mt-4 text-[#e40f0a] block'>Female</button>
        <button onClick={() => filterHandler('kids')} className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-medium p-2 w-28 mx-4 mt-4 text-[#e40f0a] block'>Kids</button>
        </div>
      <div className='grid grid-cols-3 gap-4 ml-7 mt-4'>
        {
            products?.map((item) => (
                <ProductCard item={item}/>
            ))
        }
      </div>
    </VisitorLayout>
  )
}

export default Allproduct