import React, {useState} from 'react'
import './noBlueHighlight.css'
import butondreapta from './media/buton-mov-dreapta.png'
import butonstanga from './media/buton-mov-stanga.png'
import CarouselSlide from '../CarouselSlide/CarouselSlide'

const Carousel = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  const visibleItems = items
    .slice(currentIndex, currentIndex + 3)
    .concat(items.slice(0, currentIndex + 3 - items.length))
    .slice(0,3);

  return ( <div>
    {/* web version: */}
    <div className="hidden md:flex md:flex-row justify-center items-center m-2 list-none">
        <div className="flex flex-row">
        <img src={butonstanga} className="cursor-pointer object-none noBlueHighlight" alt="stanga" onClick={() => { handlePreviousClick()}}/>
        {visibleItems.map((item, index) => {
            return  (
                  <div className="" key={index}> 
                      <div className={`flex flex-col md:flex-row justify-center items-center`}> 
                        <div className="flex flex-row space-x-4">
                          <CarouselSlide image={item.image} alt={item.alt} text={item.text} title={item.title} article_anchor={item.article_anchor}/>
                        </div>
                      </div>
                  </div>               
            )
        })}
        <img src={butondreapta} className="cursor-pointer object-none noBlueHighlight" alt="dreapta" onClick={handleNextClick}/>
        </div>
    </div>

    {/* mobile version: */}
    <div className=" md:hidden justify-center items-center m-2 list-none">
        <div className="flex flex-row">
        <img src={butonstanga} className="cursor-pointer w-14 object-scale-down noBlueHighlight" alt="stanga" onClick={() => { handlePreviousClick()}}/>
        {items.map((item, index) => {
            return  (
                  <div className="" key={index}> 
                      <div className={`flex flex-col md:flex-row justify-center items-center`}> 
                        <div className={`flex flex-row space-x-4 ${index === currentIndex ? '':'hidden'}`}>
                          <CarouselSlide image={item.image} alt={item.alt} text={item.textMobile} title={item.title} article_anchor={item.article_anchor}/>
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

export default Carousel;