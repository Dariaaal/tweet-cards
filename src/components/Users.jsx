import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/user-selectors";
import { fetchUsers } from "../redux/user-operations";
import UsersList from "./UsersList";
import { LoadMoreBtn } from "./LoadMoreBtn";

export default function Users() {

    const dispatch = useDispatch();

    const users = useSelector(getUsers);

    useEffect(() => {
        dispatch(fetchUsers());
      },[dispatch])

    const onBtnClick = () => {

    }

    return (
        <>
        <UsersList users={users} onClick={onBtnClick}/>
        <LoadMoreBtn/>
        </>
    )
}