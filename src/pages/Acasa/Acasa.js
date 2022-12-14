import React,{useState} from 'react';

import acasa from './media/acasa.jpeg'
import line from './media/white_line.png'
import ExtendableButton from '../../components/ExtendableButton/ExtendableButton';
import Carousel from '../../components/Carousel/Carousel';
import { CarouselData } from './CarouselData';
import Contact from '../../components/Contact/Contact';

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
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-24 md:mt-8 md:mb-8"> 
                <div className="text-left ml-[7%] md:ml-0">
                        <div className="text-lg md:text-3xl font-sourceserifvariableroman text-white">
                          <div>Psihoterapie individual??</div>
                          <div>Ateliere de dezvoltare personal?? pentru copii ??i adolescen??i</div>
                        </div>
                        <img src={line} alt="linie" className="w-16"/>
                        <div className="text-lg md:text-2xl font-sourceserifvariableroman text-white">Cucere??te-??i propria via????!</div>
                </div>
                <img className="rounded-lg object-contain w-60 md:w md:w-72 mt-4 md:mt-0" src={acasa} alt="view"></img>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 mt-8 mx-3 md:mx-8">

          <ExtendableButton state_params={[state1, setState1]} toggle_param = {toggle1} 
          question="Ce este psihoterapia integrativ???" 
          answer="O abordare psihoterapeutic?? flexibil??, care ??nglobeaz?? principii, teorii ??i tehnici din mai
                multe ??coli terapeutice ??i care se preocup?? de restabilirea ??i men??inerea echilibrului
                psihic, ??in??nd cont de toate dimensiunile fiin??ei umane - de la nivelul biologic,
                emo??ional, spiritual ??i comportamental, p??n?? la cel rela??ional ??i social/cultural."/>

          <ExtendableButton state_params={[state2, setState2]} toggle_param = {toggle2} 
          question="Cui i se adreseaz???"
          answer="Psihoterapia integrativ?? propune un model de interven??ie personalizat, ??n func??ie de
                  nevoile, obiectivele ??i particularit????ile fiec??rui client. Prin urmare, ea este aplicabil??
                  oric??rei v??rste ??i majorit????ii afec??iunilor ??i dificult????ilor psihologice (i.e. stres,
                  anxietate, depresie, traum??, adic??ii, tulbur??ri comportamentale, tulbur??ri alimentare,
                  dificult????i de rela??ionare etc."/>

          <ExtendableButton state_params={[state3, setState3]} toggle_param = {toggle3} 
          question="Cum se desf????oar?? prima sedin?????"
          answer="??n cadrul primei ??edin??e, vom vorbi despre motiva??ia din spatele deciziei tale de a
                  apela la un psihoterapeut. Totodat??, ??n func??ie de informa??iile oferite ??i de nevoile pe
                  care le ai, vom contura ??mpreun?? c??teva obiective de atins ??n procesul psihoterapiei. ??n
                  tot acest timp, m?? voi asigura de crearea unui spa??iu sigur, ??n care s?? te sim??i ascultat,
                  ??n??eles ??i ??ncurajat s?? discu??i ??n mod deschis despre orice te preocup??."/>

          <ExtendableButton state_params={[state4, setState4]} toggle_param = {toggle4} 
          question="Care este diferen??a dintre psihoterapie ??i consiliere psihologic???"
          answer="Psihoterapia este un proces mai amplu, mai profund ??i de durat?? mai lung?? dec??t
                  consilierea, ??n care pot fi abordate dificult????i psihologice complexe, care necesit?? mai
                  mult timp pentru a putea fi explorate, ??n??elese, acceptate ??i vindecate. Consilierea se
                  adreseaz??, mai degrab??, unor situa??ii ??i momente de criz?? sau de impas din prezent,
                  care au survenit ??n via??a persoanei ca urmare a unor schimb??ri sau evenimente
                  nea??teptate, iar clientul dore??te s?? ??nve??e modalit????i prin care s?? poat?? gestiona mai
                  bine situa??ia cu care se confrunt??."/>

          <ExtendableButton state_params={[state5, setState5]} toggle_param = {toggle5} 
          question="C??t dureaz?? psihoterapia?"
          answer="Durata psihoterapiei poate varia ??n func??ie de mai mul??i factori. Pe de o parte, sunt
                  factorii ce ??in de client (i.e. complexitatea dificult????ii cu care se confrunt?? acesta,
                  gradul de implicare ??i motiva??ia sa pentru schimbare, rezisten??a la schimbare), iar pe
                  de alt?? parte, factorii ce ??in de rela??ia terapeutic?? (i.e. m??sura ??n care psihoterapeutul
                  reu??este s?? surprind?? cu acurate??e ??i s?? oglindeasc?? tr??irile, emo??iile, nevoile ??i
                  g??ndurile persoanei; capacitatea psihoterapeutului de a-l ajuta pe client s??-??i acceseze
                  propriile resurse de schimbare, m??sura ??n care clientul simte c?? psihoterapeutul ??l
                  ??n??elege ??i ??l poate ghida ??ntr-o direc??ie cu sens, care este ??n acord cu nevoile sale etc."/>

          <ExtendableButton state_params={[state6, setState6]} toggle_param = {toggle6} 
          question="Cum ??tiu c?? func??ioneaz???"
          answer={[<div key="0" className="">Semnele schimb??rii variaz?? de la persoan?? la persoan?? ??i pot ap??rea ??n diverse forme ??i intensit????ii, ??ns?? iat?? c??teva exemple:</div>
          ,<li key="1" className="text-left">rec??p??tarea vitalit????ii, a energiei;</li>
          ,<li key="2" className="text-left">diminuarea st??rilor de nelini??te, de iritabilitate;</li>
          ,<li key="3" className="text-left">o mai bun?? recunoa??tere, ??n??elegere ??i autoreglare a emo??iilor ??i st??rilor afective;</li>
          ,<li key="4" className="text-left">diminuarea stresului, ??mbun??t????irea capacit????ii de a face fa???? stresului;</li>
          ,<li key="5" className="text-left">dezvoltarea capacit????ii de a recunoa??te ??i de a gestiona g??ndurile ??i comportamentele
          disfunc??ionale (nes??n??toase, care creeaz?? disconfort pentru tine sau pentru cei din jurul
          t??u);</li>
          ,<li key="6" className="text-left">clarificarea sentimentelor, st??rilor ??i g??ndurilor confuze, care se afl?? ??n contradic??ie:</li>
          ,<li key="7" className="text-left">cre??terea sentimentul de speran????, de stare de bine;</li>
          ,<li key="8" className="text-left">??n??elegerea propriului stil de ata??ament ??i cum influen??eaz?? acesta rela??iile cu ceilal??i;</li>
          ,<li key="9" className="text-left">mai mult?? ??ncredere ??n sine ??i ??n propria capacitate de a face fa???? situa??iilor cu care te
          ??nt??lne??ti.</li>]}/>
        </div>

        <Carousel items={CarouselData}></Carousel>

        <Contact/>
</div>;
}

export default AcasaPage;