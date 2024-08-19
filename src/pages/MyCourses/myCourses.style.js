import styled from "styled-components";

export const CoursesPage = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background-color:#fff;
  border-radius:8px;
  margin: 50px 0;
`;
export const Title = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  h2.h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 72px;
    width: 49%;
  }
  p.p {
    font-weight: 400;
    font-size: 12px;
    line-height: 27px;
    width: 49%;
    position: relative;
  }
`;
export const CurriculumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;