import React from 'react';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import HeroSection from './home/components/hero/hero.component';
import AboutSection from './home/components/about/about.component';
import ProductsSection from './home/components/products/products.component';
import CategoriesSection from './home/components/categories/categories.component';

const HomePage = () => (
  <div className="page main-page">
    <Header />
    <HeroSection />
    <CategoriesSection />
    <ProductsSection />
    <Footer />
    {/* <AboutSection /> */}
  </div>
);
export default HomePage;
