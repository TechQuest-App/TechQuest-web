import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  background: #232323;
  background-color: white;
  color: #fff;
  position: relative;
  bottom: 0;
  left: 0;

  .col {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .LogoContainer {
      margin-bottom: 12px;

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
          background: #fff;
          border-radius: 50%;
          padding: 4px;
        }
      }
    }
  }
`;
