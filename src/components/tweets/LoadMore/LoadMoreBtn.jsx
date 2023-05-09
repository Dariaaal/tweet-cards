import css from './LoadMore.module.css'

export const LoadMoreBtn = ({users, page, onNextPage, onPrevPage}) => {
    return <div className={css.center}>
      {page>1 && <button className={css.load} type="button" onClick={onPrevPage}>PrevPage</button>}
      {users.length > 0 && page<4 && <button className={css.load} type="button" onClick={onNextPage}>NextPage</button>}
      </div>;
  };