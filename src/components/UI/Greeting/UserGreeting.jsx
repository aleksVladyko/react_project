import { getSession } from "../../../storage";


export const UserGreeting = (props) => {
    const session = getSession();
    const userEmail = session.email;
   return (
    <>
     <span style={{ color: "orangered" }}> Wellcom {userEmail} !!!</span>
    </>
   
  );
};