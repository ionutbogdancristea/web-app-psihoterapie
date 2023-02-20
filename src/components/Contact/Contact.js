import React from 'react';
import { useLocation } from 'react-router-dom';
import telefon from '../../media/buton-telefon.png'
import wapp from '../../media/buton-telegram.png'
import locatie from '../../media/buton-locatie.png'
import mail from '../../media/buton-email.png'

function Contact() 
{
    let current_url = useLocation().pathname;
    return <div className={"relative bottom-0 flex flex-col "+ (current_url === "/psihozone" ? "bg-ana-blue":"bg-ana-light-purple")}> 
    <div className="font-sourceserifvariableroman md:text-xl text-white text-center mt-1">Contact</div>
    <div className="flex flex-row text-center pl-[18%] md:pl-[44%]">
        <img className="w-4 mr-2" src={telefon} alt="telefon"/>
        <div className="font-sourceserifvariableroman">0771611430</div>
    </div>
    <div className="flex flex-row items-center pl-[18%] md:pl-[44%]">
        <img className="w-4 mr-2" src={wapp} alt="wapp"/>
        <div className="font-sourceserifvariableroman">0771611430</div>
    </div>
    <div className="flex flex-row items-center pl-[18%] md:pl-[44%]">
        <img className="w-4 mr-2" src={locatie} alt="locatie"/>
        <div className="font-sourceserifvariableroman">Chiajna, Str. Serg. Ilie Petre 8C</div>
    </div>
    <div className="flex flex-row items-center pl-[18%] md:pl-[44%] mb-2">
        <img className="w-4 mr-2" src={mail} alt="mail"/>
        <div className="font-sourceserifvariableroman">anamariasfirca.psiholog@gmail.com</div>
    </div>
    </div>;
}

export default Contact;