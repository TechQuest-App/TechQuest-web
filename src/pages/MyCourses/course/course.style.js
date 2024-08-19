import styled from "styled-components";

export const CourseWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;

  .imgsContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    img {
      width: 32%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

export const HeaderCourse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .txt {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 16px;
    line-height: 1.5;
  }

  .btn {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }
`;

export const InfoCousre = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .details {
    display: flex;
    align-items: center;
  }

  .weeks {
    font-size: 16px;
    margin-right: 20px;
  }

  .level {
    font-size: 16px;
  }

  .mentor {
    font-size: 16px;
  }
`;

export const CurriculumWrapper = styled.div`
  margin-top: 20px;

  .CurriculumTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .ItemsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }

  .number {
    font-size: 24px;
    font-weight: bold;
  }

  .title {
    font-size: 16px;
  }
`;


// export const CourseWrapper = {

// };
// export const HeaderCourse = {
//     txt: {},
//     title: {},
//     desc: {},
//     btn: {},
// };
// export const imgsContainer = {};
// export const InfoCousre = {}
// export const Curriculum = {
//     CurriculumTitle: {},
//     ItemsContainer: {},
//     number: {},
//     title: {},
//     weeks: {},
//     level: {},
// };
