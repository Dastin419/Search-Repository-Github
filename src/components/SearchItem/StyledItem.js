import styled from 'styled-components';
import { Input } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

export const StyledInput = styled(Input)`
  margin: 20px 3px;
  width: 300px;
`;
