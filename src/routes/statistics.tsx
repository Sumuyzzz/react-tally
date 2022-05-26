import { Icon } from '@iconify/react';
import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categorization from '../components/tally/Categorization';
import Echarts from '../lib/echarts';
import { RecordItem } from '../states/type';
import { useRecords, useTags } from '../states/useStates';
import Wrapper from '../components/statistics/Wrapper';

const useStatistics = () => {
  const [category, setCategory] = useState('-' as '+' | '-');

  const { getTagName } = useTags();

  const hash: { [key: string]: RecordItem[] } = {};


  const { records } = useRecords();

  const selectedRecord = records.filter(
    (record) => record.category === category
  );
  selectedRecord.forEach((record) => {
    const key = record.remarkDate;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(record);
  });
  const record = Object.entries(hash).sort((a, b) => Number(a) - Number(b));


  return (
    <main>
      <Wrapper>
        <Categorization
          value={category}
          onChange={(value) => {
            setCategory(value);
          }}
        />
        <Echarts
          records={selectedRecord}
          value={0}
          name='category'
          type={category}></Echarts>

        <div className='records'>
          {record.map(([remarkDate, message]) => (
            <div className='record' key={remarkDate}>
              <div>
                <h3 className='recordDate'>
                  <span> {remarkDate}</span>
                  <span>
                    {message
                      .map((record) => +record.amount)
                      .reduce((acc, record) => acc + record)}
                  </span>
                </h3>

                <div>
                  {message.map((record) => {
                    return (
                      <div key={record.createDate}>
                        <div className='recordMessage oneLine'>
                          {record.selectTagIds
                            .map((tagId) => (
                              <span key={tagId}>{getTagName(tagId)}</span>
                            ))
                            .reduce(
                              (result, span, index, current) =>
                                result.concat(
                                  index < current.length - 1
                                    ? [span, ',']
                                    : [span]
                                ),
                              [] as ReactNode[]
                            )}
                          <span className='remark'>{record.remark}</span>
                          {'$'} {record.amount}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='icon'>
          <Link to='/tally'>
            <Icon icon='carbon:add-filled' color='#f33a3a' width='64' />
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

export default useStatistics;
