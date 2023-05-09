import React from "react";
import FollowBtn from "../FollowBtn/FollowBtn";
import css from './UsersList.module.css';
import picture from 'img/cardpicture.png';
import goit from 'img/goit.png'

const UsersList = ({users}) => (

    <>
    <ul className={css.list}>
    {users.map(({id, user, tweets, followers, avatar}) => (
    <li className={css.card} key={id}>
        <img className={css.logo} src={goit} alt="" />
        <img className={css.picture} src={picture} alt="" />
        <div className={css.line}></div>
        <div className={css.wrap}>
        <img
        className={css.photo}
        width="62"
        height="62"
        src={avatar}
        alt={user}
        />
        </div>
        <div className={css.text}>
        <p>{tweets} Tweets</p>
        <p>{new Intl.NumberFormat('en-IN').format(followers)} Followers</p>
        </div>
        <FollowBtn followers={followers}/>
    </li>
    ))}
    </ul> 
    </>
);

export default UsersList;