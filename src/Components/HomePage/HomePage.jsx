import React, { useEffect } from 'react'
import './Homepage.css'
// import sliderImage_1 from '../Images/Prime-Image-1.webp'
import ImagesSlider from '../Carousel/ImagesSlider'
import { SliderData } from '../Carousel/Sliderdata'
import AllMovieList from '../AllMovieList/AllMovieList'

const HomePage = () => {

    useEffect(() => {
        // showSlideshow()
    },[])


  return (
    <div className='HomePage_Div_Compnent'>
        <ImagesSlider slides={SliderData} />
        <AllMovieList/>
        
    </div>
  )
}

export default HomePage