import logo_symbol from './logo_symbol.png';
// import fb from './fb.png'

function NavBar() 
{
    return (
      
<nav className="border-gray-200 bg-slate-100 px-2 sm:px-4 py-2.5 rounded">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
        <img src={logo_symbol} className="mr-3 h-6 sm:h-9" alt="Main Logo" />
        <span className="self-center text-xl whitespace-nowrap text-ana-purple font-sans ">Ana Maria Sfircă</span>
    </a>
    <div className=" w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-slate-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 border-gray-700">
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-700 hover:text-ana-purple ">
            Acasă</a>
        </li>
        <li>
          <a href="/despre_mine" className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-700 hover:text-ana-purple ">
            Despre mine</a>
        </li>
        <li>
          <a href="/servicii" className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-700 hover:text-ana-purple ">
            Servicii</a>
        </li>
        <li>
          <a href="/psihozone" className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-700 hover:text-ana-purple ">
            Psihozone</a>
        </li>
        <li>
          <a href="/contact" className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-700 hover:text-ana-purple ">
            Contact</a>
        </li>
        {/* <li>
          <a href="/contact" className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-700 hover:text-ana-purple ">
            <img src={fb}/>
          </a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

    );
}

export default NavBar;
