import React from 'react'

function NavBar() {
  return (
    <>
    <nav className='flex items-center justify-between px-3 mx-20 my-5 mb-7'>
        <div>
            <a href="https://www.nike.com/in/"><img src="/Images/Nike-logo.png" alt="Nike Logo" className='h-15 hover:bg-red-300 hover:rounded-full hover:p-2'/></a>
        </div>
        <div>
            <ul className='flex gap-8'>
                <li><a href="#" className='text-xl underline hover:text-blue-700'>Menu</a></li>
                <li><a href="#" className='text-xl underline hover:text-blue-700'>Home</a></li>
                <li><a href="#" className='text-xl underline hover:text-blue-700'>Contact us</a></li>
                <li><a href="#" className='text-xl underline hover:text-blue-700'>About us</a></li>
            </ul>
        </div>
        <div>
            <button className='px-2 py-1 text-white bg-red-500 border border-black rounded-md hover:bg-blue-700 hover:text-black'>Login</button>
        </div>
    </nav>
    
    </>
  )
}

export default NavBar