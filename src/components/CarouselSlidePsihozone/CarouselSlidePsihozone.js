import './noBlueHighlight.css'

function CarouselSlidePsihozone({text}) 
{
    return <li className="relative">
        <div className="font-sourceserifvariableroman text-sm justify-center p-4 rounded-lg shadow-lg md:shadow-3xl space-y-2 max-w-3xl bg-ana-light-blue">
          {text}
        </div>
  </li>;
}

export default CarouselSlidePsihozone;