import poza_ana from './media/poza-ana.png'
import buton_email from '../../media/buton-email.png'
import buton_telefon from '../../media/buton-telefon.png'
import buton_whatsapp from '../../media/buton-telegram.png'
import buton_instagram from '../../media/buton-instagram.png'
import buton_facebook from '../../media/buton-facebook.png'
import buton_locatie from '../../media/buton-locatie.png'
import { AddressMap } from './AddressMap'

function ContactPage() 
{
    return <div className="bg-gradient-to-r from-ana-light-purple to-ana-light-blue flex justify-center flex-col"> 
        <div className="flex md:flex-row flex-col justify-center space-x-12 p-12">
            <ul className="space-y-3">
                <li className="flex justify-center text-5xl mb-14">
                    Contact
                </li> 
                <li className="flex flex-row space-x-4 text-xl md:text-2xl">
                    <img src={buton_email} alt="email" className="object-contain"/>
                    <div>anamariasfirca@yahoo.com</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl md:text-2xl">
                    <img src={buton_telefon} alt="telefon" className="object-contain"/>
                    <img src={buton_whatsapp} alt="whatsapp" className="object-contain"/>
                    <div>+40764862668</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl md:text-2xl">
                    <img src={buton_instagram} alt="instagram" className="object-contain"/>
                    <div>anamariasfirca_psihozone</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl md:text-2xl">
                    <img src={buton_facebook} alt="facebook" className="object-contain"/>
                    <div>Psiholog Ana-Maria Sfircă</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl md:text-2xl">
                    <img src={buton_locatie} alt="adresa" className="object-contain"/>
                    <div>Serg. Ilie Petre, 8C, Chiajna</div>
                </li>
            </ul>
            <img src={poza_ana} alt="Ana" className="w-auto md:w-80 object-contain"/>
        </div>
        <div className="bg-slate-100 flex justify-center py-6">
            <AddressMap/>
        </div>
    </div>;
}
export default ContactPage;