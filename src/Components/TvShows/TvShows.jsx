import React, { useEffect } from 'react'
import ImagesSlider from '../Carousel/ImagesSlider'
import { SliderData } from '../Carousel/Sliderdata'

const TvShows = () => {

    

  return (
    <div>
        <ImagesSlider slides={SliderData} />
    </div>
  )
}

export default TvShows