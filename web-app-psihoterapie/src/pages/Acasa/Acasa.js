import munte from './media/munte.jpg'

function AcasaPage() 
{
    return <div>
        <div className="m-6 flex flex-row bg-cover bg-[url('/src/pages/Acasa/media/chenar.png')]"> 
            <div className="w-2/4 text-center m-auto md:p-14 p-2">
                <div className="md:text-3xl text-left">Psihoterapie individuală și de grup</div>
                <div className="text-left"> -------- </div>
                <div className="text-left">Cucerește-ți propria viață!</div>
            </div>
            <div className="w-2/4">
                <img className="rounded-lg" src={munte} alt="view"></img>
            </div>
        </div>
</div>;
}

export default AcasaPage;