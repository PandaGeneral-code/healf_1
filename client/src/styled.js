import styled from "styled-components";

export const ContentContainer = styled.div`
  border: 10px solid blue;
  box-sizing: border-box;
  flex: 1;
  overflow: hidden auto;
`;

export const NavigationContainer = styled.div`
  border: 10px solid red;
  box-sizing: border-box;
`;

const RootWrapper = styled.div`
  border: 10px solid black;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default RootWrapper;
