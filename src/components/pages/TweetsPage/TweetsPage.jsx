import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getUsers } from "redux/user-selectors";
import { fetchUsers } from "../../../redux/user-operations";
import {UsersList} from "../../tweets/UsersList/UsersList";
import { LoadMoreBtn } from "../../tweets/LoadMore/LoadMoreBtn";
import { NavLink } from 'react-router-dom';
import css from './TweetsPage.module.css'

export default function TweetsPage() {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const users = useSelector(getUsers);

    useEffect(() => {
        dispatch(fetchUsers());
      },[dispatch])

    const onLoadMore = () => {
        setPage(prev => {
            return prev + 1;
        });
    }

    return (
        <>
        <NavLink to="/homepage" className={css.back}>Go back</NavLink>
        <UsersList users={users} followed={users.followers}/>
        <LoadMoreBtn onClick={onLoadMore}/>
        </>
    )
}