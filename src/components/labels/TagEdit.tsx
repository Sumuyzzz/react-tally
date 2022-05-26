import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTags } from '../../states/useStates';
import Input from '../Input';
import Button from './Button';

const NavBar = styled.div`
  font-size: 16px;
  height: 44px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const EditBar = styled.div`
  height: 44px;
  background: #fff;
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  span {
    padding: 16px;
  }
  input {
    height: 44px;
    border: none;
    outline: none;
  }
`;

const Container = styled.div`
  .buttons {
    height: 33px;
    display: flex;
    justify-content: space-around;
    margin-top: 44px;
    padding: 16px;
  }
`;

const Tag: React.FC = () => {
  const { updateTags, getTag, deleteTags } = useTags();
  let { id: idString } = useParams<'id'>();

  let tag = getTag(Number(idString));

  let navigate = useNavigate();
  const content = () => (
    <div>
      <EditBar>
        <Input
          title='标签名'
          value={tag.name}
          onChange={(e) => {
            updateTags(tag.id, { name: e.target.value });
          }}
        />
      </EditBar>
      <div className='buttons'>
        <Button
          onClick={() => {
            deleteTags(tag.id);
          }}>
          删除标签
        </Button>
        <Button
          onClick={() => {
            alert('标签名修改成功');
            navigate(-1);
          }}>
          确认提交
        </Button>
      </div>
    </div>
  );

  return (
    <Container>
      <NavBar>
        <Icon
          onClick={() => {
            navigate(-1);
          }}
          icon='clarity:caret-line'
          rotate={3}
          className='icons'
          height='30'
        />

        <span>编辑标签</span>
        <Icon
          icon='clarity:caret-line'
          rotate={3}
          className='icons'
          height='30'
          color='#FFFFFF'
        />
      </NavBar>
      {tag ? content() : <div>not found</div>}
    </Container>
  );
};

export default Tag;
