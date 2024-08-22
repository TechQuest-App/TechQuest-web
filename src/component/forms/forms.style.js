import styled from "styled-components";
import { loginImg, signupImg } from "../../assets";

export const SignupWrap = styled.div`
  width: 100%;
  background-color: #f7f7f8;
  display: flex;
  margin: 100px 0 100px;

  @media (max-width: 640px) {
    margin: 50px 0;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }

  .leftsection {
    position: relative;
    height: 100%;
    flex: 2;

    .title {
      h2 {
        font-weight: 500;
        font-size: 38px;
        line-height: 57px;
        margin-bottom: 6px;

        @media (max-width: 640px) {
          font-size: 28px;
          line-height: 1.3;
        }
      }

      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;

        @media (max-width: 640px) {
          font-size: 16px;
          line-height: 1.3;
        }
      }
    }

    .oneReg1,
    .oneReg2,
    .oneReg3 {
      position: absolute;
      background-color: #ffffffcc;
      border-radius: 20px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 24px;
      width: fit-content;

      h4 {
        font-size: 24px;
        font-weight: 500;
        color: #595959;

        @media (max-width: 640px) {
          font-size: 14px;
          gap: 14px;
        }
        @media (min-width: 641px) and (max-width: 1280px) {
          font-size: 18px;
          gap: 20px;
        }
      }

      h5 {
        font-size: 20px;
        color: #545567;

        @media (max-width: 640px) {
          font-size: 12px;
        }
        @media (min-width: 641px) and (max-width: 1280px) {
          font-size: 16px;
        }
      }

      @media (max-width: 640px) {
        padding: 10px;
        gap: 5px;
      }
      @media (min-width: 641px) and (max-width: 1280px) {
        padding: 10px;
        gap: 12px;
      }
    }

    .oneReg1 {
      top: 50%;
      left: 0;

      img {
        width: 50px;
        height: 50px;
        background-color: #0f54ff;
        padding: 10px;
        border-radius: 10px;

        @media (max-width: 640px) {
          width: 30px;
          height: 30px;
          padding: 5px;
        }
      }

      @media (max-width: 640px) {
        top: 50%;
        left: 0;
      }
    }
    .oneReg2 {
      top: 70%;
      right: 60px;

      img {
        width: 50px;
        height: 50px;
        background-color: #0f54ff;
        padding: 10px;
        border-radius: 10px;

        @media (max-width: 640px) {
          width: 30px;
          height: 30px;
          padding: 5px;
        }
      }

      @media (max-width: 640px) {
        top: 65%;
        right: 0px;
      }
    }
    .oneReg3 {
      bottom: 0;
      left: 0;

      .ingContainer {
        position: relative;
        margin-bottom: auto;

        img {
          @media (max-width: 640px) {
            width: 35px;
            height: 35px;
          }
        }

        .active {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 2px solid white;
          background-color: #2ebb5e;
          top: 40px;
          right: -1px;

          @media (max-width: 640px) {
            width: 10px;
            height: 10px;
            top: 25px;
            right: -1px;
          }
        }
      }

      @media (max-width: 640px) {
        bottom: -9px;
      }
    }
  }

  .rightsection {
    flex: 1;
    height: 90%;
    padding: 50px;
    background-color: #fff;
    border-radius: 12px;

    @media (max-width: 640px) {
      padding: 10px;
    }
    @media (min-width: 641px) and (max-width: 1280px) {
      padding: 20px;
    }

    .text {
      text-align: center;
      margin-bottom: 50px;

      @media (max-width: 640px) {
        margin-bottom: 30px;
      }
      @media (min-width: 641px) and (max-width: 1280px) {
        margin-bottom: 20px;
      }
    }

    .title {
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 12px;

      @media (max-width: 640px) {
        font-size: 38px;
      }
    }

    p {
      font-size: 18px;

      @media (max-width: 640px) {
        font-size: 16px;
      }
    }

    .signupForm {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .oneInput {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 14px;

        label {
          font-size: 18px;
          margin-bottom: 14px;
        }

        input {
          padding: 12px;
          border-radius: 10px;
          outline: none;
          border: 1px solid #f1f1f3;
          background-color: #fcfcfd;

          @media (min-width: 1280px) {
            padding: 24px;
          }
        }
      }
    }

    .or {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 30px auto;

      .leftLine,
      .rightLine {
        width: 40%;
        border-top: 1px solid #98989a;
      }

      .OR {
        font-size: 18px;
        color: #98989a;
      }
    }
  }
`;

export const LoginLeftWrap = styled.div`
  .bg {
    width: 100%;
    background-color: #e5eeff;
    border-radius: 80px;
    position: relative;
    padding: 20px;
    height: 717px;
    /* background-image: url(${loginImg});
    background-size: cover;
    background-position: center; */

    @media (max-width: 1024px) {
      height: 500px;
    }
    @media (max-width: 480px) {
      height: 300px;
    }
    &::before {
      content: "";
      position: absolute;
      top: -15px;
      left: 15px;
      width: 100%;
      height: 100%;
      border: 1px solid #0f54ff;
      border-radius: 80px;

      @media (max-width: 991px) {
        border: none;
      }
      @media (max-width: 480px) {
        border: none;
      }
    }

    .loginImg {
      position: absolute;
      right: -50px;
      bottom: 15px;
      height: calc(100% + 30px);
      width: 100%;

      @media (max-width: 1024px) {
        right: 0px;
      }
      @media (max-width: 991px) {
        bottom: 0px;
      }
    }
  }

  .lamp {
    position: absolute;
    top: -40px;
    right: -35px;
    width: 50px;
    height: 50px;

    @media (max-width: 991px) {
      top: -25px;
      right: -15px;
    }
    @media (max-width: 767px) {
      top: -15px;
      right: -8px;
      width: 40px;
      height: 40px;
    }
  }

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0f54ff;
    position: absolute;
    top: -35px;
    left: 15px;

    @media (max-width: 991px) {
      top: -8px;
      left: -8px;
    }
    @media (max-width: 767px) {
      width: 25px;
      height: 25px;
      top: -5px;
      left: 0px;
    }
  }
`;
