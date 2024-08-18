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

      @media (max-width: 1199px) {
        gap: 20px;
      }
      @media (max-width: 991px) {
        gap: 10px;
      }

      img {
        width: 58px;
        height: 58px;
        object-fit: cover;

        @media (max-width: 991px) {
          width: 48px;
          height: 48px;
        }
      }

      .navLinks {
        .itemLink {
          border-radius: 10px;
          transition: all.3s;

          &.active {
            background-color: #f1f1f3;
          }
        }
      }
    }
  }
`;
