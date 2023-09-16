import { useDispatch, useSelector } from 'react-redux';
import { StyledFilter, StyledInput, StyledTitle } from './Filter.styled';
import { filterByName } from 'redux/actions';
import { getFilter } from 'redux/selectors';

export const FilterName = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilterName = evt => {
    console.log(evt.target.value);
    dispatch(filterByName(evt));
  };

  return (
    <StyledFilter>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledInput type="text" value={filter} onChange={handleFilterName} />
    </StyledFilter>
  );
};
