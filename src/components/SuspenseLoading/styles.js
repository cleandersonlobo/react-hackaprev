import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  z-index: 999;
  overflow: hidden;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &:before {
    content: '';
    display: block;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
export const Content = styled.div`
  z-index: 1;
  padding: 25px 50px 25px 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Figure = styled.div`
  width: 100px;
  height: 100px;
`;
