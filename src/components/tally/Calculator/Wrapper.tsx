import styled from "styled-components";

const Calculation = styled.div`
  ul {
    background: #13c791;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 25%;
      padding: 4px;
      text-align: center;
      button {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        background: white;
      }
    }

    .affirm {
      position: absolute;
      bottom: 0;
      right: 0;
      .ok {
        border-radius: 50px;
        height: 96px;
        line-height: 96px;
        background: #ff7575;
      }
    }
  }
`;

export default Calculation ; 