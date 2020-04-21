import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'antd';

import { getRepositories } from '../../store/repositories/actions';
import { StyledInput, Title, Wrapper } from './StyledItem';
import { selectSearchRepositoriesIsLoading } from '../../store/repositories/selectors';

const SearchItem = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(null);
  const isLoading = useSelector(selectSearchRepositoriesIsLoading);

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch(getRepositories({ searchValue }));
  };

  const onInputChange = event => {
    setSearchValue(event.target.value);
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
