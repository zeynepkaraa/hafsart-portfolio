import Navbar from "../../Navbar/Navbar";
import styles from "./EventPage.module.css";
import Footer from "../../Footer/Footer";
import MasonryGrid from "../../MasonryGrid/MasonryGrid";
import CustomIllustrationForm from "../../CustomIllustrationForm";
import ContactUs from "../../ContactUs/ContactUs";
import { getImageProps } from "../../../utils/cloudinary";
import SEO from "../../SEO.jsx";

const images = [
  { id: "IMG_1076_ndh1f2" },
  { id: "IMG_4458_oxtvg9" },
  { id: "IMG_3798_zmqjex" },
  { id: "IMG_4353_m6btp3" },
  { id: "IMG_5526_mhxks7" },
  { id: "IMG_0786_u0kxoe", transforms: "e_brightness:5" },
];

const customPortraits = () => {
  return (
    <>
      <SEO
        title="Custom Illustration | Hafsart Fashion Art"
        description="Commission a custom hand-drawn fashion illustration by Hafsa. Personalized portraits for gifts, keepsakes, and special occasions. Toronto-based, available for commissions."
        keywords="custom fashion illustration, commission portrait, personalized illustration, hand drawn portrait, custom art Toronto, fashion portrait gift"
        image="https://res.cloudinary.com/dtowqekrg/image/upload/v1782880004/hafsart_thumbnail_simf0y.jpg"
      />
      <div className={styles.page}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.visual}>
              <div className={styles.imgWrapper}>
                <img className={styles.image} src="/images/live.png" />
              </div>
              <div className={styles.arch}></div>
            </div>
            <div className={styles.content}>
              <h1 className="title-primary"> Custom Illustration</h1>
              <p className="description" style={{ marginTop: "5%" }}>
                Hand-drawn custom illustrations created from your favorite
                photos. Whether you're celebrating a milestone or preserving a
                special memory, your artwork is made to be a timeless keepsake
                you'll cherish forever.
              </p>
              <button
                className={styles.btn}
                onClick={() =>
                  document
                    .getElementById("form-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get started
              </button>
            </div>
          </div>
          <div className={styles.images}>
            <MasonryGrid images={images} getImageProps={getImageProps} />
          </div>
          <div id="form-section" className={styles.bookingSection}>
            <CustomIllustrationForm />
          </div>
        </div>
        <div id="contact-section">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default customPortraits;
