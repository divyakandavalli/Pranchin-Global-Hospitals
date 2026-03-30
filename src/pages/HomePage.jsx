import React from 'react'
import BannerCarousel from '../components/home/BannerCarousel'
import AboutSection from '../components/home/AboutSection'
import HomeServices from '../components/home/HomeServices'
import HomeProcess from '../components/home/HomeProcess'
import BookAppointment from '../components/home/BookAppointment'

export default function HomePage() {
  return (
    <div>
      <BannerCarousel/>
      <AboutSection/>
      <HomeServices/>
      <HomeProcess/>
      <BookAppointment/>
    </div>
  )
}
