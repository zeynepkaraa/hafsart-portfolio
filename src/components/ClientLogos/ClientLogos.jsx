import styles from "./ClientLogos.module.css";

const logos = [
  {
    src: "images/logos/tiffany.jpg",
    alt: "Tiffany&Co",
  },
  {
    src: "images/logos/creed.jpg",
    alt: "Creed",
  },
  {
    src: "images/logos/melaine.jpg",
    alt: "Melaine Lyne",
  },
  {
    src: "images/logos/lincoln.jpg",
    alt: "Lincoln",
  },
  {
    src: "images/logos/sickkids.jpg",
    alt: "Sickkids",
  },
];
const ClientLogos = () => {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        {logos.map((logo) => (
          <div key={logo.src} className={styles.item}>
            <img src={logo.src} alt={logo.alt} className={styles.img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
