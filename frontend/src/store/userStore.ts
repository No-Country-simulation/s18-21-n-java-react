import {create} from "zustand";

interface LoggedUser {
  jwtToken: string,
  id: number,
};

interface UserState {
  user: LoggedUser | null,
  logUser: (newUser: LoggedUser) => void,
  logoutUser: () => void,
}

const initialUser = null;

export const useUserStore = create<UserState>((set) => ({
  user: initialUser,
  logUser(newUser: LoggedUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    set({user: newUser});
  },
  logoutUser() {
    localStorage.removeItem("user");
    set({user: null});
  }
}))