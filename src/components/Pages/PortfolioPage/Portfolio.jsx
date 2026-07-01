import styles from "./Portfolio.module.css";
import Arch from "../../Arch/Arch";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import SEO from "../../SEO.jsx";

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Portfolio | Hafsart Live Fashion Illustration"
        description="Browse Hafsa's portfolio of live illustration work from weddings, brand events, bridal showers and more across Toronto."
        keywords="illustration portfolio, wedding art, brand event sketches, live drawing portfolio, Toronto fashion illustration"
        image="https://res.cloudinary.com/dtowqekrg/image/upload/v1782880004/hafsart_thumbnail_simf0y.jpg"
      />
      <div className={styles.page}>
        <Navbar />
        <div className={styles.container}>
          <h2 className={styles.title}>Portfolio</h2>
          <div className={styles.arches}>
            <Link to={"/live"}>
              <Arch
                title="Live Illustrations"
                image="https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:good/cs_srgb/dpr_1.0/w_1200/IMG_5861_llfy58.jpg"
              />
            </Link>
            <Link to={"/custom"}>
              <Arch
                title="Custom Illustrations"
                image="https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:eco/cs_srgb/dpr_1.0/w_1200/IMG_1076_ndh1f2.jpg"
              />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
