import Navbar from "../../Navbar/Navbar";
import styles from "./EventPage.module.css";
import Arch from "../../Arch/Arch";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const LiveIllustration = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Live Illustrations</h1>
        <div className={styles.arches}>
          <Link to={"/wedding"}>
            <Arch
              title="Weddings"
              image="https://res.cloudinary.com/dtowqekrg/image/upload/f_auto,q_auto,w_1200/v1782677760/IMG_2193_qjooos.webp"
            />
          </Link>
          <Link to={"/brand"}>
            <Arch
              title="Brand Events"
              image="https://res.cloudinary.com/dtowqekrg/image/upload/f_auto,q_auto,w_1200/v1782677760/IMG_0901_o6lzzj.webp"
            />
          </Link>
          <Link to={"/other"}>
            <Arch
              title="Birthdays & Showers"
              image="https://res.cloudinary.com/dtowqekrg/image/upload/f_auto,q_auto,w_1200/v1782677761/IMG_9847_vjw7sf.webp"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveIllustration;
