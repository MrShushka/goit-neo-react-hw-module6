import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
