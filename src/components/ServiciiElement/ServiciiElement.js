import linie from './media/linie-la-card-articole.png'

function ServiciiElement({items}) 
{
    return <div> 
    {items.map((item, index) => {
        return  (
            <div key={index}> 
              <div className="bg-[url('/src/components/ServiciiElement/media/chenar-servicii.png')] bg-no-repeat">
                <div className={(index % 2 === 0 ? "md:flex md:justify-between " : "md:flex md:flex-row-reverse md:justify-between ")+ "md:space-x-6 p-6"}>
                    <img src={item.image} alt={item.alt} className="h-48"></img>
                    <div className="flex flex-col">
                        <div className='text-center'>
                            <div className="text-xl text-ana-purple">
                                {item.title}
                            </div>
                            <img src={linie} alt="linie max-w-xs" className="mx-auto"/>
                        </div>
                        <div>
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