import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/filterSlice';
import { Wrapper } from './Filter.styled';
import {
  Input,
  InputTitle,
  Label,
} from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (evt) => {
    const request = evt.target.value.toLowerCase().trim();
    dispatch(setFilter(request));
  };

  return (
    <Wrapper>
      <Label>
        <InputTitle>Find contacts by name</InputTitle>
        <Input
          // type="text"
          name="filter"
          value={value}
          onChange={handleChangeFilter}
        />
      </Label>
    </Wrapper>
  );
};
