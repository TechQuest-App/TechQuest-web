import styled from "styled-components";

export const CourseCard = styled.div`
  padding: 32px;
  margin:14px;
  width: 29%;
  border-radius: 12px;
  background-color: #fff;


  .dataCourse {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 30px 0 20px 0;

    p {
      margin-right: 22px;
    }
    h5 {
      font-size: 20px;
      font-weight: 500;
      margin: auto 0 auto auto;
    }
  }
  .txt {
    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      margin: 30px auto 14px 0;
    }
    p.desc {
      font-weight: 400;
      font-size: 14px;
      line-height: 27px;
    }
  }
`;
