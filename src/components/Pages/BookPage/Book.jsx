import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookingForm from "../../BookingForm";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./Book.module.css";
import StepCard from "../../StepCard/StepCard";
import Faq from "../../Faq/Faq";
import ContactUs from "../../ContactUs/ContactUs";
import { faqData } from "../../../data/faqData";
import Package from "../../Packages/Packages";
import SEO from "../../SEO.jsx";

const packages = [
  {
    packageName: "Starter",
    packageType: "3 Hours • 1 artist",
    description:
      "Perfect for intimate gatherings. Includes up to 30 guest illustrations, one illustrator.",
  },
  {
    packageName: "Classic",
    packageType: "5 Hours • 1 artist",
    description:
      "Ideal for weddings and mid-size events. Includes up to 50 guest illustrations, one illustrator.",
  },
  {
    packageName: "Luxe",
    packageType: "4+ Hours • 2+ artists ",
    description:
      "For large-scale events. Includes up to 80+ guest illustrations,  two or more illustrators.",
  },
];

const steps = [
  {
    title: "Fill Out the Form",
    description:
      "Once you’re ready to get started, please fill out the form with details about your event. This helps me understand your requirements and provide an accurate quote.",
  },
  {
    title: "Consultation",
    description:
      "We’ll discuss the details of your event, including the style of illustration you’re looking for and any specific themes or ideas you have in mind.",
  },
  {
    title: "Set-Up",
    description:
      "I’ll bring all the necessary materials and set up a dedicated space where guests can come up to the table. I’ll take a picture of each guest for reference.",
  },
  {
    title: "Delivery",
    description:
      "Guests are free to enjoy the event while I sketch quietly in the background. Once their illustration is ready, they can stop by table and pick it up.",
  },
];

const Book = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <SEO
        title="Book Hafsart | Live Illustration for Your Event"
        description="Book Hafsa for live fashion illustration at your wedding, brand event or special occasion. Based in Toronto, available for travel."
        keywords="book live illustrator, hire event artist, wedding illustrator booking, Toronto event artist"
        image="https://res.cloudinary.com/dtowqekrg/image/upload/v1782880004/hafsart_thumbnail_simf0y.jpg"
      />
      <div className={styles.page}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.content}>
              <h1 className="title-primary"> What is Live Illustration?</h1>
              <p className="description">
                Live illustration is sketching guests in real time to capture
                their outfits and energy in elegant, hand-drawn fashion
                portraits. It’s a creative and personal gift for your guests,
                making your event more memorable.
              </p>
              <button
                className={styles.btn}
                onClick={() =>
                  document
                    .getElementById("booking-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Now
              </button>
            </div>
            <div className={styles.visual}>
              <div className={styles.imgWrapper}>
                <img className={styles.image} src="/images/live.png" />
              </div>
              <div className={styles.arch}></div>
            </div>
          </div>

          <h2 className="title-secondary">How It Works</h2>
          <div className={styles.grid}>
            {steps.map((step, index) => (
              <StepCard
                key={index}
                stepNumber={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
        <div className={styles.packages}>
          <h2 className="title-secondary">Popular Packages</h2>
          <div className={styles.cards}>
            {packages.map((pkg) => (
              <Package
                key={pkg.packageName}
                packageName={pkg.packageName}
                packageType={pkg.packageType}
                description={pkg.description}
              />
            ))}
          </div>
          <p className="description">
            All packages are fully customizable. Hours, number of artists, and
            add-ons can all be tailored to suit your event and vision.
          </p>
        </div>
        <div className={styles.packages}>
          <h4 className={styles.addOnsTitle}>Add-ons</h4>
          <div className={styles.addOns}>
            <div className={styles.addOn}>
              <h5 className={styles.addOnTitle}>Custom Paper</h5>
              <p className={styles.addOnDescription}>
                Upgrade to premium textured or branded paper to make each
                illustration feel even more special. Customization options
                include logos, initials, names, and dates.
              </p>
            </div>
            <div className={styles.addOn}>
              <h5 className={styles.addOnTitle}>Takeaway Services</h5>
              <p className={styles.addOnDescription}>
                In case all guests are not covered during the event, remaining
                portraits can be illustrated afterwards and shipped directly to
                you for an additional cost.
              </p>
            </div>
          </div>
        </div>

        <div id="faq-section" className={styles.faq}>
          <h2 className="title-secondary">Frequently Asked Questions</h2>
          <Faq faqs={faqData} />
        </div>

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

export default Book;
