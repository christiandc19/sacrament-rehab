import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Testimonials from '../components/testimonials/Testimonials'
import TestimonialsSection from '../components/testimonials/TestimonialsSection'

const TestimonialsPage = () => {
    return (
        <>
           <Navbar /> 
           <Testimonials />
           <TestimonialsSection />
           <Footer />
        </>
    )
}

export default TestimonialsPage
