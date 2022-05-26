import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import Input from '../Input';

const Remark = styled.div`
  background: #fff;
  display: flex;
  justify-content:space-between ;
  .output {
    font-family: Consolas, monospace;
    font-size: 36px;
    padding: 9px 16px;
    span {
      line-height: 54px;
      height: 54px;
    }
  }
`;

type Props = {
  value?: string;
  color?: string;
  padding?: string;
  type?: string;
  title?: string;
  onChange: (value: string) => void;
  output?: string;
  category?: '+' | '-';
};
const useRemark: React.FC<Props> = (props) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Remark>
      <Input
        type='text'
        title='备注'
        placeholder='请输入备注'
        onChange={onChange}
        value={props.value}
        padding='12px 0px'
      />
      <div className='output'>
        <span>{props.category}</span>
        <span>{props.output}</span>
      </div>
    </Remark>
  );
};

export default useRemark;
