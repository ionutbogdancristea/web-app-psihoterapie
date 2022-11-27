import React, {useState} from 'react'
import { CarouselData } from '../../pages/Acasa/CarouselData'
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
        {/* <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
        Save Changes
        </button> */}
        <img src={butonstanga} className="cursor-pointer ml-2 animate-fade" alt="stanga" onClick={prevSlide}/>
        <div>
        {CarouselData.map((slide, index) => {
            return  (
                  <div className={"animate-fade " + index === current ? ' ':' '} key={index}> 
                  {index === current && 
                      <div className="flex flex-col md:flex-row justify-center items-center m-2"> 
                        <div className="font-museoslab100">
                          {slide.text}
                        </div>
                        <img src={slide.image} className="object-contain h-48 w-96" alt="slides"></img>
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