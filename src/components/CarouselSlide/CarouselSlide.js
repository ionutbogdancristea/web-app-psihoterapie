import './noBlueHighlight.css'
import chenar from './media/chenar-articole.png'
import multe from './media/mai-mult.png'
import linie from '../../media/linie-chenar.png'

function CarouselSlide({image, alt, text, title}) 
{
    return <li className="relative">
      <div className="absolute m-10 mt-14">
        <img src={image} className="object-contain scale-150" alt={alt}/>
        <img src={linie} className="mx-auto mb-3" alt="linie la card articole"/>
        <div className="font-sourceserifvariableroman mb-2 md:text-xl text-center"> 
          {title} 
        </div>
        <div className="font-sourceserifvariableroman text-sm justify-center">
          {text}
        </div>   
        <a href="/" className="noBlueHighlight">
        <img src={multe} className="mt-1" alt="mai mult"/>   
        </a>
      </div>
      <img src={chenar} alt="chenar"></img>
  </li>;
}

export default CarouselSlide;