import React, { useEffect } from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import Headers from '../../components/LandingComponents/Headers'
import Info from '../../components/LandingComponents/Info'
import CreativeTech from '../../components/LandingComponents/CreativeTech'
import ProductSec from '../../components/ProductCard/ProductSec'
import { useGetAllProductQuery } from '../../redux/features/productApi'

const LandingPage = () => {
  const {data: allProduct, refetch} = useGetAllProductQuery({
		refetchOnMountOrArgChange: true,
	  });
  
    useEffect(() => {
        refetch()
      },[])

  return (
  <VisitorLayout>
    <div className='w-full'>
        <Headers/>
        <Info/>
        <ProductSec allProduct={allProduct}/>
        <CreativeTech/>
        <CreativeTech from="tech"/>
       
    </div>
  </VisitorLayout>
  )
}

export default LandingPage