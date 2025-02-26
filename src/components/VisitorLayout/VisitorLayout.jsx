import React from 'react'
import VisitorNavbar from '../Shared/VisitorNavbar/VisitorNavbar'
import Footers from '../Shared/Footers/Footers'

const VisitorLayout = ({children}) => {
  return (
    <main className='w-full'>
        <VisitorNavbar/>
        {children}
        <Footers/>
    </main>
  )
}

export default VisitorLayout