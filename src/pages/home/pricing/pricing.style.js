import styled from "styled-components";

export const OnePlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 50px 30px;
  background-color: #fcfcfd;
  border-radius: 12px;

  @media (max-width: 1024px) {
    padding: 30px 10px;
  }

  .StatusPlan {
    width: 100%;
    background-color: #e5eeff;
    border: 0.5px solid #0f54ff;
    border-radius: 6px;
    padding: 8px;
    font-weight: 500;
  }

  .price {
    font-size: 60px;
    font-weight: 600;
    margin: 30px auto;

    sub {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .availableFeature {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
  }

  .feature {
    border-radius: 8px;
    border: 1px solid #f1f1f3;
    padding: 14px;

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    .icon {
      width: 22px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e5eeff;
      border-radius: 6px;
      padding: 2px 4px;
      margin-right: 2px;
    }
  }
`;
