import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";

const OVERLAY_PAGES = ["/"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isOverlay = OVERLAY_PAGES.includes(pathname);

  return (
    <nav className={`${styles.navbar} ${isOverlay ? styles.absolute : ""}`}>
      <a
        className={`${styles.title} ${!isOverlay ? styles.newTitle : ""}`}
        href="/"
      >
        Hafsart
      </a>

      <div className={styles.menu}>
        <div
          className={`${styles.menuIcon} ${!isOverlay ? styles.newMenu : ""}`}
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
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/book">Book</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
