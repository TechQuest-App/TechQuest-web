import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 100px 0;

  @media (max-width: 768px) {
    margin: 50px 0;
  }
`;

// export const Title = styled.div`
//   width: 100%;
//   height: auto;
//   margin-bottom: 4%;
//   display: flex;
//   justify-content: space-between;
//   align-items: start;
//   flex-direction: row;
//   h2.h2 {
//     font-weight: 600;
//     font-size: 48px;
//     line-height: 72px;
//     width: 49%;
//   }
//   p.p {
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 27px;
//     width: 49%;
//     position: relative;
//   }
// `;

export const TitleAchievOrGoal = styled.div`
  margin-bottom: 4%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  h2.h2 {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 4px;
    @media (min-width: 768px) {
      font-size: 25px;
    }
    @media (min-width: 1280px) {
      font-size: 38px;
    }
  }
  p.p {
    font-weight: 400;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const AchievsOurGoals = styled.div`
  margin: 50px 0 70px 0;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (min-width: 768px) {
    margin: 100px 0 170px 0;
  }

  .achievement {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;

    @media (min-width: 1024px) {
      padding: 40px;
    }

    img {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      background-color: #e5eeff;
      padding: 6px;
      border: 1px solid #d2e1ff;
      border-radius: 8px;

      @media (min-width: 1024px) {
        width: 60px;
        height: 60px;
        padding: 16px;
      }
    }
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      margin: 20px 0 7px 0;

      @media (min-width: 1024px) {
        margin: 30px 0 14px 0;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
`;

// export const BottomAbout = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: start;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 80px;
//   background-color: #fff;
//   border-radius: 18px;
//   h2 {
//     font-weight: 600;
//     font-size: 48px;
//     line-height: 57px;

//     span {
//       color: #0f54ff;
//     }
//   }

//   p {
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 27px;
//     margin-top: 20px;
//   }
// `;
