import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: white;
  color: #fff;
  position: relative;
  bottom: 0;
  left: 0;

  .FooterContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px 0;
    color: black;
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
          color: white;
        }
      }
    }
  }
`;
