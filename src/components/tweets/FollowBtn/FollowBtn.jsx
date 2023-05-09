import React from "react";
import { useState } from "react";
import css from './FollowBtn.module.css'

export default function FollowBtn ({followers}) {
    const [follow, setFollow] = useState(false);

    const OnFollowClick = () => {
       setFollow(prevState => !prevState)
       console.log(follow)
       if (follow) {
        
       }
    }
    
    return <div className={css.btn}><button style={{ backgroundColor: follow ? '#5CD3A8' : '#EBD8FF' }} className={css.follow} type="button" onClick={OnFollowClick}>{follow? "Following" : "Follow"}</button></div>
}