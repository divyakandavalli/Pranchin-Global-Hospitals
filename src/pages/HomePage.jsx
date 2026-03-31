import React from 'react'
import BannerCarousel from '../components/home/BannerCarousel'
import AboutSection from '../components/home/AboutSection'
import HomeServices from '../components/home/HomeServices'
import HomeProcess from '../components/home/HomeProcess'
import BookAppointment from '../components/home/BookAppointment'
import Testimonials from '../components/home/Testimonials'
import FAQSection from '../components/home/FAQSection'

export default function HomePage() {
  return (
    <div>
      <BannerCarousel/>
      <AboutSection/>
      <HomeServices/>
      <HomeProcess/>
      <BookAppointment/>
      <Testimonials/>
      <FAQSection/>
    </div>
  )
}
