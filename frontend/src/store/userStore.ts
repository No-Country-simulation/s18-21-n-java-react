import {create, StateCreator} from "zustand";
import { persist } from "zustand/middleware";
export interface LoggedUser {
  id: number,
  jwtToken: string,
};
interface UserState {
  user: LoggedUser,
  logUser: (newUser: LoggedUser) => void,
  logoutUser: () => void,
}

const userApi: StateCreator<UserState> = (set) => ({
  user: { id: -1, jwtToken: "" },

  logUser(newUser: LoggedUser) {
    set({ user: newUser });
  },
  logoutUser() {
    set({ user: { id: -1, jwtToken: "" } });
  },
});

export const useUserStore = create<UserState>()(persist(userApi, {
  name: "userStorage"
}));