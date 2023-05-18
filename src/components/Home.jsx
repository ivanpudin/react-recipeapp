import { NavLink } from "react-router-dom"

export default function Home() {
    return(
        <div>
            <div className="bg-[url('https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80')] bg-center bg-no-repeat bg-cover w-screen h-96 flex flex-col justify-center items-center">
                <h1 className="text-3xl">Check out our fresh recipes</h1>
            </div>
            <div className="flex flex-row justify-center items-center border m-8 shadow-xl flex-wrap">
                <div className="flex flex-col justify-center items-center border m-8 p-4 shadow-xl bg-gray-300">
                    <p className="text-xl">All recipes</p>
                    <NavLink
                    to={`/recipes`}
                    title="All recipes"
                    className="border border-black p-2 hover:opacity-20 m-4 rounded">See more</NavLink>
                </div>
                <div className="flex flex-col justify-center items-center border m-8 p-4 shadow-xl bg-gray-300">
                    <p className="text-xl">New recipe</p>
                    <NavLink
                    to={`/new`}
                    title="Create new recipe"
                    className="border border-black p-2 hover:opacity-20 m-4 rounded">See more</NavLink>
                </div>
                <div className="flex flex-col justify-center items-center border m-8 p-4 shadow-xl bg-gray-300">
                    <p className="text-xl">BCH</p>
                    <a
                    href="https://www.bc.fi"
                    target="_blank"
                    rel="noreferrer"
                    title="Visit BCH website"
                    className="border border-black p-2 hover:opacity-20 m-4 rounded">See more</a>
                </div>
            </div>
        </div>
    )
}