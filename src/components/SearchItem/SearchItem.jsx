import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'antd';

import { getRepositories } from '../../store/actions';
import { StyledInput, Title, Wrapper } from './StyledItem';

const SearchItem = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(null);
  const isLoading = useSelector(state => state.searchRepositoriesReducer.isLoading);

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(getRepositories({ searchValue }));
  };

  const onInputChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Search Git Repository</Title>
      <Form onSubmit={onFormSubmit}>
        <StyledInput onChange={onInputChange} />
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          disabled={!searchValue}
        >
          Search
        </Button>
      </Form>
    </Wrapper>
  );
};

export default SearchItem;
