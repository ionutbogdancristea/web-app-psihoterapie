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
      
<nav className=" bg-slate-100 px-2 sm:px-4 py-2.5 rounded">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
        <img src={logo_symbol} className="mr-3 h-6 sm:h-9" alt="Main Logo" />
        <img src={nume} className="mr-3 h-6 sm:h-9" alt="Name" />
        <img src={titlu} className="mr-3 h-6 sm:h-9" alt="Title" />
    </a>
    <div className=" w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 border-gray-700">
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 my-0 text-gray-700 hover:text-ana-purple md:border-0 md:p-0 md:my-4">
            Acasă</a>
        </li>
        <li>
          <a href="/despre_mine" className="block py-2 pr-4 pl-3 my-0 text-gray-700 hover:text-ana-purple md:border-0 md:p-0 md:my-4">
            Despre mine</a>
        </li>
        <li>
          <a href="/servicii" className="block py-2 pr-4 pl-3 my-0 text-gray-700 hover:text-ana-purple md:border-0 md:p-0 md:my-4">
            Servicii</a>
        </li>
        <li>
          <a href="/psihozone" className="block py-2 pr-4 pl-3 my-0 text-gray-700 hover:text-ana-purple md:border-0 md:p-0 md:my-4">
            Psihozone</a>
        </li>
        <li>
          <a href="/contact" className="block py-2 pr-4 pl-3 my-0 text-gray-700 hover:text-ana-purple md:border-0 md:p-0 md:my-4">
            Contact</a>
        </li>
        <li>
          <a href="/" className="block p-0 m-0 md:border-0 md:p-0">
            <img src={fb} alt="Facebook logo"/>
          </a>
        </li>
        <li>
          <a href="/" className="block p-0 m-0 md:border-0 md:p-0">
            <img src={insta} alt="Instagram logo"/>
          </a>
        </li>
        <li>
          <a href="/" className="block p-0 m-0 md:border-0 md:p-0">
            <img src={wapp} alt="Whatsapp logo"/>
          </a>
        </li>
        <li>
          <a href="/" className="block p-0 m-0 md:border-0 md:p-0">
            <img src={mail} alt="Mail logo"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default NavBar;
