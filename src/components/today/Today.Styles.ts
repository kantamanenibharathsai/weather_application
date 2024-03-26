const todayStyles = {
  todaysContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "80%",
    margin: "auto",
  },

  mainContainer: {
    borderRadius: "19px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    // mt: 3,
    width: "100%",
  },

  topContainer: {
    height: "35px",
    background: "#1F4E5C",
    display: "flex",
    alignItems: "center",
    px: 2,
  },

  locationNameText: {
    font: "800 20px Poppins",
    color: "#fff",
  },

  downContainer: {
    background: "linear-gradient(to right, #228EB5, #5FC5D9)",
    padding: 2,
  },

  temperature: {
    font: "800 76px Poppins",
    color: "#fff",
    // border: "2px solid red",
    position: "relative",
  },

  degreeStyle: {
    font: "800 56px Poppins",
    color: "#fff",
    // border: "2px solid red",
    height: "20px",
    lineHeight: "20px",
    py: 0,
    position: "absolute",
  },

  weatherTypeText: {
    font: "800 22px Poppins",
    color: "#fff",
  },

  sunnyImage: {
    width: "90px",
    mixBlendMode: "overlay",
    height: "90px",
  },

  todaysForecastContainer: {
    borderRadius: "19px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    // mt: 3,
    width: "100%",
    padding: "15px 10px",
  },

  todaysForecastHeading: {
    font: "800 22px Poppins",
    color: "#000",
  },

  unorderedListContainer: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    mt: 2,
    height: "400px",
    overflowY: "auto"
  },

  unorderedListItem: {
    font: "800 22px Poppins",
    color: "#000",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: 2
  },
};

export default todayStyles;
