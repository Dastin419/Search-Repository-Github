import React from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getRepositories } from '../../store/repositories/actions';
import { columns } from './columnsTable';
import { StyledTable } from './StyledRepositories';
import { selectSearchRepositories } from '../../store/repositories/selectors';

const Repositories = () => {
  const dispatch = useDispatch();
  const searchRepositories = useSelector(selectSearchRepositories);

  const onChangePage = pagination => {
    dispatch(
      getRepositories({
        searchValue: searchRepositories.searchValue,
        currentPage: pagination.current,
      }),
    );
  };

  if (searchRepositories.totalCount) {
    return (
      <StyledTable
        loading={searchRepositories.isLoading}
        columns={columns}
        dataSource={searchRepositories.repositories}
        onChange={pagination => onChangePage(pagination)}
        pagination={{
          pageSize: 30,
          total:
            searchRepositories.totalCount > 1000 ? 1000 : searchRepositories.totalCount,
        }}
      />
    );
  }

  if (searchRepositories.totalCount === 0) {
    message.warning('no matching results found');
  }

  return null;
};

export default Repositories;
