import React from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import Headers from '../../components/LandingComponents/Headers'
import Info from '../../components/LandingComponents/Info'
import CreativeTech from '../../components/LandingComponents/CreativeTech'
import ProductSec from '../../components/ProductCard/ProductSec'

const LandingPage = () => {
  return (
  <VisitorLayout>
    <div className='w-full'>
        <Headers/>
        <Info/>
        <ProductSec/>
        <CreativeTech/>
        <CreativeTech from="tech"/>
       
    </div>
  </VisitorLayout>
  )
}

export default LandingPage