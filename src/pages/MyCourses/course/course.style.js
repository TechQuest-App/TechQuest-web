import styled from "styled-components";

export const CourseWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;

  .container {
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .imgsContainer {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
`;

export const ImgContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const InfoCousre = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 50px 0;

  .weeks {
    font-size: 16px;
    margin-right: 20px;
    padding: 10px 16px;
    border: 1px solid #f1f1f3;
    border-radius: 1px;
  }

  .level {
    font-size: 16px;
    padding: 10px 16px;
    border: 1px solid #f1f1f3;
    border-radius: 1px;
  }

  .mentor {
    font-size: 20px;
    position: absolute;
    right: 14%;
  }
`;

export const HeaderCourse = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .txt {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    @media (min-width: 1024px) {
      margin-bottom: 0px;
    }
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
  }
  .description {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }

  .btn {
    background-color: white;
    padding: 10px 20px;
    border: 1px solid #f1f1f3;
    border-radius: 8px;
    width: 145px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

// export const CurriculumWrapper = styled.div`
//   margin-top: 20px;

//   .CurriculumTitle {
//     font-size: 20px;
//     font-weight: bold;
//     margin-bottom: 10px;
//   }

//   .ItemsContainer {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 0;
//     border-bottom: 1px solid #eee;
//   }

//   .number {
//     font-size: 24px;
//     font-weight: bold;
//   }

//   .title {
//     font-size: 16px;
//   }
// `;
