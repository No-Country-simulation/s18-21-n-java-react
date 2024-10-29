import {create} from "zustand";
export interface LoggedUser {
  jwtToken: string,
  id: number,
};
interface UserState {
  user: LoggedUser,
  logUser: (newUser: LoggedUser) => void,
  logoutUser: () => void,
}

export const useUserStore = create<UserState>((set) => ({
  user:
    localStorage.getItem("user") === "null" ||
    localStorage.getItem("user") === "undefined"
      ? { id: -1, jwtToken: "" }
      : JSON.parse(localStorage.getItem("user") ?? '{ "id": -1, "jwtToken": "" }'),

  logUser(newUser: LoggedUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    set({ user: newUser });
  },
  logoutUser() {
    localStorage.removeItem("user");
    set({ user: { id: -1, jwtToken: "" } });
  },
}));