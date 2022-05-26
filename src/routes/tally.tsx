import Tags from '../components/tally/Tags';
import styled from 'styled-components';
import Remark from '../components/tally/Remark';
import Categorization from '../components/tally/Categorization';
import Calculation from '../components/tally/Calculator/Calculation';
import DateRamrk from '../components/Date';
import { useRecords } from '../states/useStates';
import { useEffect, useState } from 'react';
import AddTagButton from '../components/tally/AddTagButton';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  .tagsWrapper {
    flex: 1;
    overflow-y: auto;
  }
  .category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    border-bottom: 2px solid #69696917;
    overflow: hidden;
    .cate {
      width: 50%;
    }
  }
`;
type Category = '-' | '+';
const useTally = () => {
  const now = dayjs().format('YYYY-MM-DDTHH:mm:ss');
  const remarkDate = dayjs().format('YYYY-MM-DD');

  const initStates = {
    selectTagIds: [] as number[],
    remark: '',
    category: '-' as Category,
    amount: '0',
    createDate: now,
    remarkDate,
  };

  const [states, setStates] = useState(initStates);

  type States = typeof states;
  const onChange = (newStates: Partial<States>) => {
    setStates({
      ...states,
      ...newStates,
    });
  };
  const records = useRecords();

  const submit = () => {
    if (states.selectTagIds.length) {
      records.addRecords(states);
      setStates({
        ...initStates,
        createDate: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
      });
    } else {
      alert('请选择标签');
    }
  };

  return (
    <Main>
      <div className='category'>
        <Link to='/'>
          <Icon
            icon='clarity:caret-line'
            rotate={3}
            className='icons'
            height='30'
          />
        </Link>

        <div className='cate'>
          <Categorization
            value={states.category}
            onChange={(category) => {
              onChange({
                category,
              });
            }}
          />
        </div>
        <Icon
          icon='clarity:caret-line'
          rotate={3}
          className='icons'
          height='30'
          color='#fff'
        />
      </div>

      <div className='tagsWrapper'>
        <Tags
          value={states.selectTagIds}
          onChange={(selectTagIds) => {
            onChange({
              selectTagIds,
            });
          }}
          type={states.category}
        />
      </div>

      <AddTagButton />
      <Remark
        value={states.remark}
        output={states.amount}
        category={states.category}
        onChange={(remark) => {
          onChange({
            remark,
          });
        }}
      />
      <DateRamrk
        value={now}
        onChange={(createDate) => {
          onChange({
            createDate,
          });
        }}
      />

      <Calculation
        value={states.amount}
        onChange={(amount) => {
          onChange({
            amount,
          });
        }}
        category={states.category}
        onSubmit={submit}
      />
    </Main>
  );
};
export default useTally;
