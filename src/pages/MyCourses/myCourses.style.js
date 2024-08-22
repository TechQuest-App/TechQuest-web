import styled from "styled-components";

export const CoursesPage = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 50px 0;
`;

// export const Title = styled.div`
//   width: 100%;
//   height: auto;
//   margin-bottom: 4%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
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

export const CourseWrapper = styled.div`
  .container {
    padding: 20px;
    border-radius: 8px;
    margin: 50px 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    @media (min-width: 1024px) {
      margin: 50px 0 0;
      padding: 50px;
    }
  }
`;

export const CurriculumContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  padding: 10px 16px;
  border: 1px solid #f1f1f3;
  border-radius: 10px; */

  /* .curriculumTitle {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    padding: 24px 30px;
    border-bottom: 1px solid #f1f1f3;
  } */
  /* .contant {
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    .number {
      font-weight: 800;
      font-size: 50px;
      line-height: 75px;
    }
  }
  .content > div:not(:last-child) {
    border-right: 1px solid #f1f1f3;
  } */
`;
