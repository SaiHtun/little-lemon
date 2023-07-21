import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { navs } from "../constants";

const Navbar = () => {
  const { navbar, navItems, littleLemon } = styles;

  return (
    <nav className={navbar}>
      <h3 className={littleLemon}>Little Lemon</h3>
      <ul className={navItems}>
        {navs.map((nav, i) => <li key={i}><Link to={nav.path}>{nav.name.toUpperCase()}</Link></li>)}
      </ul>
    </nav>
  )
}

export default Navbar;