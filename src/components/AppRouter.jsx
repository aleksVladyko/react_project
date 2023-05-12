import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../pages/Home";
import {ErrorPage} from "../pages/ErrorPage";
import {UserPage} from "../pages/UserPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Navbar } from "./UI/navbar/Navbar";
import { RequireAuth } from "../hoc/RequireAuth";
import { Education } from "../pages/Education";
import Recipe from "./UI/Recipe/Recipe";
import CardRecipe from "./UI/Recipe/CardRecipe";


const AppRouter = () => {
  
   return (
    
     <Routes>
       <Route path="/" element={<Navbar />}>
         <Route index element={<Home />} />
         <Route path="education" element={<Education />} />
         <Route path="recipe" element={<Recipe />} />
         <Route path="cardrecipe" element={<CardRecipe />} />
         <Route path="login" element={<LoginPage />} errorElement={<ErrorPage />} />
         <Route path="login/:id" element={
         <RequireAuth>
         <UserPage />
         </RequireAuth>
          }/>
         <Route path="register" element={<RegisterPage />} errorElement={<ErrorPage />} />
         <Route path="error" element={<ErrorPage />} />
         <Route path="/*" element={<Home />} />
         </Route>
     </Routes>

  );
};
export default AppRouter;