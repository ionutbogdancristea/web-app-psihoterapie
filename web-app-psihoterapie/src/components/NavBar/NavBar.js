import classes from './NavBar.module.css';
import {Link} from 'react-router-dom';
import logo_navbar from './logo_navbar.png';

console.log(logo_navbar);

function NavBar() 
{
    return <header className={classes.header}>
    {/* <div><img src={logo_navbar} alt="logo" className={classes.logo}/></div> */}
    <nav>
      <ul>
        <li>
          <Link to="/"> <img src={logo_navbar} alt="logo" className={classes.image}/> </Link>          
        </li>
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
      </ul>
    </nav>
  </header>;
}

export default NavBar;
