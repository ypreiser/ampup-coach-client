// src/types.d.ts

interface PopUpState {
  title: string;
  component: React.ReactNode;
}

interface UsePopupStore {
  PopUp: PopUpState | null;
  setPopUp: (popup: PopUpState | null) => void;
}

export interface ICard {
  _id: string;
  cardOrder: number;
  done: boolean;
  // Add other card properties as needed
}

export interface IChallenge {
  name: string;
  cards: ICard[];
  cardsOfToday?: ICard[];
}

export interface IUser {
  fullName: string;
  email: string;
  permission: Permission;
  password?: string;
  picture?: string;
  link?: string;
  myChallenges?: any[];
  phoneNumber: string;
  id: string;
}
