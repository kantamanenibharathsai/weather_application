const landingPageStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
  },

  firstNavContainer: {
    width: "100%",
    height: "70px",
    background: "#005986",
    display: "flex",
    alignItems: "center",
  },

  firstNavChildContainer: {
    height: "auto",
    margin: "auto",
    width: "90%",
  },

  weatherNavLogo: {
    width: "220px",
    height: "65px",
  },

  secondNavChildContainer: {
    background: "#003550",
    height: "40px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  tabsList: {
    listStyle: "none",
    padding: 0,
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tabListItem: {
    font: "700 15px Poppins",
    color: "#ffffff",
    cursor: "pointer",
    px: 1.5,
    pb: 0.6,
    // height: "26px",
    borderBottom: "2px solid transparent",
    boxSizing: "border-box",
    "&:hover": {
      borderBottom: "2px solid #fff",
      boxSizing: "border-box",
    },
  },

  activeListItemFunc: () => {
    return { borderBottom: "2px solid #fff" };
  },

  bodyContainer: {
    backgroundImage:
      "linear-gradient(0deg, #d8eeee, #d8eeee 25%, #64adc9 65%, #005986 90%, #005986)",
    minHeight: "100vh",
    py: 4,
  },
};

export default landingPageStyles;
