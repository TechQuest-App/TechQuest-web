export const styles = {
  footer: {
       position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    background: '#333',
    color: '#fff',
    height: '60px',
    lineHeight: '60px', 
    textAlign: 'center',
    transition:' transform 0.3s ease', 
  },
  Wrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    width: "100%",
    position: "absolute",
    flexDirection: "column",
    padding: '100px 0',
  },
  FooterContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "start",
    position: "absolute",
    width: "100%",
    top:'0'
  },
  leftSection: {
    // width: "40%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  LogoContainer: {
    marginBottom: "20px",
  },
  connections: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  connection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "auto",
    width: "100%",

    img: {
      width: "24px",
      height: "24px",
      margin: "12px",
    },
    p: {
      textDecoration: "none",
      fontSize: "18px",
      color: "#333",
    },
  },
  ////////////////////////////////////////////
  rightSection: {
    // width: "40%",
    position: "relative",
    justifyContent: "flex-start",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  Col: {
    width: "150px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    padding: 0,
    marginRight: "12px",
    top: 10,
    position :'relative'
  },

  headCol: {
    fontSize: "20px",
    width: "150px",
    height: "32px",
    margin: "0 0 14px 0",
  },
  item: {
    listStyle: "none",
    fontSize: "18px",
    marginBottom: '14px',
    cursor:'pointer'
  },
  socialMedia: {
    display: "flex",
    flexDirection: "column",
  },
  iconsSocial: {
    display: "flex",
    position: "relative",
    top: "10px",
  },
  ColSocial: {
    position: "relative",
    top: "20px",
  },
  platform: {
    padding: "10px",
    marginRight: "14px",
    borderRadius: "8px",
    backgroundColor: "#f7f7f7",
    border: "none",
    width: "32px",
    height: "32px",
    color: "#000",
  },
  oneConnection: {},

  copyRight: {
    fontSize: "18px",
    position: "relative",
    bottom: "-12em",
    width: "100%",
    textAlign: "center",
    paddingTop: "20px",
    borderTop: "1px solid rgb(189 189 189)",
  },
};
