import { ChangeEventHandler } from "react";
import Input from "./Input";
type Props = {
  value?: string;
  color?: string;
  padding?: string;
  type?: string;
  title?: string;
  onChange: (value: string) => void;
}; 
const useDate: React.FC<Props> = (props) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Input
      type='datetime-local'
      title='日期'
      color='#13c791'
      onChange={onChange}
      value={props.value}
    />
  );
};


export default useDate
