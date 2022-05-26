import styled from 'styled-components';
import { useTags } from '../../states/useStates';

const Wrapper = styled.div`
  padding: 16px;
  ul {
    display: flex;
    padding-bottom: 16px;
    flex-wrap: wrap;
    > li {
      line-height: 24px;
      text-align: center;
      border-radius: 12px;
      background-color: white;
      height: 24px;
      padding: 0 16px;
      margin: 12px;
      &.selected {
        background: #000;
        color: #fff;
      }
    }
  }
`;

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
  type: string;
};

const Tags: React.FC<Props> = (props) => {
  const { tags } = useTags();

  const [xTags,yTags]= tags as { id: number; name: string }[][]


  const selectedTagIds = props.value;

  const onToggleTag = (tagID: number) => {
    const index = selectedTagIds.indexOf(tagID);
    if (index !== -1) {
      props.onChange(selectedTagIds.filter((t) => t !== tagID));
    } else {
      props.onChange([tagID]);
    }
  };

  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) !== -1 ? 'selected' : undefined;

  
  const typeTags = () => {
    let typeTags = props.type === '-' ? xTags : yTags

      return (
        <ul>
          {typeTags.map((tag) => (
            <li
              key={tag.id}
              onClick={() => onToggleTag(tag.id)}
              className={getClass(tag.id)}>
              {tag.name}
            </li>
          ))}
        </ul>
      );
  }
  
  

  return (
    <Wrapper>
      <div className='tags'>
        {typeTags()}
      </div>
    </Wrapper>
  );
};

export default Tags;
