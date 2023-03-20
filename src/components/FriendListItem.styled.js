import styled from 'styled-components';

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 5%) 0px 5px 5px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(p) => (p.isOnline ? "green" : "red")};
`;

export const Avatar = styled.img`
 display: block;
  border-radius: 8px;
  width: 40px;
  background-color: brown;
`;

export const Name = styled.p`
 font-size: 20px;
  font-weight: bold;
`;