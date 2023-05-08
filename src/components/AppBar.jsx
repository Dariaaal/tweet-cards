import { NavLink } from "react-router-dom"

export default function AppBar () {
    return <div>
        <NavLink to="/homepage"><p>Home</p></NavLink>
        <NavLink to="/tweets"><p>Tweets</p></NavLink>
    </div>
}