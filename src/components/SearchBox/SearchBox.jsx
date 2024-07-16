import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const findId = useId();
  const dispatch = useDispatch();
  const filtersValue = useSelector(selectNameFilter);

  return (
    <div className={css.contFilter}>
      <label htmlFor={findId}>Find contacts by name</label>
      <input
        className={css.inpFilter}
        type="text"
        id={findId}
        value={filtersValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
