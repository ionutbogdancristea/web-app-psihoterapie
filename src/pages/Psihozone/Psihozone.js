import linie from '../../media/linie-chenar-jum.png'
import poza from './media/poza_50.png'
import creative from './media/creative-area-logo.png'
import Carousel from '../../components/Carousel/Carousel';
import { CarouselData } from './CarouselData';

function PsihozonePage() 
{
    return <div className="bg-[url('/src/pages/Psihozone/media/fundal.png')] bg-no-repeat">
        <div className="p-8">
            <div className="flex flex-col md:flex-row md:space-x-32 items-center justify-center mb-6">
                <div className=''>
                    <div className="text-3xl text-ana-blue font-sourceserifvariableroman">
                        Ateliere de dezvoltare personală
                    </div>  
                    <img src={linie} alt="linie" className=""/>
                    <div className="font-sourceserifvariableroman text-xl">
                        Pentru copii și adolescenți
                    </div> 
                </div>
                <div>
                    <img src={poza} alt="poza" className="w-64 md:my-0 md:mt-0 mt-4"/>
                </div>
            </div>

            <div className="font-sourceserifvariableroman text-xl md:w-3/5 mb-4">Proiectul PsihoZone a luat naștere din dorința de a oferi copiilor și adolescenților o altă perspectivă, mai prietenoasă, mai practică și mai interactivă asupra a ceea ce înseamnă educația.</div>
            <div className="font-sourceserifvariableroman text-xl md:w-3/5 ml-auto mb-4">Sunt de părere că cea mai bună investiție este în viitor, astfel vreau să contribui la formarea generațiilor următoare prin programe și ateliere de psihoeducație, ce au rolul de a facilita învățarea despre sine și despre mediul înconjurător, într-o manieră plăcută și interactivă, abordând teme precum: creativitatea, gândirea critică, emoțiile, motivația și alte subiecte de interes pentru tine.</div>
            
            <div className="md:ml-12 text-3xl text-ana-blue font-sourceserifvariableroman md:text-left">Ateliere</div>
            <img src={linie} alt="linie" className="w-16 md:ml-12 mb-6"/>
            
            <div className="text-2xl text-ana-blue font-sourceserifvariableroman text-center">Creative Area</div>

            <div className="md:flex md:items-center my-3 md:ml-6">
                <img src={creative} alt="linie" className="mx-auto m-3 md:m-0"/>
                <div className="md:mx-12 p-3 font-sourceserifvariableroman text-xl bg-amber-200 text-zinc-800 rounded-lg text-justify">Creativitatea este o trăsatură umană fără de care nu am fi putut evolua ca specie. Deși de multe ori o asociem cu artiști, scriitori sau inventatori, de fapt, în fiecare dintre noi există un potențial creativ înnăscut, gata să fie descoperit și explorat.</div>
            </div>

            <div className="font-sourceserifvariableroman text-xl md:text-center my-5">Creativitatea poate fi folosită atât în salturi mari, cât și în salturi mici; de la invenții, descoperiri și produse inovatoare, până la rezolvarea unor probleme cotidiene, dinamizarea relațiilor cu ceilalți, creșterea stării de bine și aducerea noului într-o activitate pe care o desfășurăm.</div>
            <div className="font-sourceserifvariableroman text-xl md:text-center my-5">Haideți să descoperim împreună cum ne putem dezvolta latura creativă, prin diverse jocuri și activități interactive, pe care le putem aplica ulterior și în viața de zi cu zi.</div>
            
            <div className="font-sourceserifvariableroman text-2xl text font-semibold">Structură atelier</div>
            <img src={linie} alt="linie" className="w-16 mb-6"/>
            
            <div className="font-sourceserifvariableroman text-xl md:flex justify-between md:mx-72 my-6 space-y-4 md:space-y-0">
                <div className="py-2 px-8 border-solid border-2 rounded-lg border-gray-400 shadow-lg md:shadow-3xl">
                    <div className="font-semibold">Grupa A</div>
                    <div>9 - 12 ani</div>
                </div>
                
                <div className="py-2 px-8 border-solid border-2 rounded-lg border-gray-400 shadow-lg md:shadow-3xl">
                    <div className="font-semibold">Grupa B</div>
                    <div>13 - 15 ani</div>
                </div>
                
                <div className="py-2 px-8 border-solid border-2 rounded-lg border-gray-400 shadow-lg md:shadow-3xl">
                    <div className="font-semibold">Grupa C</div>
                    <div>16 - 19 ani</div>
                </div>
            </div>
            
            <div className="md:ml-6 my-8 space-y-3">
                <div className="font-sourceserifvariableroman text-xl">Număr participanți: 6 - 8 persoane/ grupă</div>
                <div className="font-sourceserifvariableroman text-xl">Frecvența: o întâlnire durează 90 minute, o dată pe săptămână.</div>
                <div className="font-sourceserifvariableroman text-xl">Durata: Atelierul are 2 module, a câte 6 ședințe fiecare. Total 12 ședințe.</div>
                <div className="font-sourceserifvariableroman text-xl">Preț: 100 lei/ședință. Prețul pentru primul modul, achitat integral în avans, este de 550 lei, iar pentru ambele module este de 1100 lei.</div>
                <div className="font-sourceserifvariableroman text-xl">Programări: psihozonecenter@gmail.com; tel. +40764862668
                </div>
            </div>

            <div className="font-sourceserifvariableroman text-2xl text font-semibold">Tematici</div>
            <img src={linie} alt="linie" className="w-16 mb-6"/>

            <ul className="font-sourceserifvariableroman mx-auto mb-20 p-4 bg-green-300 text-2xl rounded-lg shadow-lg md:shadow-3xl space-y-2 max-w-3xl">
                <li>Ce este creativitatea?</li>
                <li>De ce avem nevoie de creativitate?</li>
                <li>Prejudecăți despre creativitate și blocaje ale creativității</li>
                <li>Surse ale creativității și cum o putem stimula</li>
                <li>Mai multe perspective (exerciții pentru gândirea "outside the box")</li>
                <li>Insight-ul creativ; Momentele "AHA!"</li>
            </ul>

            <Carousel items={CarouselData}></Carousel>

        </div>
    </div>;
}

export default PsihozonePage;