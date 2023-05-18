import { NavLink } from "react-router-dom"

export default function Header() {
    return(
        <header className="flex flex-row justify-between items-center p-4 bg-gray-400">
            <NavLink to='/'>
                <h1 className="text-2xl">TasteIT</h1>
            </NavLink>
            <div>
                <NavLink
                to='/'
                className='hover:opacity-20 ml-4'>Home</NavLink>
                <NavLink
                to='/recipes'
                className='hover:opacity-20 ml-4'>All recipes</NavLink>
                <NavLink
                to='/new'
                className='hover:opacity-20 ml-4'>New Recipe</NavLink>
            </div>
        </header>
    )
}