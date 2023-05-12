import { useEffect } from "react";
import { RegisterForm } from "../components/UI/form/RegisterForm";
import { useLocation, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
 const location = useLocation();
 const navigate = useNavigate();
 
  //  const fromPage = location.state?.from?.pathname;
  //  console.log(location);
   useEffect(() => {
    if (location.pathname === '/register') {
      navigate('/register');
    
    }
  }, []);
  return (
    <>
    {/* {fromPage} */}
    <RegisterForm title='Register'/>
    </>
    
  );
};
