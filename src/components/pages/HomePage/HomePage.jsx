import React from 'react';
import css from './HomePage.module.css'

export default function HomePage () {
    return <div className={css.home}>
        <h1>Hello!</h1>
        <p>Here you could find your followers. Go to page "Tweets" to see more!</p>
    </div>
};