import logo_symbol from './media/logo_symbol.png';
import fb from './media/fb.png'
import insta from './media/insta.png'
import wapp from './media/wapp.png'
import mail from './media/mail.png'
import nume from './media/Ana-Maria-Sfirca.png'
import titlu from './media/Psihoterapeut-integrativ.png'



function NavBar() 
{
    return (
      
<nav className="bg-slate-100">
      <ul className="flex flex-row">
        <li className="">
          <a href="/" className="flex flex-row items-center">
            <img src={logo_symbol} className="" alt="Main Logo"/>
            <div className="flex flex-col">
              <img src={nume} className="" alt="Name"/>
              <img src={titlu} className="" alt="Title"/>
            </div>
          </a>
        </li>
        <li className="flex flex-row">
          <a href="/" className="text-gray-700 hover:text-ana-purple">Acasă</a>
          <a href="/despre_mine" className="text-gray-700 hover:text-ana-purple">Despre mine</a>
          <a href="/servicii" className="text-gray-700 hover:text-ana-purple">Servicii</a>
          <a href="/psihozone" className="text-gray-700 hover:text-ana-purple">Psihozone</a>
          <a href="/contact" className="text-gray-700 hover:text-ana-purple">Contact</a>
        </li>
        <li className="flex flex-row">
          <a href="/" className="">
            <img src={fb} alt="Facebook logo"/>
          </a>
          <a href="/" className="">
            <img src={insta} alt="Instagram logo"/>
          </a>
          <a href="/" className="">
            <img src={wapp} alt="Whatsapp logo"/>
          </a>
          <a href="/" className="">
            <img src={mail} alt="Mail logo"/>
          </a>
        </li>
      </ul>
</nav>

    );
}

export default NavBar;
