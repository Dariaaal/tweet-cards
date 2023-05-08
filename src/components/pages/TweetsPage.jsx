import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/user-selectors";
import { fetchUsers } from "../../redux/user-operations";
import UsersList from "../UsersList";
import { LoadMoreBtn } from "../LoadMoreBtn";

export default function TweetsPage() {

    const dispatch = useDispatch();

    const users = useSelector(getUsers);

    useEffect(() => {
        dispatch(fetchUsers());
      },[dispatch])


    return (
        <>
        <UsersList users={users} followed={users.followers}/>
        <LoadMoreBtn/>
        </>
    )
}