import { useContext, ReactNode, useEffect } from 'react';
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

  useEffect(() => {
    console.log('popup');

  }, [])



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
                <XIcon fill="correntcolor" />
              </div>
            </div>
            {PopUp.component}
          </div>
        </div>
      )}
    </div>
  );
}
