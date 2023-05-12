import { Link } from "react-router-dom";
export const GuestGreeting = () => {
  
   return (
    <div>
      <b>Wellcom guest!!!</b>    <span>Есть аккаунт ?</span> <Link to="/login">Войдите</Link>
    </div>
  );
};