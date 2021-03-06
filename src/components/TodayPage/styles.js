import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  padding: 90px 17px;
  
  background-color: #f2f2f2;
  
  display: flex;
  flex-direction: column;
  gap: 22px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Header = styled.header`
  h1 {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
  }

  span {
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${({progress}) => progress === 0 ? "#BABABA" : "#8FC549"};
  }
`; 

const HabitContainer = styled.li`
  padding: 15px;

  background: #FFFFFF;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 7px;

  color: #666666;

  position: relative;

  h1 {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  }

  p {
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    span:first-child {
      ${({checked}) => checked && "color: #8FC549;"}
    }

    span:last-child {
      ${({current_equal_highest, checked}) => current_equal_highest && checked && "color: #8FC549;"}
    }
  }

  img {
    width: 69px;
    height: 69px;

    border: 1px solid #E7E7E7;
    border-radius: 5px;

    position: absolute;
    right: 13px;
    top: 13px;
  }
`;

export { Container, Header, HabitContainer };