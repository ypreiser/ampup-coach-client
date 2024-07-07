// src/context/DataContext.tsx

import { createContext } from 'react';

interface PopUpState {
  title: string;
  component: React.ReactNode;
}

interface DataContextProps {
  PopUp: PopUpState | null;
  setPopUp: React.Dispatch<React.SetStateAction<PopUpState | null>>;
}

const DataContext = createContext<DataContextProps>({
  PopUp: null,
  setPopUp: () => {}
});

export default DataContext;
