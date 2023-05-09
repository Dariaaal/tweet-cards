import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getUsers, getIsLoading } from "redux/user-selectors";
import { fetchUsers } from "../../../redux/user-operations";
import {UsersList} from "../../tweets/UsersList/UsersList";
import { LoadMoreBtn } from "../../tweets/LoadMore/LoadMoreBtn";
import { NavLink } from 'react-router-dom';
import css from './TweetsPage.module.css'

export default function TweetsPage() {

    const users = useSelector(getUsers);

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchUsers(page));
      },[dispatch, page])

    const onNextPage = () => {
        setPage(prev=>prev+1)
    }

    const onPrevPage = () => {
        setPage(prev=>prev-1)
    }

    return (
        <>
        <NavLink to="/homepage" className={css.back}>Go back</NavLink>
        {!isLoading && <UsersList users={users} followed={users.followers}/>}
        {!isLoading && <LoadMoreBtn users={users} page={page} onNextPage={onNextPage} onPrevPage={onPrevPage}/>}
        {isLoading && <p className={css.loading}>Loading...</p>}
        </>
    )
}