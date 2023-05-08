import React from "react";

const UsersList = ({users, onClick}) => (
<ul>
    {users.map(({id, user, tweets, followers, avatar}) => (
    <li key={id}>
        <img
        width="62"
        height="62"
        className="user-avatar"
        src={avatar}
        alt={user}
        />
        <p>{tweets} Tweets</p>
        <p>{followers} Followers</p>
        <button type="button" onClick={() => onClick(id)}>Follow</button>
    </li>
    ))}
    </ul>
);

export default UsersList;