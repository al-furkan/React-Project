import React from 'react'
import Header from './../../components/Header/Header';
import Banner from '@/components/Banner/banner';
import Cards from '@/components/Cards/Cards';
import About from '@/components/About/About';
import AppPromotion from './../../components/AppPromotion/AppPromotion';
import Product from '@/components/Product/Product';
import Features from '@/components/Features/Features';
import AppScreenshots from './../../components/AppScreenshots/AppScreenshots';
import Testimonial from '@/components/Testimonial/Testimonial';
import Download from '@/components/Download/Download';
import Footer from '@/components/Footer/Footer';

const Home = () => {
  return (
    <>
     < Header />
      <Banner />
      <Cards />
      <About />
      <AppPromotion />
      < Product />
      <Features />
      <AppScreenshots />
      <Testimonial />
      <Download />
      <Footer />
    </>
  
  )
}

export default Home;