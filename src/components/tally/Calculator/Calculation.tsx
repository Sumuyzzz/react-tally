import Calculation from './Wrapper';
import input from './Input';
import { Icon } from '@iconify/react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  category: '+' | '-';
};

const useCalculate: React.FC<Props> = (props) => {
  const output = props.value;
  let value = null;
  const setOutput = (output: string) => {
    if (output.length >= 8) {
      value = output.slice(0, 8);
    } else if (output.length === 0) {
      value = output;
    } else {
      value = output;
    }
    props.onChange(value);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === 'OK') {
      return;
    }
    if ('0123456789.'.split('').concat(['AC', '←']).indexOf(text) >= 0) {
      setOutput(input(text, output));
    }
  };


  return (
    <Calculation>
      <ul onClick={onClickButtonWrapper} className='inputPad'>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>AC</button>
        </li>
        <li>
          <button>4</button>
        </li>
        <li>
          <button>5</button>
        </li>
        <li>
          <button>6</button>
        </li>
        <li>
          <button>
            <span style={{fontSize:'18px'}}>←</span>
          </button>
        </li>
        <li>
          <button>7</button>
        </li>
        <li>
          <button>8</button>
        </li>
        <li>
          <button>9</button>
        </li>
        <li className='affirm'>
          <button onClick={props.onSubmit} className='ok'>
            OK
          </button>
        </li>
        <li></li>
        <li className='zero'>
          <button>00</button>
        </li>
        <li className='zero'>
          <button>0</button>
        </li>
        <li className='dot'>
          <button>.</button>
        </li>
      </ul>
    </Calculation>
  );
};

export default useCalculate;
