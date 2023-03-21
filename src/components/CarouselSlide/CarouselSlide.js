import { HashLink as Link } from 'react-router-hash-link';
import './noBlueHighlight.css'
import chenar from './media/chenar-articole.png'
import multe from './media/mai-mult.png'
import linie from '../../media/linie-sus.png'

function CarouselSlide({image, alt, text, title, article_anchor}) 
{   
    return <li className="relative">
      <div className="absolute m-10 md:mt-16">
        <img src={image} className="mb-3" alt={alt}/>
        <img src={linie} className="mx-auto mb-3" alt="linie la card articole"/>
        <div className="mb-4 md:mb-7 md:text-2xl text-center"> 
          {title} 
        </div>
        <div className="text-sm justify-center md:mx-6 md:tracking-wide">
          {text}
        </div>   
        <Link to={`/blog#${article_anchor}`} className="noBlueHighlight">
          <img src={multe} className="mt-1 md:ml-6" alt="mai mult"/>   
        </Link>
      </div>
      <img src={chenar} alt="chenar"></img>
  </li>;
}

export default CarouselSlide;