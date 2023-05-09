import css from './LoadMore.module.css'

export const LoadMoreBtn = ({onLoadMore}) => {
    return <div className={css.center}><button className={css.load} type="button" onClick={onLoadMore}>Load More</button></div>;
  };