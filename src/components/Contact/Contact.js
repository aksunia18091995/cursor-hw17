import styles from './Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";


export const Contact = ({ contact }) => {
    const { firstName, lastName, phone, gender } = contact;
  return (
      <div className={styles.contact}>
          <div className={styles.contact_details}>
        {gender !== "unknown" && (
          <FontAwesomeIcon
            icon={gender === "male" ? faMars : faVenus}
            className={gender === "male" ? styles["male-icon"] : styles["female-icon"]}
            alt={gender}
          />
        )}
        <span className={styles["contact-name"]}>{` ${firstName} ${lastName} `}</span>
        <span className={styles["contact-phone"]}>{phone}</span>
      </div>
    </div>
  );
};
