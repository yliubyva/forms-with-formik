import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export const Modal = ({ message, textButton, onClose, isOpen }) => {
    if(!isOpen) {
        return null;
    }

    return (
        <div className={`${styles.modal} ${isOpen ? styles.displayBlock : styles.displayNone}`}>
            <div className={styles.content}>
                <p>{message}</p>
                <button 
                    onClick={onClose}
                    className={styles.button}
                >
                    {textButton}
                </button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
}