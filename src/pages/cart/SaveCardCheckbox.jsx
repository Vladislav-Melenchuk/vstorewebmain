import styles from "./SaveCardCheckbox.module.css";

const SaveCardCheckbox = ({ label, checked, onChange }) => {
  return (
    <div
      className={`${styles.wrapper} ${checked ? styles.active : ""}`}
      onClick={onChange}
    >
      <div className={styles.checkbox}>
        {checked && <span className={styles.check}>✔</span>}
      </div>

      <div className={styles.content}>
        <span>{label}</span>
      </div>
    </div>
  );
};

export default SaveCardCheckbox;