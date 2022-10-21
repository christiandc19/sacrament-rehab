import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import InsuranceSection from './components/insurance/InsuranceSection';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <InsuranceSection />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;
