import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;

  nav {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      gap: 40px;

      img {
        width: 48px;
        height: 48px;
      }

      .navLinks {
        display: flex;
        align-items: center;
        gap: 10px;

        .itemLink {
          padding: 5px 10px;
          border-radius: 10px;
          transition: all.3s;

          &.active {
            background-color: #f1f1f3;
          }
        }
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 20px;

      .login {
        padding: 10px 30px;
        border-radius: 10px;
        background-color: #0f54ff;
        color: white;
      }
    }
  }
`;
