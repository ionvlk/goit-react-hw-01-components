import styled from 'styled-components';


export const StatContainer = styled.section`
  overflow: hidden;
  width: 350px;
  margin: 30px auto 30px auto;
  background-color: white;
  border: 1px solid #d5dce6;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 5%) 0px 5px 5px;
`;


export const Title = styled.h2`
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  /* The value for the background color is generated randomly using Math.random() */
  background-color: #${() => Math.floor(Math.random() * 16777215).toString(16)};
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-weight: 300;
  color: white;
`;

export const Percentage = styled.span`
  font-weight: 900;
  color:white;
`;