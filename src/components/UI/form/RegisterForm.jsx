// import { Form } from "./Form";
// import { useDispatch } from "react-redux";
// import {setUser} from "../../../store/slices/userSlice"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { Navigate } from "react-router-dom";

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleRegister = (email, password) => {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//         .then(({user}) => {
//           console.log(user);
//           dispatch(setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.accessToken,
//           }));
//           <Navigate to='/login'/>;
//         })
//         .catch(console.error)
//   }
//    return (

//       <Form
//       title='Зарегистрируйтесь'
//       handleClick={handleRegister}
//       />

//   );
// };

import { useEffect, useState } from "react";
import { createUser } from "../../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { isLoggedIn, startSession } from "../../../storage";
import { MyButton } from "../button/MyButton";
import { MyInput } from "../input/MyInput";

export const RegisterForm = ({ title }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // redirect the user if he's already logged in
  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/login/:id");
    }
  }, [navigate]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password || !repeatPassword) {
      setError(error + "Please fill out all the fields.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    // clear the errors
    setError("");

    try {
      let registerResponse = await createUser(email, password);
      startSession(registerResponse.user);
      navigate("home");
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            autoFocus={true}
            required
          />
          <MyInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
          <MyInput
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="password"
            required
          />
          <MyButton type="submit">{title}</MyButton>
        </form>
        <p>
          <span>Есть аккаунт ?</span> <Link to="/login">Войдите</Link>
        </p>
      </div>
    </div>
  );
};
