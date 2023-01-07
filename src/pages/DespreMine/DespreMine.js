import Contact from '../../components/Contact/Contact';
import ana from './media/ana.png'
import { text1, text2, text3, text4 } from './DespreMineData';
import linie from '../../media/linie-chenar-jum.png';

function DespreMinePage() 
{
    return <div className="bg-[url('/src/pages/DespreMine/media/fundal-servicii_0.png')] bg-no-repeat">
        <div className="p-14">
        <div className="flex md:flex-row-reverse flex-col">
            <img src={ana} alt="profil" className="md:h-64 md:ml-6 mb-14"></img>
            <div>
                <div className="text-2xl md:text-3xl text-ana-purple font-sourceserifvariableroman">
                    Să ne cunoaștem!
                </div>
                <img src={linie} alt="linie" className="pb-4"/>
                <div className="ml-4 font-sourceserifvariableroman text-lg">
                    {text1}
                </div>
                <div>&nbsp;</div>
                <div className="ml-4 font-sourceserifvariableroman text-lg">
                    {text2}
                </div>
            </div>
        </div> 

            <div className="text-2xl md:text-3xl text-ana-purple font-sourceserifvariableroman mt-10">
                Viziunea mea
            </div>
            <img src={linie} alt="linie" className="pb-4"/>
            <div className="ml-4 mr-8 font-sourceserifvariableroman text-lg">
                {text3}
            </div>

            <div className="text-2xl md:text-3xl text-ana-purple font-sourceserifvariableroman mt-12 md:mt-16">
                Misiunea mea
            </div>
            <img src={linie} alt="linie" className="pb-4"/>
            <div className="ml-4 mr-8 font-sourceserifvariableroman text-lg pb-12">
                {text4}
            </div>
        </div>
            <Contact/>
    </div>;
}   

export default DespreMinePage;