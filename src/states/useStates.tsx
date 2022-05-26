import { useEffect, useState } from 'react';
import { useUpdate } from '../lib/hooks';
import createID from '../lib/id-creator';
import { RecordItem } from './type';

const useTags = () => {
  const [tags, setTags] = useState<any[]>([[], []]);

  useEffect(() => {
    let localTags = JSON.parse(
      window.localStorage.getItem('tags') || '[[],[]]'
    );
    if (localTags.length === 0) {
      localTags = [
        [
          {
            id: createID(),
            name: '快餐',
          },
          {
            id: createID(),
            name: '午餐',
          },
          {
            id: createID(),
            name: '晚餐',
          },
          {
            id: createID(),
            name: '饮料',
          },
          {
            id: createID(),
            name: '巴士',
          },
          {
            id: createID(),
            name: '电子产品',
          },
          {
            id: createID(),
            name: '医疗',
          },
          {
            id: createID(),
            name: '礼物',
          },
          {
            id: createID(),
            name: '社交',
          },
          {
            id: createID(),
            name: '其他',
          },
        ],
        [
          {
            id: createID(),
            name: '工资',
          },
          {
            id: createID(),
            name: '奖金',
          },
          {
            id: createID(),
            name: '投资',
          },
          {
            id: createID(),
            name: '租金',
          },
          {
            id: createID(),
            name: '股票',
          },
          {
            id: createID(),
            name: '其他',
          },
        ],
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const getTag = (id: number) => {
    return tags.flat().find((i) => i.id === id)!;
  };
  const addTag = () => {
    const tagName = prompt('请输入标签名');
    if (tagName) {
      setTags([...tags, { id: createID(), name: tagName }]);
      alert('标签已添加');
      window.location.reload();
    } else {
      alert('标签名不能为空');
    }
  };
  const findTagIndex = (id: number) => {
    return tags.findIndex((i) => i.id === id);
  };

  const updateTags = (id: number, { name }: { name: string }) =>
    setTags(tags.map((tag) => (tag.id === id ? { id, name: name } : tag)));
  const deleteTags = (id: number) =>
    setTags(tags.filter((tag) => tag.id !== id));

  const getTagName = (id: number) => {
    const tag = tags.flat().find((tag) => tag.id === id);
    return tag ? tag.name : '';
  };

  return {
    tags,
    getTagName,
    setTags,
    getTag,
    updateTags,
    findTagIndex,
    deleteTags,
    addTag,
  };
};

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecords = (record: RecordItem) => {
    console.log(record);
    setRecords([...records, record]);
    alert('数据已提交');
  };
  return { records, addRecords };
};

export { useTags, useRecords };
