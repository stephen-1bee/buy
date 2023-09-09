import React from 'react'
import Image from 'next/image'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center h-[10vh] w-full text-black bg-white px-24 ">
      <Link className='flex gap-2' href='/'>
        <Image  
          width={25}
          height={25}
          alt='logo'
          src='/logo.png'        
        />
        <h1 className='font-bold'>eBuy</h1>
      </Link>
     <div className='flex items-center gap-3  font-semibold'>      
     <h1>
        Hello, User
        </h1>          
          <button className='hover:bg-gray-200 px-2 py-2  duration-500 rounded-full'>          
          <ShoppingCartOutlinedIcon />            
        </button>
       
     </div>
    </div>
  )
}

export default Navbar