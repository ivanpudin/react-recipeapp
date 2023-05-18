export default function Recipe(props) {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-10 m-8 max-w-5xl place-items-center">
        <div className="relative">
          <div className="w-10 h-10 border rounded-full overflow-hidden flex justify-center items-center absolute top-1 right-1 bg-white">
            <img
            src={`https://www.flagpictures.com/static/flags/vector/${props.country}.svg`}
            alt={props.country}
            className="scale-150" />
          </div>
          <img
              src={`https://source.unsplash.com/500x400/?${props.name}`}
              alt={props.name} />
        </div>
        <h2 className="text-3xl">{props.name}</h2>
        <div>
            {props.ingredients.map((item, i) => {
                return(
                    <li key={i}>{item.value}</li>
                )
            })}
        </div>
        <p className="bg-gray-300 p-8">{props.instructions}</p>
      </div>
    </div>
  );
};
