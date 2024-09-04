import styles from './PopUp.module.css';
import { XIcon } from '../Icons/Icons';
import { usePopupStore } from '../../store';

export default function PopUp() {
  const { PopUp, setPopUp } = usePopupStore();

  return (
    <div className={styles.allpopup}>
      {PopUp && (
        <div
          className={styles.container}
          onClick={() => setPopUp(null)}
          data-testid="popup-container"
        >
          <div
            className={styles.popup}
            onClick={(e) => {
              e.stopPropagation();
            }}
            data-testid="popup-content"
          >
            <div className={styles.top}>
              <h1>{PopUp.title}</h1>
              <div className={styles.close} onClick={() => setPopUp(null)}>
                <XIcon fill="white" />
              </div>
            </div>
            <div className={styles.main}>{PopUp.component}</div>
          </div>
        </div>
      )}
    </div>
  );
}
