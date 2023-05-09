import React, { useState } from "react";
import css from './UserCard.module.css';
import picture from 'img/cardpicture.png';
import goit from 'img/goit.png'

export default function UserCard ({users}) {

    const [follow, setFollow] = useState(false);

    const OnFollowClick = () => {
        setFollow(prevState => !prevState)
        console.log(follow)
     }

    return <>
    <li className={css.card} key={users.id}>
        <img className={css.logo} src={goit} alt="" />
        <img className={css.picture} src={picture} alt="" />
        <div className={css.line}></div>
        <div className={css.wrap}>
        <img
        className={css.photo}
        width="62"
        height="62"
        src={users.avatar}
        alt={users.user}
        />
        </div>
        <div className={css.text}>
        <p>{users.tweets} Tweets</p>
        <p>{new Intl.NumberFormat('ja-JP').format(follow? users.followers+1: users.followers)} Followers</p>
        </div>
        <div className={css.btn}><button style={{ backgroundColor: follow ? '#5CD3A8' : '#EBD8FF' }} className={css.follow} type="button" onClick={OnFollowClick}>{follow? "Following" : "Follow"}</button></div>
    </li>
    </>
};