// src/types.d.ts

export interface PopUpState {
    title: string;
    component: React.ReactNode;
  }
  
  export interface DataContextType {
    setPopUp: (value: PopUpState | null) => void;
    PopUp: PopUpState | null;
  }
  