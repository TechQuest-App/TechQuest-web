import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 8px;
  margin: 50px 0;
`;

export const Title = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 4%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: row;
  h2.h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    width: 49%;
  }
  p.p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    width: 49%;
    position: relative;
  }
`;
export const TitleAchievOrGoal = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 4%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  h2.h2 {
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    width: 100%;
  }
  p.p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    width: 100%;
  }
`;

export const AchievsOurGoals = styled.div`
  margin: 100px 0 170px 0;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .achievement {
    width: 48%;
    height: 100%;
    position: relative;
    background-color: #fff;
    padding: 4%;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    margin: 10px 0;
  }
  img {
    background-color: #e5eeff;
    padding: 16px;
    border: 1px solid #d2e1ff;
    border-radius: 8px;
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 30px 0 14px 0;
  }
  p{
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

  }
`;

export const BottomAbout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 80px;
  background-color: #fff;
  border-radius: 18px;
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 57px;

    span {
      color: #0f54ff;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-top: 20px;
  }
  button {
    padding: 18px 24px;
    background-color: #0f54ff;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color:#fff;
    border-radius: 8px;
    width: 20%;
  }
`;
