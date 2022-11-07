import React,{useState} from 'react';

import acasa from './media/acasa.jpeg'
import line from './media/white_line.png'
import plus from './media/plus.png'

function AcasaPage() 
{   
    const [state1, setState1] = useState(true);
    const toggle1=()=> {
      setState1(!state1);
    }

    const [state2, setState2] = useState(true);
    const toggle2=()=> {
      setState2(!state2);
    }

    const [state3, setState3] = useState(true);
    const toggle3=()=> {
      setState3(!state3);
    }

    const [state4, setState4] = useState(true);
    const toggle4=()=> {
      setState4(!state4);
    }

    const [state5, setState5] = useState(true);
    const toggle5=()=> {
      setState5(!state5);
    }

    const [state6, setState6] = useState(true);
    const toggle6=()=> {
      setState6(!state6);
    }

    return <div>
        <div className="bg-[url('/src/pages/Acasa/media/chenar.png')] bg-no-repeat">
            <div>&nbsp;</div>
            <div className="flex flex-row items-center justify-center space-x-24"> 
                <div className="text-center">
                        <div className="text-left md:text-3xl font-museoslab300 text-white">Psihoterapie individuală și de grup</div>
                        <img src={line} alt="linie" className="w-16"/>
                        <div className="text-left md:text-2xl font-museoslab300 text-white">Cucerește-ți propria viață!</div>
                </div>
                <img className="rounded-lg object-contain w-64 hidden md:block" src={acasa} alt="view"></img>
            </div>
            <div>&nbsp;</div>
        </div>
        <ul className="flex flex-col md:flex-row space-x-4 mt-4 md:ml-8">
          <button className="" onClick={toggle1}>
              <div className="flex flex-row items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-ana-purple focus:z-10 focus:ring-4 focus:ring-gray-200">
                <img src={plus} className="m-1" alt="plus"/>
                <div className="font-museoslab300">
                  Ce este psihoterapia integrativă?
                </div>
              </div>
              <div className={"font-museoslab100 " + (state1 ? "hidden":"")}>
                O abordare psihoterapeutică flexibilă, care înglobează principii, teorii și tehnici din mai
                multe școli terapeutice și care se preocupă de restabilirea și menținerea echilibrului
                psihic, ținând cont de toate dimensiunile ființei umane - de la nivelul biologic,
                emoțional, spiritual și comportamental, până la cel relațional și social/cultural.
              </div>
              <div>&nbsp;</div>
          </button>

          <button className="" onClick={toggle2}>
          <div>Cui i se adresează?</div>
          </button>
          <div className={"" + (state2 ? "hidden":"")}>
          Psihoterapia integrativă propune un model de intervenție personalizat, în funcție de
          nevoile, obiectivele și particularitățile fiecărui client. Prin urmare, ea este aplicabilă
          oricărei vârste și majorității afecțiunilor și dificultăților psihologice (i.e. stres,
          anxietate, depresie, traumă, adicții, tulburări comportamentale, tulburări alimentare,
          dificultăți de relaționare etc.).
          </div>
          <div>&nbsp;</div>

          <button className="" onClick={toggle3}>
          <div>Cum se desfășoară prima sedință?</div>
          </button>
          <div className={"" + (state3 ? "hidden":"")}>
          În cadrul primei ședințe, vom vorbi despre motivația din spatele deciziei tale de a
          apela la un psihoterapeut. Totodată, în funcție de informațiile oferite și de nevoile pe
          care le ai, vom contura împreună câteva obiective de atins în procesul psihoterapiei. În
          tot acest timp, mă voi asigura de crearea unui spațiu sigur, în care să te simți ascultat,
          înțeles și încurajat să discuți în mod deschis despre orice te preocupă.
          </div>
          <div>&nbsp;</div>

          <button className="" onClick={toggle4}>
          <div>Care este diferența dintre psihoterapie și consiliere psihologică?</div>
          </button>
          <div className={"" + (state4 ? "hidden":"")}>
          Psihoterapia este un proces mai amplu, mai profund și de durată mai lungă decât
          consilierea, în care pot fi abordate dificultăți psihologice complexe, care necesită mai
          mult timp pentru a putea fi explorate, înțelese, acceptate și vindecate. Consilierea se
          adresează, mai degrabă, unor situații și momente de criză sau de impas din prezent,
          care au survenit în viața persoanei ca urmare a unor schimbări sau evenimente
          neașteptate, iar clientul dorește să învețe modalități prin care să poată gestiona mai
          bine situația cu care se confruntă.
          </div>
          <div>&nbsp;</div>

          <button className="" onClick={toggle5}>
          <div>Cât durează psihoterapia?</div>
          </button>
          <div className={"" + (state5 ? "hidden":"")}>
          Durata psihoterapiei poate varia în funcție de mai mulți factori. Pe de o parte, sunt
          factorii ce țin de client (i.e. complexitatea dificultății cu care se confruntă acesta,
          gradul de implicare și motivația sa pentru schimbare, rezistența la schimbare), iar pe
          de altă parte, factorii ce țin de relația terapeutică (i.e. măsura în care psihoterapeutul
          reușeste să surprindă cu acuratețe și să oglindească trăirile, emoțiile, nevoile și
          gândurile persoanei; capacitatea psihoterapeutului de a-l ajuta pe client să-și acceseze
          propriile resurse de schimbare, măsura în care clientul simte că psihoterapeutul îl
          înțelege și îl poate ghida într-o direcție cu sens, care este în acord cu nevoile sale etc.
          </div>
          <div>&nbsp;</div>

          <button className="" onClick={toggle6}>
          <div>Cum știu că funcționează?</div>
          </button>
          <div className={"" + (state6 ? "hidden":"")}>
          Semnele schimbării variază de la persoană la persoană și pot apărea în diverse forme și
          intensității, însă iată câteva exemple:
          - recăpătarea vitalității, a energiei;
          - diminuarea stărilor de neliniște, de iritabilitate;
          - o mai bună recunoaștere, înțelegere și autoreglare a emoțiilor și stărilor afective;
          - diminuarea stresului, îmbunătățirea capacității de a face față stresului;
          - dezvoltarea capacității de a recunoaște și de a gestiona gândurile și comportamentele
          disfuncționale (nesănătoase, care creează disconfort pentru tine sau pentru cei din jurul
          tău);
          - clarificarea sentimentelor, stărilor și gândurilor confuze, care se află în contradicție:
          - creșterea sentimentul de speranță, de stare de bine;
          - înțelegerea propriului stil de atașament și cum influențează acesta relațiile cu ceilalți;
          - mai multă încredere în sine și în propria capacitate de a face față situațiilor cu care te
          întâlnești.
          </div>
        </ul>
</div>;
}

export default AcasaPage;