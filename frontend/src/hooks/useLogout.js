import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    // Remove user to local Storage
    localStorage.removeItem("User");

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
