import { NavLink } from "react-router-dom";
import css from './AppBar.module.css'

export default function AppBar () {
    return <div className={css.appbar}>
        <NavLink to="/homepage" className={css.nav}><p>Home</p></NavLink>
        <NavLink to="/tweets" className={css.nav}><p>Tweets</p></NavLink>
    </div>
}