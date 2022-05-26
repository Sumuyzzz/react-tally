import { useState } from 'react';
import styled from 'styled-components';

const Categorization = styled.div`
  background: #fff;
  font-size: 24px;
  ul {
    display: flex;
    background: #fff;
    li {
      color: #ff7575;
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected {
        color: #13c791;
      }
    }
  }
`;

type Props = {
  value: string;
  onChange: (value: '-' | '+') => void;
};

const useCategorization: React.FC<Props> = (props) => {
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const categoryMap = { '-': '支出', '+': '收入' };

  return (
    <Categorization>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={props.value === c ? 'selected' : ''}
            onClick={() => {
              props.onChange(c);
            }}>
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Categorization>
  );
};

export default useCategorization;
