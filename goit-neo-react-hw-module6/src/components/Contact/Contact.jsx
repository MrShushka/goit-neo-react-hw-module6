import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <FaUser className={styles.icon} />
        <span>{name}</span>
      </div>
      <div className={styles.row}>
        <FaPhone className={styles.icon} />
        <span>{number}</span>
      </div>
      <button className={styles.button} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;