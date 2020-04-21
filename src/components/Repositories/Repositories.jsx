import React from 'react';
import { message } from 'antd';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getRepositories } from '../../store/repositories/actions';
import { columns } from './columnsTable';
import { StyledTable } from './StyledRepositories';

const Repositories = () => {
  const dispatch = useDispatch();
  const selectedData = useSelector(
    state => state.searchRepositoriesReducer,
    shallowEqual,
  );

  const data = selectedData.repositories.map(item => ({
    fullName: item.full_name,
    stars: item.stargazers_count,
    ownerLogin: item.owner.login,
    issuesCount: item.open_issues,
    repositoryUrl: item.html_url,
  }));

  const onChangePage = pagination => {
    dispatch(
      getRepositories({
        searchValue: selectedData.searchValue,
        currentPage: pagination.current,
      }),
    );
  };

  if (selectedData.totalCount) {
    return (
      <StyledTable
        loading={selectedData.isLoading}
        columns={columns}
        dataSource={data}
        onChange={pagination => onChangePage(pagination)}
        pagination={{
          pageSize: 30,
          total: selectedData.totalCount > 1000 ? 1000 : selectedData.totalCount,
        }}
      />
    );
  }
  if (selectedData.totalCount === 0) {
    message.warning('no matching results found');
  }
  return null;
};

export default Repositories;
