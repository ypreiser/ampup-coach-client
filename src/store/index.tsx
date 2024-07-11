import { create } from 'zustand';
import { IUser, UsePopupStore, PopUpState } from '../types';


export const usePopupStore = create<UsePopupStore>((set) => ({
    PopUp: null,
    setPopUp: (popup: PopUpState | null) => set({ PopUp: popup }),
}));


interface UserStore {
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    login: (user: IUser) => set({ user }),
    logout: () => set({ user: null }),
}));