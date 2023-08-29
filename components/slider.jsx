import React, { useEffect, useRef } from 'react';

const Slider = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollInterval;

        const startScroll = () => {
            scrollInterval = setInterval(() => {
                container.scrollLeft += 2; // Adjust the scroll speed as needed
            }, 20); // Adjust the scroll delay as needed
        };

        const stopScroll = () => {
            clearInterval(scrollInterval);
        };

        container.addEventListener('mouseenter', startScroll);
        container.addEventListener('mouseleave', stopScroll);

        return () => {
            container.removeEventListener('mouseenter', startScroll);
            container.removeEventListener('mouseleave', stopScroll);
        };
    }, []);

    return (
        <div ref={containerRef} style={{ scrollBehavior: 'auto', overflow: 'auto', display: 'flex',  }} className='bg-black pb-10 pt-10 pl-10 pr-10'>
            <img src="whyIMRC/img-1.jpg" alt="Image 1" style={{ marginRight: '10px' }} className='p-2 bg-black mt-[2%] h-[45%] w-[55%]' />
            <img src="whyIMRC/img-2.jpg" alt="Image 2" style={{ marginRight: '10px' }} className='p-2 bg-black mt-[2%] h-[45%] w-[55%]' />
            <img src="whyIMRC/img-3.jpg" alt="Image 3" style={{ marginRight: '10px' }} className='p-2 bg-black mt-[2%] h-[45%] w-[55%]' />
            <img src="whyIMRC/img-4.jpg" alt="Image 1" style={{ marginRight: '10px' }} className='p-2 bg-black mt-[2%] h-[45%] w-[55%]' />
        </div>
    );
};

export default Slider;