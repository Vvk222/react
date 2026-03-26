import React from 'react'

function Hero() {
  return (
    <>
    <main className='flex mx-20 gap-25 font-poppins italic font-600'>
        <div className='flex flex-col gap-5'>
            <div>
                <h1 className='font-bold leading-none text-8xl max-w-160'>YOUR FEET DESERVES BEST</h1>
            </div>
            <p className='text-gray-400 max-w-160 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quia distinctio fugiat illo, consequuntur, sequi officia atque corporis praesentium laborum quisquam eos nobis corrupti possimus quis, maxime nemo repellat quae error! Culpa repellat doloremque itaque laborum tempore deserunt error ipsum aut, vero libero quaerat! Exercitationem nobis iure sequi amet deleniti.</p>
            <div className='flex gap-5'>
                <button className='p-2 bg-red-500 border border-black rounded-lg'>Shop now</button>
                <button className='p-2 border border-black rounded-lg'>Category</button>
            </div>
            <div className='flex flex-col gap-2 mt-8'>
            <p>Also available on:</p>
            <div className='flex gap-6'>
                <img src="/Images/Amazon_icon.png" alt="Amazon Icon" className='w-10 h-10'/>
                <img src="/Images/Flipkart.png" alt="Flipkart" className='w-10 h-10' />
            </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <img src="/Images/Shoe.png" alt=" Nike Shoe" className='max-h-155' />
        </div>
    </main>
    
    </>
  )
}

export default Hero