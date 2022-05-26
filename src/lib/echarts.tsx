import React from 'react';
import ReactECharts from 'echarts-for-react';
import { RecordItem } from '../states/type';
import { useRecords, useTags } from '../states/useStates';

type Props = {
  records: RecordItem[];
  value: number;
  name: string;
  type: string;
};

const Page: React.FC<Props> = (props) => {
  const records = useRecords().records;

  const { getTagName } = useTags();

  const typeRecords = records.filter(
    (record) => record.category === props.type
  );
  const data: any[] = typeRecords.map((record) => {
    return { value: record.amount, name: getTagName(record.selectTagIds[0]) };
  });

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option} style={{ height: 400, color: '#fff' }} />
    </div>
  );
};

export default Page;
