import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import WebsiteIcon from '../../../assets/attire_icon.png'
import { useNavigate } from 'react-router'
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function VisitorNavbar() {
    const isLoggedIn = localStorage.getItem('attireclubtoken')
    const isEmail = localStorage.getItem('attireclubemail')

    const navigate = useNavigate()
  const productcounts = useSelector((state) => state.prodstore.productcount)
  

  return (
    <Disclosure as="nav" className="sticky top-0 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={WebsiteIcon}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                    <p onClick={() => navigate('/')}  className='mt-2 p-2 font-medium text-blue-800 nav_item bg-white block cursor-pointer'>Home</p>
                    <p onClick={() => navigate('/Allproduct')}  className='mt-2 p-2 font-medium text-blue-800 nav_item bg-white block cursor-pointer'>All Products</p>
                    <p className='mt-2 p-2 font-medium text-blue-800 nav_item bg-white block cursor-pointer'>About Us</p>
                    {
                      (isLoggedIn &&  isEmail !== 'admin@gmail.com' ) && <p onClick={() => navigate('/orders')} className='mt-2 p-2 font-medium text-blue-800 nav_item bg-white block cursor-pointer'>My Orders</p>
                    }
                    {
                     ( isLoggedIn && isEmail == 'admin@gmail.com') && <p onClick={() => navigate('/dashboard')} className='mt-2 p-2 font-medium text-blue-800 nav_item bg-white block cursor-pointer'>Dashboard</p>
                    }
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button onClick={() => {
                if(isLoggedIn){
                  navigate('/cart')
                }
                else{
                  navigate('/login')
                }
              }} className='rounded-full bg-blue-700 p-2 me-2 text-white flex flex-row mt-4'><FaCartArrowDown color='white' size={25} className='me-2'/> {productcounts}</button>
                {
                    isLoggedIn ? 
                   
            <Menu as="div" className="relative ml-3">
            <div className='flex flex-row'>
             
              <MenuButton className="relative flex rounded-full bg-[#e40f0a] text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden p-2 rounded-md">
                <CgProfile color='white' size={30}/>  
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <MenuItem>
                <p
                  
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                >
                  Your Profile
                </p>
              </MenuItem>
              <MenuItem>
                <p
                  onClick={() => {
                    localStorage.removeItem('attireclubtoken')
                    localStorage.removeItem('attireclubemail')
                    navigate('/login')
                  }}
                  // href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                >
                  Sign out
                </p>
              </MenuItem>
            </MenuItems>
          </Menu> : 
          <div>
            <button onClick={() => navigate('/login')} className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-medium p-2 w-28 mx-4 mt-4 text-[#e40f0a]'>Login</button>
            <button onClick={() => navigate('/registration')} className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-medium p-2 w-28 mx-4 mt-4 bg-[#e40f0a] text-white'>Register</button>
          </div>
                }
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base p-2 font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
