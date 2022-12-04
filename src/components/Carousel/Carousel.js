import React, {useState} from 'react'
import './animation.css'
import { CarouselData, CarouselDataMobile } from '../../pages/Acasa/CarouselData'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import butondreapta from './media/buton-articole-dreapta.png'
import butonstanga from './media/buton-articole-stanga.png'

const Carousel = ({slides},{slidesMobile}) => {
  const [current, setCurrent] = useState(0) 
  const [currentMobile, setCurrentMobile] = useState(0) 
  const length = slides.length
  const lengthMobile = CarouselDataMobile.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current+1)
  }

  const nextSlideMobile = () => {
    setCurrentMobile(currentMobile === lengthMobile - 1 ? 0 : currentMobile+1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length-1 : current-1)
  }

  const prevSlideMobile = () => {
    setCurrentMobile(currentMobile === 0 ? lengthMobile-1 : currentMobile-1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="flex flex-row justify-center items-center m-2 list-none">
        <div className="hidden md:flex">
        <img src={butonstanga} className="cursor-pointer object-none" alt="stanga" onClick={prevSlide}/>
        {CarouselData.map((slide, index) => {
            return  (
                  <div key={index}> 
                  {index === current && 
                      <div className="flex flex-col md:flex-row justify-center items-center fade-in-slide"> 
                        <div className="flex flex-row space-x-4">
                          <CarouselSlide image={slide.image1} alt={slide.alt1} text={slide.text1} title={slide.title1}/>
                          <CarouselSlide image={slide.image2} alt={slide.alt2} text={slide.text2} title={slide.title2}/>
                          <CarouselSlide image={slide.image3} alt={slide.alt3} text={slide.text3} title={slide.title3}/>
                        </div>
                      </div>
                  }
                  </div>               
            )
        })}
        <img src={butondreapta} className="cursor-pointer object-none" alt="dreapta" onClick={nextSlide}/>
        </div>

        <div className="md:hidden flex flex-row">
        <img src={butonstanga} className="cursor-pointer object-none" alt="stanga" onClick={prevSlideMobile}/>
        {CarouselDataMobile.map((slide, index) => {
            return  (
                  <div key={index}> 
                  {index === currentMobile && 
                      <div className="flex flex-col md:flex-row justify-center items-center fade-in-slide"> 
                        <div className="flex flex-row space-x-4">
                          <CarouselSlide image={slide.image1} alt={slide.alt1} text={slide.text1} title={slide.title1}/>
                        </div>
                      </div>
                  }
                  </div>               
            )
        })}
        <img src={butondreapta} className="cursor-pointer object-none" alt="dreapta" onClick={nextSlideMobile}/>
        </div>
    </div>
  )
}

export default Carousel;