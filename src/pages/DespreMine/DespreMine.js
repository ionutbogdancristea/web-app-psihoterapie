import ana from './media/ana.png'
import { text1, text2, text3, text4 } from './DespreMineData';

function DespreMinePage() 
{
    return <div className="bg-[url('/src/pages/DespreMine/media/fundal-servicii_0.png')] bg-no-repeat">
        <div className="flex flex-row">
            <div className="w-4/5 pl-20">
                Sa ne cunoastem!
                {text1}
                {text2}
                Viziunea mea
                {text3}
                Misiunea mea
                {text4}
            </div>
            <div style={{alignItems: 'center',justifyContent: 'center',}}>
                <img src={ana} alt="Ana" className="max-h-96"></img>
            </div>
        </div> 

    </div>;
}

export default DespreMinePage;