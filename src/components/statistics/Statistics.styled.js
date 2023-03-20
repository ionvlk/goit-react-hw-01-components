import styled from 'styled-components';

// Style for the container that wraps around the statistics section
export const StatContainer = styled.section`
  overflow: hidden;
  width: 350px;
  margin: 30px auto 30px auto;
  background-color: white;
  border: 1px solid #d5dce6;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 5%) 0px 5px 5px;
`;

// Style for the title of the statistics section
export const Title = styled.h2`
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

// Style for the list that contains the stat items
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

// Style for each individual stat item in the list
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

// Style for the label text associated with each stat
export const Label = styled.span`
  margin-bottom: 10px;
  font-weight: 300;
  color: white;
`;

// Style for the percentage value associated with each stat
export const Percentage = styled.span`
  font-weight: 900;
  color:white;
`;