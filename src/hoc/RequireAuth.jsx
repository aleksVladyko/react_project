import { useLocation, Navigate } from "react-router-dom";
import { isLoggedIn } from "../storage";


export const RequireAuth = ({children}) => {
  const location = useLocation();
  const user = isLoggedIn();
  
  if(!user){
    return <Navigate to='/login' state={{from: location}}/>
  }
   return children;
};