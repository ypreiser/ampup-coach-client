// src/context/ManageContext.tsx

import React, { useState } from 'react';
import DataContext from './DataContext';

interface PopUpState {
  title: string;
  component: React.ReactNode;
}

export function ManageContext({ children }: { children: React.ReactNode }) {
  const [PopUp, setPopUp] = useState<PopUpState | null>(null);

  return (
    <DataContext.Provider
      value={{
        PopUp,
        setPopUp,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
