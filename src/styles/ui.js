import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 56px;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Image = styled.img`
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export const CardEmpresas = styled(Paper).attrs({
  square: false,
  elevation: 1,
})`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .card-details {
    padding-bottom: 5px;
    span:first-child {
      color: #ff4858;
      font-weight: 800;
    }
    span:first-child {
      display: block;
      text-align: center;
      font-weight: bold;
      letter-spacing: 0.4px;
    }
  }
`;
