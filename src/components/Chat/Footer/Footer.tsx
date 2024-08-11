import styles from "../styles.module.scss";
import UploadImage from "./UploadImage";

function Footer() {
  return (
    <footer>
      <UploadImage />
      <p className={styles.version}>Planty 1.0.0</p>
    </footer>
  );
}

export default Footer;
