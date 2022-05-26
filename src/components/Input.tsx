import styled from 'styled-components';

const Label = styled.div`
  span {
    padding: 16px;
  }
  input {
    display: inline;
    border: transparent;
    background: transparent;
    outline: none;
    height: 44px;
    width:60% ;
  }
`;

type Props = {
  title: string;
  padding?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const { title, ...rest } = props;
  return (
    <Label style={{ background: props.color, padding: props.padding }}>
      <span>{props.title}</span>
      <input {...rest} />
    </Label>
  );
};

export default Input;
