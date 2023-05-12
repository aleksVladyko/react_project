// import { Form } from "./Form";
// import { useDispatch } from "react-redux";
// import {setUser} from "../../../store/slices/userSlice"
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { Navigate } from "react-router-dom";

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleLogin = (email, password) => {
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//     .then(({user}) => {
//       console.log(user);
//       dispatch(setUser({
//         email: user.email,
//         id: user.uid,
//         token: user.accessToken,
//       }));
//       <Navigate to='/'/>;
//     })
//     .catch(console.error)
// }
//    return (

//       <Form
//       title='Войдите'
//       handleClick={handleLogin}
//       />

//   );
//

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInUser } from "../../../firebase";
import { isLoggedIn, startSession } from "../../../storage";
import { MyButton } from "../button/MyButton";
import { MyInput } from "../input/MyInput";

export const LoginForm = ({ title }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // redirect the user if he's already logged in
  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/login/:id");
    }
  }, [navigate]);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    // validate the inputs
    if (!email || !password) {
      setError("Please enter your username and password.");
      //   return error(error.message);
    }

    // clear the errors
    setError("");
  
    try {
      let loginResponse = await signInUser(email, password);
      startSession(loginResponse.user);
      navigate("/home");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="login_page">
      <div className="container_form">
        <div className="title_form_login">
          <h2 className="title_form_login">{title}</h2>
          <p className="title_form_login">
            <img
              className="icon_login_form"
              src={require("../../../images/user-2.jpg")}
              alt="icon_user"
              width="60"
              height="60"
            />
          </p>
        </div>
        <form className="form_login" onSubmit={onSubmit}>
          <MyInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            placeholder="email"
            required
            autoFocus={true}
          />
          <MyInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            placeholder="password"
            required
          />
          <MyButton type="submit">{title}</MyButton>
        </form>
        <p>
          <span>Нет аккаунта ?</span>{" "}
          <Link to="/register">Зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  );
};
