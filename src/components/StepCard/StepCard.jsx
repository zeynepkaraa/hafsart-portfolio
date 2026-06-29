import styles from "./StepCard.module.css";

const StepCard = ({ stepNumber, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}> {stepNumber}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default StepCard;
