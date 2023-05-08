import React from "react";
import FollowBtn from "./FollowBtn";

const UsersList = ({users}) => (
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
        <FollowBtn/>
    </li>
    ))}
    </ul> 
);

export default UsersList;