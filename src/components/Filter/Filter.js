import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import { ContactInput, ContactLabel } from './Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const changeFilterHandler = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <ContactLabel>
      Find contacts by name
      <ContactInput
        type="text"
        name="search"
        autoComplete="off"
        value={filter}
        onChange={changeFilterHandler}
      />
    </ContactLabel>
  );
};

export default Filter;
