import React from 'react'

const Yimrc = () => {
    return (
        <div id='about' className='text-white bg-gray-300 text-lg p-2 xl:p-7 py-20  text-center'>
            <h1 className='text-cyan-950 text-3xl pt-16'>Why IMR Care</h1>
            <h1 className='text-cyan-700 text-lg mb-10'>Solution for every problem</h1>
            <div className='text-black grid grid-cols-3 gap-1 md:gap-10 mb-24 font-bold'>
                <div className='grid justify-items-center text-md md:text-lg gap-0' ><img src='whyIMRC/calendar.png' className='h-12 md:h-20 ' />1 Day Service<p className='text-sm text-slate-700 font-normal'>We repair devices in just 1 day!</p></div>
                <div className='grid justify-items-center text-sm md:text-lg gap-0'><img src='whyIMRC/All-Brands-&-Models.png' className='h-12 md:h-20 '/><p className=''>All Brands & Models</p><p className='md:text-sm text-slate-700 font-normal'>We repair allmost all mobile brands and models!</p></div>
                <div className='grid justify-items-center text-md md:text-lg gap-0'><img src='whyIMRC/mechanic.png' className='h-12 md:h-20 '/><p className=''>Expert Technicians</p><p className='text-sm text-slate-700 font-normal'>Certified professional team repair your device!</p></div>
                <div className='grid justify-items-center text-md md:text-lg gap-0'><img src='whyIMRC/calendar-3.png' className='h-12 md:h-20 '/><p className=''>90 Days Warranty</p><p className='text-sm text-slate-700 font-normal'>Genuine products with a warranty of 3 months!</p></div>
                <div className='grid justify-items-center text-md md:text-lg gap-0'><img src='whyIMRC/phone_parts.png' className='h-12 md:h-20 '/><p className=''>Genuine Parts</p><p className='text-sm text-slate-700 font-normal'>We provide quality & genuine products only!</p></div>
                <div className='grid justify-items-center text-md md:text-lg gap-0'><img src='whyIMRC/secure_data.png' className='h-12 md:h-20 '/><p className=''>Data Security</p><p className='text-sm text-slate-700 font-normal'>Don't worry, your data is safe with us!</p></div>
            </div>
            <div className='text-black text-lg mb-24 '>
                <p className='text-cyan-950 text-3xl' >How to book </p>
                <p className='text-cyan-700 text-lg mb-10'>IMR Care Service Center?</p>
                <div className='grid grid-cols-3 justify-items-center font-bold'>
                    <div className='grid justify-items-center text-sm md:text-lg'><img src='whyIMRC/booking.png' className='hover:bg-blue-600 hover:rounded-2xl hover:p-1 m-2 hover:text-white h-12 md:h-20 ' /><p>Book Your Repair</p></div>
                    <div className='grid justify-items-center text-sm md:text-lg'><img src='whyIMRC/expert.png' className='hover:bg-blue-600 hover:rounded-2xl hover:p-1 m-2 hover:text-white h-12 md:h-20' /><p>Expert Visit</p></div>
                    <div className='grid justify-items-center text-sm md:text-lg'><img src='whyIMRC/pay.png' className='hover:bg-blue-600 hover:rounded-2xl hover:p-1 m-2 hover:text-white h-12 md:h-20' /><p>Repair & Pay</p></div>
                </div>
            </div>
            <div>
                <p className='text-cyan-950 text-3xl' >We Repair</p>
                <p className='text-cyan-700 text-lg mb-10'>We Repair Almost Every Issue in Your Phone</p>
                <div className='grid grid-cols-3 md:grid-cols-4 justify-items-center text-black gap-3 md:gap-10 font-bold mb-20'>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/broken.png' className='h-12 md:h-20' />Display Replacement</div>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/mobile-phone.png' className='h-12 md:h-20' />Display Glass Replacement</div>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/computer.png' className='h-12 md:h-20' />Software Issue</div>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/signal.png' className='h-12 md:h-20' />Network Issue</div>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/electricity.png' className='h-12 md:h-20' />Charging, battery replacement</div>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/dual-camera.png' className='h-12 md:h-20' />Mobile Camera Replacement</div>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/smartphone.png' className='h-12 md:h-20' />Water Damage Phone</div>
                    <div className='grid justify-items-center gap-1 md:gap-3 text-sm md:text-lg'><img src='whyIMRC/speaker.png' className='h-12 md:h-20' />Speaker , Mic Problem</div>
                </div>
            </div>
        </div>
    )
}

export default Yimrc