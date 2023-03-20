import styled from 'styled-components';

export const Table = styled.table`
  width: 50%;
  margin: 20px auto;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 5px;
  text-align: center;
`;

export const Head = styled.thead`
  font-size: 15px;
  text-transform: uppercase;
  background-color: #4ebdd6;
  color: white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Row = styled.tr`
  color: darkgrey;
  font-size: 15px;
  background-color: #ecf1f5;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d9e2e6;
    cursor: pointer;
  }
  &:nth-of-type(2n) {
    background-color: white;
  }
`;

export const Cell = styled.td`
  text-transform: capitalize;
  height: 35px;
  padding: 10px;
`;

export const Body = styled.tbody`
  color: darkgrey;
  font-size: 15px;
  background-color: #ecf1f5;
  &:nth-of-type(2n) {
    background-color: white;
  }
`;
