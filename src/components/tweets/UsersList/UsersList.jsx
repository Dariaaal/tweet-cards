import UserCard from "../UserCard/UserCard";
import css from './UsersList.module.css';

export const UsersList = ({users}) => {
  return (
            <ul className={css.list}>
            {users && users.map((user)=>(
                <UserCard users={user}/>
            ))}
        </ul>
  )
}
