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

export const useUserStore = create<UserState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") ?? '{"id": 0, "jwtToken": ""}'),
  logUser(newUser: LoggedUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    set({user: newUser});
  },
  logoutUser() {
    localStorage.removeItem("user");
    set({user: {id: 0, jwtToken: ""}});
  }
}))