import React from 'react';
import logo_symbol from './media/logo_symbol.png';
import fb from './media/fb.png'
import insta from './media/insta.png'
import wapp from './media/wapp.png'
import mail from './media/mail.png'
import nume from './media/Ana-Maria-Sfirca.png'
import titlu from './media/Psihoterapeut-integrativ.png'

export default function NavBar() 
{
  let current_url = document.location.pathname;

  return (
      
<nav className="bg-slate-100">
      <ul className="md:flex md:flex-row p-3 items-center justify-center">
        <li className="flex justify-center ml-10 mb-3 md:m-0">
          <a href="/" className="flex flex-row items-center">
            <img src={logo_symbol} className="w-10" alt="Main Logo"/>
            <div className="flex flex-col">
              <img src={nume} className="w-3/4" alt="Name"/>
              <img src={titlu} className="w-3/4" alt="Title"/>
            </div>
          </a>
        </li>
        <li className="flex flex-col md:flex-row md:space-x-8 md:pr-16 md:mx-24 mb-6 md:mb-0">
          <a href="/" className={"flex items-center justify-center text-lg text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/" ? 'text-ana-purple':'')}>
              Acasă </a>
          <a href="/despre_mine" className={"flex items-center justify-center text-lg text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/despre_mine" ? 'text-ana-purple':'')}>
            Despre mine </a>
          <a href="/servicii" className={"flex items-center justify-center text-lg text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/servicii" ? 'text-ana-purple':'')}>
            Servicii </a>
          <a href="/psihozone" className={"flex items-center justify-center text-lg text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/psihozone" ? 'text-ana-purple':'')}>
            Psihozone </a>
          <a href="/contact" className={"flex items-center justify-center text-lg text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/contact" ? 'text-ana-purple':'')}>
            Contact </a>
        </li>
        <li className="flex flex-row items-center justify-center md:space-x-2">
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