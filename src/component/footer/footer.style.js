import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  background: #232323;
  color: #fff;
  position: relative;
  bottom: 0;

  .FooterContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px 0;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .LogoContainer {
      margin-bottom: 30px;

      img {
        width: 48px;
        height: 48px;
        object-fit: cover;
      }
    }

    .connections {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .connection {
        display: flex;
        align-items: center;
        gap: 5px;

        img {
          backGround: #fff;
          border-radius: 50%;
          padding:4px;
        }
      }
    }
  }
`;
