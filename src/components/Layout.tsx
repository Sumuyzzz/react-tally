import { Icon } from '@iconify/react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height:100vh ;
`;

export default function layout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
