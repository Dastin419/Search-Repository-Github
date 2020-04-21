import React from 'react';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Stars',
    dataIndex: 'stars',
    key: 'stars',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'Issue',
    dataIndex: 'issue',
    key: 'issue',
  },
  {
    title: 'Repository',
    dataIndex: 'repository',
    key: 'repository',
    render: repository => (
      <a href={repository} rel="noopener noreferrer" target="_blank">
        {repository}
      </a>
    ),
  },
];
