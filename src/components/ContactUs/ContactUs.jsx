import styles from "./ContactUs.module.css";
import { BsEnvelope, BsInstagram, BsTiktok } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Get in Touch!</h2>
      <p className={styles.subtext}>
        Got any quetions? I’d love to hear more about what you’re looking for.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <BsEnvelope className={styles.icon} />
          </div>
          <p className={styles.cardSub}>Reach out anytime</p>
          <a href="mailto:info@hafsart.com" className={styles.cardValue}>
            info@hafsart.com
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <BsInstagram className={styles.icon} />
          </div>
          <p className={styles.cardSub}>See my latest work</p>
          <a
            href="https://www.instagram.com/hafsartt"
            className={styles.cardValue}
            target="_blank"
          >
            @hafsartt
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <BsTiktok className={styles.icon} />
          </div>
          <p className={styles.cardSub}>Behind-the-scenes & more</p>
          <a
            href="https://www.tiktok.com/@hafsartt_"
            className={styles.cardValue}
            target="_blank"
          >
            @hafsartt_
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
