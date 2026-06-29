import Navbar from "../../Navbar/Navbar";
import styles from "./EventPage.module.css";
import Footer from "../../Footer/Footer";
import MasonryGrid from "../../MasonryGrid/MasonryGrid";
import ClientLogos from "../../ClientLogos/ClientLogos";

const EventPage = ({ title, description, images, logos, getImageProps }) => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className="title-secondary">{title}</h1>
        {logos && <ClientLogos />}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <div className={styles.images}>
        <MasonryGrid images={images} getImageProps={getImageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;
