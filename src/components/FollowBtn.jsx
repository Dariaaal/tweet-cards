import React from "react";
import { useState } from "react";

export default function FollowBtn () {
    const [follow, setFollow] = useState(false);

    const OnFollowClick = () => {
       setFollow(prevState => !prevState)
       console.log(follow)
    }
    
    return <button type="button" onClick={OnFollowClick}>{follow? "Following" : "Follow"}</button>
}