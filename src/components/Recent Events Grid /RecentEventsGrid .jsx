import { Link } from "react-router-dom";
import styles from "./RecentEventsGrid.module.css";
import { buildUrl } from "../../utils/cloudinary";
const data = [
  {
    title: "Tiffany & Co Mother's Day Event",
    route: "/brand/tiffany&co",
    image: { id: "IMG_0378_in5bb9", ext: "webp" },
  },
  {
    title: "Creed Christmas Event",
    route: "/brand/creed",
    image: { id: "IMG_4796_d4aqr1", ext: "webp" },
  },
  {
    title: "Jay & Anh's Wedding",
    route: "/wedding/jay&anh",
    image: { id: "IMG_2233_gbctwb", ext: "webp" },
  },
  {
    title: "Jasmine's Bridal Shower",
    route: "/bridalshower/jasmine",
    image: { id: "DSC04394_ze4q4z", ext: "webp" },
  },
];

const RecentEventsGrid = () => {
  return (
    <div className={styles.container}>
      <h1 className="title-secondary">Recent Events</h1>
      <div className={styles.grid}>
        {data.map(({ image, title, route }, index) => (
          <Link key={index} to={route} className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={buildUrl(image, 800)}
              srcSet={`${buildUrl(image, 400)} 400w, ${buildUrl(image, 800)} 800w, ${buildUrl(image, 1200)} 1200w`}
              sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
              alt={title}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className={styles.titleOverlay}>
              <h1 className={styles.eventName}>{title}</h1>
            </div>
          </Link>
        ))}
        <div className={styles.blob}></div>
        <div className={styles.blob2}></div>
      </div>
    </div>
  );
};

export default RecentEventsGrid;
