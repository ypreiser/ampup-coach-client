import { useContext, ReactNode } from 'react';
import styles from './PopUp.module.css';
import { XIcon } from '../Icons/Icons';
import DataContext from '../../context/DataContext';

interface PopUpContent {
  title: string;
  component: ReactNode;
}

export default function PopUp() {
  const { setPopUp, PopUp } = useContext(DataContext) as {
    setPopUp: (content: PopUpContent | null) => void;
    PopUp: PopUpContent | null;
  };




  return (
    <div className={styles.allpopup}>
      {PopUp && (
        <div className={styles.container} onClick={() => setPopUp(null)}>
          <div
            className={styles.popup}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.top}>
              <div>
                <h1>{PopUp.title}</h1>
              </div>
              <div className={styles.close} onClick={() => setPopUp(null)}>
                <XIcon fill="white" />
              </div>
            </div>
            <div className={styles.main}>
              {PopUp.component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
