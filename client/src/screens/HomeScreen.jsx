import React from 'react';
import { Footer, Blog, Possibility, Features, WhatKeyLife, Header} from '../containers';
import {CTA, Brand, Navbar, Top} from '../components';

const HomeScreen = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatKeyLife />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <Top />
    </div>
  )
}

export default HomeScreen;