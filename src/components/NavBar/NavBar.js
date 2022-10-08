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
      <ul className="md:flex md:flex-row p-3 items-center ">
        <li className="">
          <a href="/" className="flex flex-row items-center">
            <img src={logo_symbol} className="w-10" alt="Main Logo"/>
            <div className="flex flex-col">
              <img src={nume} className="w-3/4" alt="Name"/>
              <img src={titlu} className="w-3/4" alt="Title"/>
            </div>
          </a>
        </li>
        <li className="flex flex-col md:flex-row md:space-x-6">
          <a href="/" className="text-gray-700 hover:text-ana-purple">Acasă</a>
          <a href="/despre_mine" className="text-gray-700 hover:text-ana-purple">Despre mine</a>
          <a href="/servicii" className="text-gray-700 hover:text-ana-purple">Servicii</a>
          <a href="/psihozone" className="text-gray-700 hover:text-ana-purple">Psihozone</a>
          <a href="/contact" className="text-gray-700 hover:text-ana-purple">Contact</a>
        </li>
        <li className="flex flex-row md:space-x-2 items-center">
          <a href="/" className="">
            <img src={fb} className="w-3/4" alt="Facebook logo"/>
          </a>
          <a href="/" className="">
            <img src={insta} className="w-3/4" alt="Instagram logo"/>
          </a>
          <a href="/" className="">
            <img src={wapp} className="w-3/4" alt="Whatsapp logo"/>
          </a>
          <a href="/" className="">
            <img src={mail} className="w-3/4" alt="Mail logo"/>
          </a>
        </li>
      </ul>
</nav>

    );
}

export default NavBar;
