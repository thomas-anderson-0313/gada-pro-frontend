import { makeStyles, withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    marginTop: "4%",
  },
  text: {
    fontSize: "1rem",
    lineHeight: ".875rem",
    marginBottom: 0,
  },
  iconWeb: {
    color: "#1d9bf0",
    fontSize: 20,
    marginLeft: "auto",
  },
  imgLogo: {
    width: "100%",
  },
  iconImg: {
    width: 20,
    height: 20,
    marginLeft: "auto",
  },
  button: {
    height: 56,
    fontSize: "1rem",
    width: "100%",
    textDecoration: "none",
    borderRadius: 4,
    cursor: "pointer",
    "&:hover, &:focus": {
      textDecoration: "none",
    },
  },
  card: {
    width: "100%",
    maxHeight: "48rem",
  },
  cardContent: {
    padding: "2rem",
  },
  total: {
    padding: "8px 0",
    fontSize: "2.75rem",
    fontWeight: "bold",
    color:'#5B6C94',
    
  },
  tpa: {
    fontSize: "1.125rem",
    color: "#5b6c94",
    whiteSpace: "nowrap",
  },
  saleBox: {
    backgroundColor: "#0080FF",
    padding: "1.25rem",
  },
  tabLine: {
    borderRadius: 8,
    width: "100%",
    top: 30,
    position: "absolute",
    height: 10,
    background: "linear-gradient(to right, #0080FF 50%, #B4D9FF)"
  },
  textDescription: {
    fontSize: "1.5625rem",
    textAlign:'center',
    color: "#363636",
    textTransform:"uppercase",
    marginBottom: "4%"
  },
  
  lineDes: {
    width: 102,
    height: 13,
    marginTop: 4,
    borderRadius: 10,
    background: "linear-gradient(to right, #0080FF, #B4D9FF)",
  },
  textDes: {
    fontSize: "1.375rem",
    color: "#000000",
    lineHeight: "2.125rem",
    marginBottom: 16,
  },
  gadaImage: {
    width: "100%",
    height: "100%",
  },
  liteWrap: {
    boxShadow: "-2px 3px 21px -5px rgb(0 0 0 / 5%)",
  },
  lite: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#000000",

  },
  liteItem: {
    padding: "1rem",
    background: "#EFEFEF",
    color:"#5B6C94",
    "&:nth-child(old)": {
      background: "#EFEFEF",
    },
    "&:nth-child(even)": {
      background: "#F9FAFC",
    },
  },
  feeWrap: {
    padding: "1rem",
    color: "#000",
    background: "#F9FAFC",
    height: 48,
    display: "flex",
    alignItems: "center",
    "&:nth-child(old)": {
      background: "#F9FAFC",
    },
    "&:nth-child(even)": {
      background: "#EFEFEF",
    },
  },
  textFee: {
    fontSize: 11,
    color: "#5B6C94",
  },
  textSolution: {
    fontSize:"1.25rem",
    color: "#5B6C94",
  },
  investorsCol: {
    flex:1,
    marginLeft:8,
    "&:first-child": {
      flex:3,
      marginLeft:0
    },
    "&:last-child": {
      flex:2,
    },
  },
  investorsItem: {
    height: "3rem",
    display: "flex",
    fontSize: 15,
    alignItems: "center",
    padding: "1rem",
    color: "#000",
    background: "#F9FAFC",
    "&:nth-child(old)": {
      background: "#F9FAFC",
    },
    "&:nth-child(even)": {
      background: "#EFEFEF",
    },
    "&:last-child": {
      fontWeight: "bold",
    },
  },
  token: {
    height: "4.125rem",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    justifyContent: "center",
    fontSize: 19,
    color: "#0080FF",
    "&:first-child": {
      width: "20.625rem",
      color: "#000",
    },
  },
  footer: {
    background: "#F9FAFC",
    paddingTop: 12,
    paddingBottom: 16,
    [theme.breakpoints.only("lg")]: {
      paddingRight: 45,
      paddingLeft: 45,
    },
  },
  footerLogo: {
    width: "5.875rem",
    height: "8.25rem",
  },
  cardToken: {
    minWidth:758,
    padding: 42,
    marginBottom:"10%",
    background:"#F9FAFC"
  },
  cardItem: {
    padding: 24,
    borderBottom: "1px solid #858585",
  },
  imgTeam: {
    width: 200,
    height: 254,
    objectFit: "contain",
  },
  icon: {
    color: "#fff",
    marginRight: 8,
  },
  textFooter: {
    padding: 16,
    fontSize: 18,
    color: "#fff",
  },
}));
export { useStyles };
