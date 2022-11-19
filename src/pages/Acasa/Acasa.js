import React,{useState} from 'react';

import acasa from './media/acasa.jpeg'
import line from './media/white_line.png'
import ExtendableButton from '../../components/ExtendableButton/ExtendableButton';

function AcasaPage() 
{   
    const [state1, setState1] = useState(true);
    const toggle1=()=> {
      setState1(!state1);

      if (!state2 && state1) {
        setState2(!state2);
      };
      if (!state3 && state1) {
        setState3(!state3);
      };
      if (!state4 && state1) {
        setState4(!state4);
      };
      if (!state5 && state1) {
        setState5(!state5);
      };
      if (!state6 && state1) {
        setState6(!state6);
      };     
    }

    const [state2, setState2] = useState(true);
    const toggle2=()=> {
      setState2(!state2);

      if (!state1 && state2) {
        setState1(!state1);
      };
      if (!state3 && state2) {
        setState3(!state3);
      };
      if (!state4 && state2) {
        setState4(!state4);
      };
      if (!state5 && state2) {
        setState5(!state5);
      };
      if (!state6 && state2) {
        setState6(!state6);
      };
    }

    const [state3, setState3] = useState(true);
    const toggle3=()=> {
      setState3(!state3);

      if (!state1 && state3) {
        setState1(!state1);
      };
      if (!state2 && state3) {
        setState2(!state2);
      };
      if (!state4 && state3) {
        setState4(!state4);
      };
      if (!state5 && state3) {
        setState5(!state5);
      };
      if (!state6 && state3) {
        setState6(!state6);
      };
    }

    const [state4, setState4] = useState(true);
    const toggle4=()=> {
      setState4(!state4);

      if (!state1 && state4) {
        setState1(!state1);
      };
      if (!state2 && state4) {
        setState2(!state2);
      };
      if (!state3 && state4) {
        setState3(!state3);
      };
      if (!state5 && state4) {
        setState5(!state5);
      };
      if (!state6 && state4) {
        setState6(!state6);
      };
    }

    const [state5, setState5] = useState(true);
    const toggle5=()=> {
      setState5(!state5);

      if (!state1 && state5) {
        setState1(!state1);
      };
      if (!state2 && state5) {
        setState2(!state2);
      };
      if (!state3 && state5) {
        setState3(!state3);
      };
      if (!state4 && state5) {
        setState4(!state4);
      };
      if (!state6 && state5) {
        setState6(!state6);
      };
    }

    const [state6, setState6] = useState(true);
    const toggle6=()=> {
      setState6(!state6);

      if (!state1 && state6) {
        setState1(!state1);
      };
      if (!state2 && state6) {
        setState2(!state2);
      };
      if (!state3 && state6) {
        setState3(!state3);
      };
      if (!state4 && state6) {
        setState4(!state4);
      };
      if (!state5 && state6) {
        setState5(!state5);
      };
    }

    return <div>
        <div className="bg-[url('/src/pages/Acasa/media/chenar-mov.png')] bg-no-repeat">
            <div>&nbsp;</div>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-24"> 
                <div className="text-center">
                        <div className="text-left md:text-3xl font-museoslab300 text-white">Psihoterapie individuală și de grup</div>
                        <img src={line} alt="linie" className="w-16"/>
                        <div className="text-left md:text-2xl font-museoslab300 text-white">Cucerește-ți propria viață!</div>
                </div>
                <img className="rounded-lg object-contain w-56 md:w md:w-64 mt-4 md:mt-0" src={acasa} alt="view"></img>
            </div>
            <div>&nbsp;</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4  mt-4 mx-3 md:mx-8">

          <ExtendableButton state_params={[state1, setState1]} toggle_param = {toggle1} 
          question="Ce este psihoterapia integrativă?" 
          answer="O abordare psihoterapeutică flexibilă, care înglobează principii, teorii și tehnici din mai
                multe școli terapeutice și care se preocupă de restabilirea și menținerea echilibrului
                psihic, ținând cont de toate dimensiunile ființei umane - de la nivelul biologic,
                emoțional, spiritual și comportamental, până la cel relațional și social/cultural."/>

          <ExtendableButton state_params={[state2, setState2]} toggle_param = {toggle2} 
          question="Cui i se adresează?"
          answer="Psihoterapia integrativă propune un model de intervenție personalizat, în funcție de
                  nevoile, obiectivele și particularitățile fiecărui client. Prin urmare, ea este aplicabilă
                  oricărei vârste și majorității afecțiunilor și dificultăților psihologice (i.e. stres,
                  anxietate, depresie, traumă, adicții, tulburări comportamentale, tulburări alimentare,
                  dificultăți de relaționare etc."/>

          <ExtendableButton state_params={[state3, setState3]} toggle_param = {toggle3} 
          question="Cum se desfășoară prima sedință?"
          answer="În cadrul primei ședințe, vom vorbi despre motivația din spatele deciziei tale de a
                  apela la un psihoterapeut. Totodată, în funcție de informațiile oferite și de nevoile pe
                  care le ai, vom contura împreună câteva obiective de atins în procesul psihoterapiei. În
                  tot acest timp, mă voi asigura de crearea unui spațiu sigur, în care să te simți ascultat,
                  înțeles și încurajat să discuți în mod deschis despre orice te preocupă."/>

          <ExtendableButton state_params={[state4, setState4]} toggle_param = {toggle4} 
          question="Care este diferența dintre psihoterapie și consiliere psihologică?"
          answer="Psihoterapia este un proces mai amplu, mai profund și de durată mai lungă decât
                  consilierea, în care pot fi abordate dificultăți psihologice complexe, care necesită mai
                  mult timp pentru a putea fi explorate, înțelese, acceptate și vindecate. Consilierea se
                  adresează, mai degrabă, unor situații și momente de criză sau de impas din prezent,
                  care au survenit în viața persoanei ca urmare a unor schimbări sau evenimente
                  neașteptate, iar clientul dorește să învețe modalități prin care să poată gestiona mai
                  bine situația cu care se confruntă."/>

          <ExtendableButton state_params={[state5, setState5]} toggle_param = {toggle5} 
          question="Cât durează psihoterapia?"
          answer="Durata psihoterapiei poate varia în funcție de mai mulți factori. Pe de o parte, sunt
                  factorii ce țin de client (i.e. complexitatea dificultății cu care se confruntă acesta,
                  gradul de implicare și motivația sa pentru schimbare, rezistența la schimbare), iar pe
                  de altă parte, factorii ce țin de relația terapeutică (i.e. măsura în care psihoterapeutul
                  reușeste să surprindă cu acuratețe și să oglindească trăirile, emoțiile, nevoile și
                  gândurile persoanei; capacitatea psihoterapeutului de a-l ajuta pe client să-și acceseze
                  propriile resurse de schimbare, măsura în care clientul simte că psihoterapeutul îl
                  înțelege și îl poate ghida într-o direcție cu sens, care este în acord cu nevoile sale etc."/>

          <ExtendableButton state_params={[state6, setState6]} toggle_param = {toggle6} 
          question="Cum știu că funcționează?"
          answer={[<div key="0" className="text-left">Semnele schimbării variază de la persoană la persoană și pot apărea în diverse forme și intensității, însă iată câteva exemple:</div>
          ,<li key="1" className="text-left">recăpătarea vitalității, a energiei;</li>
          ,<li key="2" className="text-left">diminuarea stărilor de neliniște, de iritabilitate;</li>
          ,<li key="3" className="text-left">o mai bună recunoaștere, înțelegere și autoreglare a emoțiilor și stărilor afective;</li>
          ,<li key="4" className="text-left">diminuarea stresului, îmbunătățirea capacității de a face față stresului;</li>
          ,<li key="5" className="text-left">dezvoltarea capacității de a recunoaște și de a gestiona gândurile și comportamentele
          disfuncționale (nesănătoase, care creează disconfort pentru tine sau pentru cei din jurul
          tău);</li>
          ,<li key="6" className="text-left">clarificarea sentimentelor, stărilor și gândurilor confuze, care se află în contradicție:</li>
          ,<li key="7" className="text-left">creșterea sentimentul de speranță, de stare de bine;</li>
          ,<li key="8" className="text-left">înțelegerea propriului stil de atașament și cum influențează acesta relațiile cu ceilalți;</li>
          ,<li key="9" className="text-left">mai multă încredere în sine și în propria capacitate de a face față situațiilor cu care te
          întâlnești.</li>]}/>
        </div>
        
</div>;
}

export default AcasaPage;