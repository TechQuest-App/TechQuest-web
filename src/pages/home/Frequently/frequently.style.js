export const FrequentlyWrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  marginBottom: "50px",
  gap: "50px",

  side: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    title: {
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "57px",
      marginBottom: "20px",
      color: "black",
    },
    p: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
      marginBottom: "20px",
      color: "black",
    },
    btn: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
      marginTop: "50px",
      padding: "18px 24px",
      border: "1px solid #F1F1F3",
      borderRadius: "8px",
      backgroundColor: "white",
      color: "black",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  },

  mainPart: {
    width: "auto",
    padding: "20px",
    border: "1px solid #F1F1F3",
    borderRadius: "8px",

    
    // ----- part 1 ------
    upper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginBottom: "20px",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "12px",
    },
    oneBlock: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    special: {
      margin: "20px",
      padding: "20px",
      backgroundColor: "#F1F1F3",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    span: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
      color: "black",
    },


    // ----- part 2 ------
    rowQues: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      borderBottom: "1px solid #F1F1F3",
      backgroundColor: "white",
      borderRadius: "12px",
    },
    question: {
      width: "60%",
      height: "auto",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
      color: "black",
    },
    img: {
      cursor: "pointer",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  },
};
// display: "flex",
// flexDirection: "row",
// justifyContent: "flex-start",
// side: {
//   width: "32%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "flex-start",

//   title: { fontWeight: 600, fontSize: "48px", lineHeight: "57px" },
//   p: { fontWeight: 400, fontSize: "18px", lineHeight: "27px" },
//   btn: {
//     fontWeight: 400,
//     fontSize: "18px",
//     lineHeight: "27px",
//     marginTop: "50px",
//     padding: "18px 24px",
//     border: "1px solid #F1F1F3",
//     borderRadius: "8px",
//   },
// },
// mainPart: {
//   width: "auto",
//   padding: "20px",
//   border: "1px solid #F1F1F3",
//   borderRadius: "8px",

//   upper: {},
//   oneBlock: { display: "flex", flexDirection: "row" },
//   span: {},
//   rowQues: { display: "flex", flexDirection: "row" },
//   question: { width: "60%", height: "auto" },
//   img: {},
// },
