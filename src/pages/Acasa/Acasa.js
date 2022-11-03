import acasa from './media/acasa.jpeg'
import line from './media/white_line.png'

function AcasaPage() 
{
    return <div>
        <div className="bg-[url('/src/pages/Acasa/media/chenar.png')] bg-no-repeat">
            <div>&nbsp;</div>
            <div className="flex flex-row items-center justify-center space-x-24"> 
                <div className="text-center">
                        <div className="text-left md:text-3xl font-museoslab300 text-white">Psihoterapie individuală și de grup</div>
                        <img src={line} alt="linie" className="w-16"/>
                        <div className="text-left md:text-2xl font-museoslab300 text-white">Cucerește-ți propria viață!</div>
                </div>
                <img className="rounded-lg object-contain max-w-md" src={acasa} alt="view"></img>
            </div>
            <div>&nbsp;</div>
        </div>
</div>;
}

export default AcasaPage;