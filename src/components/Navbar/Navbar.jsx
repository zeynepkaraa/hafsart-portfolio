import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const OVERLAY_PAGES = ["/"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isOverlay = OVERLAY_PAGES.includes(pathname);
  return (
    <nav className={`${styles.navbar} ${isOverlay ? styles.absolute : ""}`}>
      <Link
        className={`${styles.title} ${!isOverlay ? styles.newTitle : ""} ${menuOpen ? styles.titleOpen : ""}`}
        to="/"
      >
        Hafsart
      </Link>

      {/* Overlay outside menu div so it covers full page */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      <div className={styles.menu}>
        <div
          className={`${styles.menuIcon} ${!isOverlay ? styles.newMenu : ""} ${menuOpen ? styles.menuIconOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <IoMenu />}
        </div>

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""} ${
            !isOverlay ? styles.newMenuItems : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
