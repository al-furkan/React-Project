import React from 'react'
import Header from './../../components/Header/Header';
import Banner from '@/components/Banner/banner';
import Cards from '@/components/Cards/Cards';
import About from '@/components/About/About';
import AppPromotion from './../../components/AppPromotion/AppPromotion';
import Product from '@/components/Product/Product';
import Features from '@/components/Features/Features';
import AppScreenshots from './../../components/AppScreenshots/AppScreenshots';

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
    </>
  
  )
}

export default Home;