import { useState } from "react";
import styles from "./Faq.module.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={styles.faqIcon}>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          {typeof answer === "string"
            ? answer.split("\n").map((line, index) => <p key={index}>{line}</p>)
            : answer}
        </div>
      )}
    </div>
  );
};

const Faq = ({ faqs }) => {
  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
