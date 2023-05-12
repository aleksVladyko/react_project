import Recipe from "./Recipe";

const Recipes = (props) => {
  const recipe = [];
   return (
    <div className="row justify-content-center ">
      <Recipe name={'samosa'}/>
      {/* <Recipe name={'samosa'}/>
      <Recipe name={'samosa'}/>
      <Recipe name={'samosa'}/>
      <Recipe name={'samosa'}/>
      <Recipe name={'samosa'}/> */}
    </div>
  );
};
export default Recipes;