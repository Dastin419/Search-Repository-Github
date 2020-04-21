import React from 'react';

export const columns = [
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
  },
  {
    title: 'Stars',
    dataIndex: 'stars',
    key: 'stars',
    align: 'center',
  },
  {
    title: 'Owner Login',
    dataIndex: 'ownerLogin',
    key: 'ownerLogin',
    align: 'center',
  },
  {
    title: 'Issues Count',
    dataIndex: 'issuesCount',
    key: 'issuesCount',
    align: 'center',
  },
  {
    title: 'Repository Url',
    dataIndex: 'repositoryUrl',
    key: 'repositoryUrl',
    render: repository => (
      <a href={repository} rel="noopener noreferrer" target="_blank">
        {repository}
      </a>
    ),
  },
];
