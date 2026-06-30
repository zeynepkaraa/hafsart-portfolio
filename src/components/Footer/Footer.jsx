import styles from "./Footer.module.css";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.linkGroups}>
            <div className={styles.linkGroup}>
              <Link to="/book#contact-section" className={styles.link}>
                Contact
              </Link>
            </div>
            <div className={styles.linkGroup}>
              <Link to="/book" className={styles.link}>
                Book
              </Link>
            </div>
            <div className={styles.linkGroup}>
              <Link to="/book#faq-section" className={styles.link}>
                FAQ
              </Link>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/hafsartt"
              className={styles.icon}
            >
              <BsInstagram />
            </a>
            <a href="https://www.tiktok.com/@hafsartt_" className={styles.icon}>
              <BsTiktok />
            </a>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>© 2026 Hafsart</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
