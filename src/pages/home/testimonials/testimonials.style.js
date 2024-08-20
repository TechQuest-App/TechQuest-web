import styled from "styled-components";

export const TestimonialsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;

  .quote {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .imgRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
