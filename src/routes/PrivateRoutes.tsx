import { useContext } from "react";
import { AuthContext, AuthContextType } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
// import Loading from "../components/Loading/Loading";

function PrivateRoutes({ children }: { children: React.ReactNode }) {
  const { token } = useContext(AuthContext) as AuthContextType
//   if(loading){
//     return <Loading/>
//   }
  if (token) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

export default PrivateRoutes;
