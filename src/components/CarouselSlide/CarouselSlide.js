import chenar from './media/chenar-articole.png'

function CarouselSlide({slide}) 
{
    return <li className="">
    <img src={chenar}></img>
    <div className="font-sourceserifvariableroman text-sm">
      {slide.text}
    </div>
    <img src={slide.image} className="object-contain h-48 w-96" alt="slides"></img>
  </li>;
}

export default CarouselSlide;