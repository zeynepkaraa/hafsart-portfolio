import Navbar from "../../Navbar/Navbar.jsx";
import Arch from "../../Arch/Arch.jsx";
import styles from "./Home.module.css";
import RecentEventsGrid from "../../Recent Events Grid /RecentEventsGrid .jsx";
import Footer from "../../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import { faqData } from "../../../data/faqData";
import Faq from "../../Faq/Faq";
import BookingForm from "../../BookingForm";
import ContactUs from "../../ContactUs/ContactUs";
import ClientLogos from "../../ClientLogos/ClientLogos";
import Testimonial from "../../Card/Testimonial.jsx";
import SEO from "../../SEO.jsx";

const Home = () => {
  return (
    <>
      <SEO
        title="Hafsart | Live Illustration for Weddings & Events"
        description="Hafsart offers live fashion illustration at weddings, brand events, bridal showers and more in Toronto. Capture your guests in elegant, hand-drawn portraits."
        keywords="live illustration, wedding illustration, event artist, fashion illustration, Toronto illustrator, live sketching, bridal shower artist"
        image="https://res.cloudinary.com/dtowqekrg/image/upload/v1782880004/hafsart_thumbnail_simf0y.jpg"
      />
      <div className={styles.page}>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.hero}>
            <video
              className={styles.heroVideo}
              src="https://res.cloudinary.com/dtowqekrg/video/upload/f_auto,q_auto/v1782678226/live-events_yqlyz0.mov"
              poster="/images/live-events-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        <div className={styles.services}>
          <div className={styles.arches}>
            <Link to={"/wedding"}>
              <Arch
                title="Weddings"
                image="https://res.cloudinary.com/dtowqekrg/image/upload/f_auto,q_auto/v1782677760/IMG_2193_qjooos.webp"
              />
            </Link>
            <Link to={"/brand"}>
              <Arch
                title="Brand Events"
                image="https://res.cloudinary.com/dtowqekrg/image/upload/f_auto,q_auto/v1782677760/IMG_0901_o6lzzj.webp"
              />
            </Link>
            <Link to={"/other"}>
              <Arch
                title="Birthdays & Showers"
                image="https://res.cloudinary.com/dtowqekrg/image/upload/f_auto,q_auto/v1782677761/IMG_9847_vjw7sf.webp"
              />
            </Link>
          </div>
        </div>
        <ClientLogos></ClientLogos>
        <div className="justify-center items-center w-full">
          <RecentEventsGrid />
        </div>

        <div id="faq-section" className={styles.faq}>
          <h2 className="title-secondary">Frequently Asked Questions</h2>
          <Faq faqs={faqData} />
        </div>
        <Testimonial></Testimonial>

        <div id="booking-section" className={styles.bookingSection}>
          <BookingForm />
        </div>
        <div id="contact-section">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
