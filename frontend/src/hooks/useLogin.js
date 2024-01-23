import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSnackbar } from "notistack";


export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { enqueueSnackbar } = useSnackbar();


  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save the user to the localStorage
      localStorage.setItem("User", JSON.stringify(json));

      //   update AuthContext
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      enqueueSnackbar("Login Successfully", { variant: "success" });
    }
  };

  return { login, error, isLoading };
};
