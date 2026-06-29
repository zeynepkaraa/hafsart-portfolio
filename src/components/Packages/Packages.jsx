import styles from "./Package.module.css";
import { PiFlowerLotusLight } from "react-icons/pi";

const Package = ({ description, packageName, packageType }) => {
  return (
    <div className={styles.package}>
      <div className={styles.packageInfo}>
        <div className={styles.sticker}>
          {" "}
          <PiFlowerLotusLight />
        </div>
        <div>
          <h4 className={styles.packageName}>{packageName}</h4>
          <p className={styles.packageType}>{packageType}</p>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Package;
