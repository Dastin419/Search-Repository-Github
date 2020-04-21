import React from 'react';
import { message } from 'antd';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getRepositories } from '../../store/actions';
import { columns } from './columnsTable';
import { StyledTable } from './StyledRepositories';

const Repositories = () => {
  const dispatch = useDispatch();
  const selectedData = useSelector(
    state => state.searchRepositoriesReducer,
    shallowEqual,
  );

  const data = selectedData.repositories.map(item => ({
    name: item.full_name,
    stars: item.stargazers_count,
    owner: item.owner.login,
    issue: item.open_issues,
    repository: item.html_url,
  }));

  if (selectedData.totalCount === 0) {
    message.warning('no matching results found');
  }

  if (selectedData.totalCount) {
    return (
      <StyledTable
        loading={selectedData.isLoading}
        columns={columns}
        dataSource={data}
        onChange={pagination => {
          dispatch(
            getRepositories({
              searchValue: selectedData.searchValue,
              currentPage: pagination.current,
            }),
          );
        }}
        pagination={{
          pageSize: 30,
          total: selectedData.totalCount > 1000 ? 1000 : selectedData.totalCount,
        }}
      />
    );
  }
  return null;
};

export default Repositories;
