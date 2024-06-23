import { createContext, useState } from "react";
import { RegUserProps, registerUserApi } from "../API/api";


export const AuthContext = createContext<AuthInfo | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};
// export const AuthContext = createContext(null);
function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null);

  //   sign up
  const register = async (payload: RegUserProps) => {
    try {
      const newUser = await registerUserApi(payload);
      setUser(newUser);
    } catch (error) {
      console.log(error);
    }
  };
  const authInfo = { user, register };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
