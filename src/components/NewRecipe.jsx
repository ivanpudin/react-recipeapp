export default function NewRecipe(props) {
    return(
        <form
        onSubmit={(e) => props.submitHandler(e)}
        className="flex flex-col justify-center items-center m-8">
            <h2 className="text-xl">New Recipe</h2>
            <input
            type="text"
            name="name"
            placeholder="Name of the dish"
            onChange={props.onInput}
            required
            className="h-8 w-44 border-b border-black m-4 focus:scale-110 outline-none" />
            <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={props.onInput}
            required
            className="h-8 w-44 border-b border-black m-4 focus:scale-110 outline-none" />
            <select
            name="country"
            placeholder="Country of origin"
            onChange={props.onInput}
            required
            className="h-8 w-44 border-b border-black m-4 focus:scale-110 outline-none">
                <option value="">Select country</option>
                {props.countries.map((country, i) => {
                    return(
                        <option
                        key={i}
                        value={country.short}>{country.name}</option>
                    )
                })}
            </select>
            <div className="flex flex-col items-center">
                {props.ingredients.map((item, i) => {
                    return(
                        <input
                        key={i}
                        type="text"
                        placeholder="Ingredients eg. 4 onions"
                        value={item.value}
                        onChange={(e) => props.ingredientInput(e, i)}
                        required
                        className="h-8 w-44 border-b border-black m-4 focus:scale-110 outline-none" />
                    )
                })}
                <button
                type="button"
                onClick={props.addIngredient}
                className="text-2xl border border-black h-8 w-8 hover:opacity-20 flex justify-center items-center rounded">+</button>
            </div>
            <input
            type="text"
            name="instructions"
            placeholder="Instructions"
            onChange={props.onInput}
            className="h-44 w-56 border border-black m-4 text-center outline-none rounded-xl" />
            <button className="border border-black p-2 hover:opacity-20 m-4 rounded">Submit</button>
        </form>
    )
}