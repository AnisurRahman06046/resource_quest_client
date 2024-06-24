import { createContext, useEffect, useState } from "react";
type LoginResponse = {
  status: number;
  data: {
    access_token: string;
    // Add other properties as needed
  };
  // Add other properties as needed
};
export type AuthContextType = {
  login: (payload: { email: string; password: string }) => Promise<LoginResponse>;
  logout: () => void;
  token: string | null;
  loading: boolean;
};
export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};
// export const AuthContext = createContext(null);
function AuthProvider({ children }: AuthProviderProps) {
  // const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("site")) {
      setToken(localStorage.getItem("site"));
      
    }
    setLoading(false);
  }, []);
  // login
  const login = async (payload: { email: string; password: string }): Promise<LoginResponse> => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_SITE}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.status === 200) {
      // setLoading(true);
      console.log(data.data.access_token);
      setToken(data.data.access_token);
      localStorage.setItem("site", data.data.access_token);
    }
    // console.log(data)
    // console.log(token,'from auth')
    return data;
  };

  const logout=()=>{
    setToken(null)
    localStorage.removeItem("site")
  }

  const authInfo = { login, token, loading,logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
