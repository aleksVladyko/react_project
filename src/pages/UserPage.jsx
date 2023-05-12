import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { endSession, getSession } from "../storage";

export const UserPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    const session = getSession();
    setEmail(session.email);

    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    navigate("/home");
  };

  return (
    <div>
      <h1>страница пользователя {email}</h1>
      <p> Check the console for your (access/session) token.</p>
      <button onClick={onLogout}>Log out from {email}</button>
    </div>
  );
};
