import React from 'react'




const Aboutus = () => {
  return (
    <section className={'flex flex-col  bg-[#FFD8B9] py-20 text-sm md:text-3xl lg:text-4xl'}>
      <div className='container mx-auto px11 text-center'>
        <p className='lg:leading-[60px] leading-7 text-stone-900 mx-auto lg:text-4xl text-sm tracking-tight text-center'>
          <span className='lg:text-4xl text-sm  font-serif text-black -400 font-extrabold  '>
            IMR CARE
          </span>
          <br />
          The
          <span className='text-red-700 font-bold font-serif'>
            {' '}intelligent
          </span>
          {' '}choice for mobile & smartphone repair,
          backed by a team of {' '}
          <span className='text-yellow-600 font-serif font-bold'>
            expert
          </span>
          {' '}certified technicians
        </p>
      </div>

    </section>
  )
}

export default Aboutus
