import styled from 'styled-components';
import { useTags } from '../states/useStates';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Button from '../components/labels/Button';
const Wrapper = styled.div`
  font-size: 16px;

  .labelTags {
    height: 40vh;
    overflow-y: auto;
    ul {
      padding-left: 16px;
      background: #fff;
      border-bottom: #030303;
      li {
        height: 44px;
        line-height: 44px;
        border-bottom: #ccc 1px solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
      }
    }
  }
  .addTag {
    margin: 30px;
    display: flex;
    justify-content: center;
  }
  .back {
    display: flex;
    position: absolute;
    bottom: 44px;
    left: 50%;
    transform: translateX(-50%);
    color: none;
  }

  a:-webkit-any-link {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
  }
`;

const Label = () => {
  const { tags, addTag } = useTags();
  return (
    <Wrapper>
      <div className='labelTags'>
        <ul>
          {tags.flat().map((tag) => (
            <Link to={String(tag.id)} key={tag.id}>
              <li key={tag.id}>
                {tag.name}
                <Icon
                  icon='clarity:caret-line'
                  rotate={1}
                  className='icons'
                  height='21'
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='addTag'>
        <Button className='newButton' onClick={addTag}>
          新建标签
        </Button>
      </div>
      <div className='back'>
        <Link to='/tally'>
          <Icon icon='ion:arrow-back-circle-outline' width='44' />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Label;
