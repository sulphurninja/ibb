import Head from 'next/head';
import { Inter } from '@next/font/google';
import Masthead from '../components/masthead';
import Aboutus from '../components/aboutus';
import Skills from '../components/skills';
import OrderForm from '../components/orderform'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Yimrc from '../components/Yimrc'
import Slider from '../components/slider'
import { GetServerSideProps, NextPage } from 'next';
import CategoriesCards from '../components/orderform';
import Mobile3d from '../components/Mobile3d';
import Redmi3d from '../components/Redmi3d';
import Huawei3d from '../components/Huawei3d';
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

// interface IPropTypes {
//   categories: {
//     items: ICategory[];
//   };
//   mobiles:{
//     items: IMobile[];
//   }
// }

const Home: NextPage = () => {

  return (
    <div>


      <Head>
        <title>IMR Care-Home</title>
        <meta name="description" content="IMR CARE Mobile Phone Repair, All Brands Phone Repair and Premium Service  at your fingertips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <Masthead /> */}
      {/* <CardProfile /> */}
      <div className='bg-[#FFD8B9]  md:min-h-screen grid-cols-1 grid '>

        <Aboutus />

        <div className='   grid grid-cols-3  '>
          <div>
            <Mobile3d />

          </div>
          <div>
            <Redmi3d />

          </div>
          <div>
            <Huawei3d />

          </div>
        </div>
      </div>

      <Skills />



      <Slider />
      <Yimrc />

      <section id='mobiles' className='bg-black '>
        {/* <Tabs categories={categories.items} /> */}
        <div>
          {/* <div className='mt-[-10%]'> */}
          <CategoriesCards />

        </div>
        {/**Mobiles */}
        {/* <MobileList mobiles={mobiles.items} /> */}

      </section>
      <Footer />

    </div>
  )
};

export default Home;

