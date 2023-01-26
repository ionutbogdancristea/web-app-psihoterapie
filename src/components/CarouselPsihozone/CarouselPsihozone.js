import React, {useState} from 'react'
import './noBlueHighlight.css'
import butondreapta from './media/buton-albastru-dreapta.png'
import butonstanga from './media/buton-albastru-stanga.png'
import CarouselSlidePsihozone from '../CarouselSlidePsihozone/CarouselSlidePsihozone'

const CarouselPsihozone = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  const visibleItems = items
    .slice(currentIndex, currentIndex + 3)
    .concat(items.slice(0, currentIndex + 3 - items.length));

  return ( <div>
    {/* web version: */}
    <div className="hidden md:flex md:flex-row justify-center items-center m-2 list-none">
        <div className="flex flex-row space-x-4">
          <img src={butonstanga} className="cursor-pointer object-none noBlueHighlight" alt="stanga" onClick={() => { handlePreviousClick()}}/>
          {visibleItems.map((item, index) => {
              return  (
                    <div className="" key={index}> 
                        <div className={`flex flex-col md:flex-row justify-center items-center`}> 
                          <div className="flex flex-row space-x-4">
                            <CarouselSlidePsihozone text={item.text}/>
                          </div>
                        </div>
                    </div>               
              )
          })}
          <img src={butondreapta} className="cursor-pointer object-none noBlueHighlight" alt="dreapta" onClick={handleNextClick}/>
        </div>
    </div>

    {/* mobile version: */}
    <div className="md:hidden justify-center items-center m-2 list-none">
        <div className="flex flex-row space-x-1">
          <img src={butonstanga} className="cursor-pointer w-14 object-scale-down noBlueHighlight" alt="stanga" onClick={() => { handlePreviousClick()}}/>
          {items.map((item, index) => {
              return  (
                    <div className="" key={index}> 
                        <div className={`flex flex-col md:flex-row justify-center items-center`}> 
                          <div className={`flex flex-row space-x-4 ${index === currentIndex ? '':'hidden'}`}>
                            <CarouselSlidePsihozone text={item.text}/>
                          </div>
                        </div>
                    </div>               
              )
          })}
          <img src={butondreapta} className="cursor-pointer w-14 object-scale-down noBlueHighlight" alt="dreapta" onClick={handleNextClick}/>
        </div>
    </div>
    </div>
  )
}

export default CarouselPsihozone;