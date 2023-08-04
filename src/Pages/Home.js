import React from 'react'
import './Home.scss'
import Latest from '../Components/Latest/Latest'
import Slider from '../Components/Slider/Slider'


const Home = () => {
  return (
    <div className='home'>
      <Latest/>
      <Slider category="New Releases"/>
      <Slider category="Popular in your area"/>
    </div>
  )
}

export default Home