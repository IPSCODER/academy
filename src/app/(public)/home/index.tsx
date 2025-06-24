import React from 'react'
import HeroSection from './hero-section/HeroSection'
import FeaturedCourses from './featured-section/Index'
import Services from './services/Index'
import TestimonialSection from './testimonial/Index'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses/>
    <Services/>
    <TestimonialSection/>
    </>
  )
}

export default HomePage