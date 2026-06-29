import Card from "./Card";
import styles from "./Card.module.css";
const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <h1 className={styles.cardTitle}>
        <span className={styles.highlight}>Kind </span> Words
      </h1>
      <div className={styles.cards}>
        <Card
          review="Thank you so much for all your time and effort in our Women Empowerment Awards and doing the illustrations for all of our guests. You are so incredibly talented and everyone really enjoyed your beautiful portraits."
          clientName="Klaudia Capalbo"
          eventType="Women Empowerment Awards"
        />
        <Card
          review="I wanted to thank you once again for making our event so memorable. Everyone loved your illustration. We truly loved working with you. We really appreciate your support and your donation of your time towards our event and the Sickkids Hospital Thank you!"
          clientName="Romelia"
          eventType="SickKids Foundation"
        />
        <Card
          review="Oh Hafsa, you are incredible. We absolutely adored having you — the guests raved about you, and we couldn’t have been happier. You were all so wonderful. Our guests loved you, and so do we. THANK YOU so much! 💖"
          clientName="Megan"
          eventType="Wedding"
        />
      </div>
    </div>
  );
};

export default Testimonial;
