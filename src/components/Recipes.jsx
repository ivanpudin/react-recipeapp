import { NavLink } from "react-router-dom";

export default function Recipes(props) {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-10 m-8 max-w-5xl">
        {props.data.map((recipe, i) => {
          return(
              <div key={i} className="relative border pb-4 shadow-xl">
                <div className="w-10 h-10 border rounded-full overflow-hidden flex justify-center items-center absolute top-1 right-1 bg-white">
                  <img
                  src={`https://www.flagpictures.com/static/flags/vector/${recipe.country}.svg`}
                  alt={recipe.country}
                  className="scale-150" />
                </div>
                <img
                src={`https://source.unsplash.com/500x400/?${recipe.name}`}
                alt={recipe.name} />
                <p className="m-4">{recipe.name}</p>
                <NavLink
                to={`/recipes/${recipe.name}`}
                className="border border-black p-2 hover:opacity-20 m-4 rounded">See more</NavLink>
              </div>
            )
        })}
      </div>
    </div>
  );
};
