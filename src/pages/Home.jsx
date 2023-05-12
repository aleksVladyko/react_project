import { isLoggedIn } from "../storage";
import { UserGreeting } from "../components/UI/Greeting/UserGreeting";
import { GuestGreeting } from "../components/UI/Greeting/GuestGreeting";
import Recipes from "../components/UI/Recipe/Recipes";
import database from "../database.json"

export const Home = () => {
  const LoggedIn = isLoggedIn();
  const ing = database.ingredients[0];
  console.log(ing);
  return (
    <div className="container-fluid ">
      {LoggedIn ? <UserGreeting /> : <GuestGreeting />}

      <div className="container-fluid ">
        <h1 className="text-center"> dish recipes</h1>
        <div>
          <Recipes />
      
        </div>
      </div>
    </div>
  );
};
