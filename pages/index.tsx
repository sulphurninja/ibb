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
      <div className='bg-white grid grid-cols-1 md:grid-cols-2'>
       
        <div className='mx-4'>
          <Aboutus />
        </div>
        <div>
          <img src='/hero2.gif' />

        </div>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 bg-white'>

        <div className=''>
          <img src='/ser.gif' className=' object-contain w-full h-32 md:h-full' />
        </div>
        <div className=''>
        <Skills />

        </div>

         <div>
          <img src='/magic.gif' className='mt-12' />
        </div>
      </div>
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

