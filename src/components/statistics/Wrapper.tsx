import styled from "styled-components";

const Wrapper = styled.div`
  .records {
    overflow:auto ;
    height:36vh;
    .record {
      border-radius: 8px;
      border: 1px solid black;
      margin: 8px;

      .recordDate {
        display: flex;
        align-items: center;
        height: 44px;
        border-bottom: 1px solid black;
        padding: 12px;
        justify-content:space-between;
      }
      .recordMessage {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        height: 44px;
        .remark {
          margin-right: auto;
          margin-left: 16px;
          color: #000;
        }
      }
    }
  }

  .icon {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Wrapper