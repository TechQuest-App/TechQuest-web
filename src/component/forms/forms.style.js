import styled from "styled-components";
import { loginImg, signupImg } from "../../assets/";

export const Signup = {
  fontFamily: "Poppins",
  width: "100%",
  backgroundColor: "#F7F7F8",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  margin: "70px auto 100px",

  leftsection: {
    height: "100%",
    flex: 2,

    title: {
      h2: {
        fontWeight: 500,
        fontSize: "38px",
        lineHeight: "57px",
      },
      p: { fontWeight: 400, fontSize: "18px", lineHeight: "27px" },
    },
    oneReg: {
      width: "45%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      background: "#fff",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      margin: "12px",

      "@media (max-width: 767px)": {
        width: "20%",
        margin: "8px 0",
      },
      "@media (max-width: 991px)": {
        width: "30%",
        margin: "8px 0",
      },

      img: {
        padding: "12px",
        backgroundColor: "blue",
        borderRadius: "8px",
        margin: "75px 24px 24px",
      },
      txt: {
        fontSize: "18px",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",

        h2: { fontWeight: 500, fontSize: "24px", lineHeight: "44px" },
        p: { fontWeight: 400, fontSize: "20px", lineHeight: "36px" },
      },
    },
    haveImgBG: {
      zIndex: 99,
      backgroundImage: `url(${signupImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "800px",
      width: "100%",
    },
  },

  rightsection: {
    flex: 1,
    height: "90%",
    padding: "50px",
    backgroundColor: "#fff",

    signupForm: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    text: {
      textAlign: "center",
      marginBottom: "50px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "600",
    },
    p: {
      fontSize: "18px",
    },
    oneInput: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginBottom: "14px",
    },
    label: { fontSize: "18px", marginBottom: "14px" },
    input: {
      padding: "24px",
      border: "1px solid #F1F1F3",
      borderRadius: "10px",
    },
    BTN: {
      padding: "18px 20px",
      backgroundColor: "blue",
      width: "100%",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      marginTop: "24px",
      fontSize: "18px",
      fontWeight: "700",
      textAlign: "center",
    },
    or: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "30px auto",
    },
    OR: {
      fontSize: "18px",
      color: "#98989A",
    },
    leftLine: {
      width: "40%",
      borderTop: "1px solid #98989A",
    },
    rightLine: {
      width: "40%",
      borderTop: "1px solid #98989A",
    },
    platforms: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    icon: {
      backgroundColor: "#F5F5F5",
      padding: "24px",
      borderRadius: "50%",
      margin: "32px 8px",
    },
  },
};

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
      height: 80%;
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
  }

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0f54ff;
    position: absolute;
    top: -35px;
    left: 15px;
  }

  .triangle {
    position: absolute;
    top: 50%;
    right: -70px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 30px solid #0f54ff;
    width: 0;
    height: 0;
    transform: rotate(45deg);
  }
`;
