"use client"

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between mx-auto p-4 bg-white shadow-md w-11/12'>
      
      <div className='flex items-center gap-2'>
        
     
        <Image src={'/doc logo.png'}
          height={150}
          width={150}
            className="h-10 w-auto"
          alt='logo'></Image>
        
  
        <h2 className='font-bold text-2xl'>DocAppoint</h2>
        
      
    </div>
      
   
     
        
     
      <ul className='flex justify-between gap-3'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/AllAppointment'}>All Appointment</Link></li>
       
        <li><Link href={'/dashboard'}>Dashboard</Link></li>



      </ul>

   


   
      <ul className='flex justify-between gap-3 '>
      
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/Register'}>Register</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;