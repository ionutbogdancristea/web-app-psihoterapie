import ServiciiElement from "../../components/ServiciiElement/ServiciiElement";
import { ServiciiData } from './ServiciiData';
import Contact from '../../components/Contact/Contact';

function ServiciiPage() 
{
    return <div> 
        <div className="bg-[url('/src/pages/Servicii/media/fundal-servicii.png')] bg-no-repeat">
            <ServiciiElement items={ServiciiData}/>
            <div className="text-center p-6 md:mx-0 font-EBGaramond text-xl text-gray-600">
                Costul ședinței individuale este de 150 lei (atât fizic, cât și online). <br /> <br /> 
                În ceea ce privește atelierele de dezvoltare personală, onorariul variază <br className="hidden md:flex"/> în funcție de specificul activităților, durată și frecvență. 
            </div>      
            <div>&nbsp;</div>    
            <div>&nbsp;</div> 
            <div>&nbsp;</div>  
        </div>
        <Contact/>
    </div>;
}

export default ServiciiPage;