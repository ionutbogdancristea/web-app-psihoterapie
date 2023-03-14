import linie from '../../media/linie-chenar.png'

function ServiciiElement({items}) 
{
    return <div> 
    {items.map((item, index) => {
        return  (
            <div key={index}> 
              <div className="bg-[url('/src/components/ServiciiElement/media/chenar-servicii.png')] bg-no-repeat">
                <div className={(index % 2 === 0 ? "md:flex md:justify-between " : "md:flex md:flex-row-reverse md:justify-between ")+ "md:space-x-6 py-6 px-6 md:px-80 "}>
                    <img src={item.image} alt={item.alt} className="h-56"></img>
                    <div className="flex flex-col">
                        <div className='text-center mb-3'>
                            <div className="text-2xl text-ana-purple">
                                {item.title}
                            </div>
                            <img src={linie} alt="linie max-w-xs" className="mx-auto mt-1"/>
                        </div>
                        <div className="text-base text-gray-800">
                            {item.text}
                        </div>
                    </div>
                </div>
              </div>
            <div>&nbsp;</div>    
            <div>&nbsp;</div> 
            <div>&nbsp;</div>  
            </div>     
   
        )
    })}

    </div>;
}

export default ServiciiElement;