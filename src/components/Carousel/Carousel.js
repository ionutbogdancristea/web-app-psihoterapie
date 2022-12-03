import React, {useState} from 'react'
import './animation.css'
import { CarouselData } from '../../pages/Acasa/CarouselData'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import butondreapta from './media/buton-articole-dreapta.png'
import butonstanga from './media/buton-articole-stanga.png'

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0) 
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current+1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length-1 : current-1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="hidden md:flex md:flex-row justify-center items-center m-2">
        <img src={butonstanga} className="cursor-pointer ml-2" alt="stanga" onClick={prevSlide}/>
        <div>
        {CarouselData.map((slide, index) => {
            return  (
                  <div key={index}> 
                  {index === current && 
                      <div className="flex flex-col md:flex-row justify-center items-center m-2 fade-in-slide"> 
                        <ul className="flex flex-row">
                          <CarouselSlide slide={slide}/>
                          <CarouselSlide slide={slide}/>
                          <CarouselSlide slide={slide}/>
                        </ul>
                      </div>
                  }
                  </div>               
            )
        })}
        </div>
        <img src={butondreapta} className="cursor-pointer mr-2" alt="dreapta" onClick={nextSlide}/>
    </section>
  )
}

export default Carousel;