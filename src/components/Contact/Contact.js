import telefon from './media/phone.png'
import wapp from './media/wapp.png'
import locatie from './media/locatie.png'
import mail from './media/mail.png'

function Contact() 
{
    return <div className="bg-ana-light-purple relative flex flex-col"> 
    <div className="font-museoslab500 md:text-xl text-white text-center">Contact</div>
    <div className="flex flex-row text-center pl-[18%] md:pl-[44%]">
        <img className="w-4 mr-2" src={telefon} alt="telefon"/>
        <div className="font-museoslab100 font-semibold">0771611430</div>
    </div>
    <div className="flex flex-row items-center pl-[18%] md:pl-[44%]">
        <img className="w-4 mr-2" src={wapp} alt="wapp"/>
        <div className="font-museoslab100 font-semibold">0771611430</div>
    </div>
    <div className="flex flex-row items-center pl-[18%] md:pl-[44%]">
        <img className="w-4 mr-2" src={locatie} alt="locatie"/>
        <div className="font-museoslab100 font-semibold">Chiajna, Str. Serg. Ilie Petre 8C</div>
    </div>
    <div className="flex flex-row items-center pl-[18%] md:pl-[44%]">
        <img className="w-4 mr-2" src={mail} alt="mail"/>
        <div className="font-museoslab100 font-semibold">anamariasfirca@gmail.com</div>
    </div>
    </div>;
}

export default Contact;