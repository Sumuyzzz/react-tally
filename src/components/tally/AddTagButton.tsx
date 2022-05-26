import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
  button {
    background-color: transparent;
    border: transparent;
    border-bottom: 1px solid;
    outline: none;
    font-size: 14px;
    margin: 12px;
  }
`;

const AddTagButton = () => {
  return (
    <Wrapper>
      <Link to='label'>
        <button>新增标签</button>
      </Link>
    </Wrapper>
  );
};

export default AddTagButton;
