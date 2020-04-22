import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
  padding: 30px 50px 50px;

  &&& {
    background: white;

    .ant-table {
      font-size: 12px !important;
    }

    table,
    .ant-table-thead > tr:first-child > th:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .ant-select-selection-selected-value {
      margin-right: 4px;
    }

    .ant-table-column-title {
      font-weight: bold;
    }

    .ant-table-pagination {
      float: none;
      display: flex;
      justify-content: center;
    }

    th.ant-table-selection-column {
      text-align: center;
      vertical-align: center;
      width: 60px;
      min-width: 60px;
    }

    thead.ant-table-thead tr th.ant-table-selection-column span.ant-table-header-column {
      justify-content: center;
    }

    tr.ant-table-selection-column {
      width: 60px;
      min-width: 60px;
      max-width: 60px;
    }

    .ant-table-thead > tr > th {
      background-color: #fafafa;
      font-weight: 500;
    }

    td {
      .ant-select {
        width: 100%;
      }
    }
  }
`;
