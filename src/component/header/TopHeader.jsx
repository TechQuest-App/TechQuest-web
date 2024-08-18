import styled from "styled-components";

const TopHeader = () => {
  return (
    <TopHeaderWrap>
      <p className="topNav">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
    </TopHeaderWrap>
  );
};

export default TopHeader;

const TopHeaderWrap = styled.div`
  .topNav {
    padding: 10px;
    background-color: rgb(15, 84, 255);
    text-align: center;
    line-height: 20px;
    color: white;
    letter-spacing: 1.5px;
    margin: 10px 10px 0;
    border-radius: 10px;

    @media (max-width: 991px) {
      letter-spacing: 1px;
      font-size: 15px;
    }
    @media (max-width: 767px) {
      letter-spacing: 1px;
      font-size: 10px;
      padding: 7px 3px;
    }
  }
`;
