import chenar from './media/chenar.png'
import munte from './media/munte.jpg'

function AcasaPage() 
{
    return <div>
            <figure class="relative flex flex-row">
                <img class="max-w-full h-auto" src={chenar} alt="purple background"/>
                <figcatpion class="absolute top-6 px-4 text-lg text-white">
                    <div class="flex flex-row">
                        <div>
                            <p>Psihoterapie individuală și de grup</p>
                            <p>Cucerește-ți propria viață!</p> 
                        </div>
                        <div>
                            <img class="max-w-lg h-auto rounded-lg" src={munte} alt="view"></img>
                        </div>
                    </div>
                </figcatpion>
            </figure>
            <div class="flex flex-row">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            </div>
</div>;
}

export default AcasaPage;