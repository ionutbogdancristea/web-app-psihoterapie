import classes from './NavBar.module.css';
import {Link} from 'react-router-dom';
import logo_navbar from './logo_navbar.png';
import fb from './fb.png';
import insta from './insta.png';
import wapp from './wapp.png';
import mail from './mail.png';

function NavBar() 
{
    return <header className={classes.header}>
      <Link to="/"> <img src={logo_navbar} alt="logo" className={classes.image}/> </Link>  
      <nav>
        <ul>        
          <li>
            <Link to="/"> ACASĂ </Link>          
          </li>
          <li>
            <Link to="/despre_mine"> DESPRE MINE </Link>
          </li>
          <li>
            <Link to="/servicii"> SERVICII </Link>
          </li>
          <li>
            <Link to="/psihozone"> PSIHOZONE </Link>
          </li>
          <li>
            < Link to="/blog"> BLOG </Link>
          </li>
          <li>
            < Link to="/contact"> CONTACT </Link>
          </li>
          <li>
            < Link to="/"> <img src={fb} alt="facebook"/> </Link>
          </li>
          <li>
            < Link to="/"> <img src={insta} alt="instagram"/> </Link>
          </li>
          <li>
            < Link to="/"> <img src={wapp} alt="whatsapp"/> </Link>
          </li>
          <li>
            < Link to="/"> <img src={mail} alt="email"/> </Link>
          </li>
        </ul>
      </nav>
  </header>;
}

export default NavBar;
