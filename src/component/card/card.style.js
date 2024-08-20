import styled from "styled-components";

export const CourseCard = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  .dataCourse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 20px 0;

    p {
      @media (max-width: 1280px) {
        font-size: 14px;
      }
    }
    h5 {
      font-size: 20px;
      font-weight: 500;

      @media (max-width: 1280px) {
        font-size: 16px;
      }
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
