import React from "react";
import { useStyles } from "../../app/routes/Pool/styles";
import logo from "../../assets/images/Gada Logo Grey.png";
import power from "../../assets/images/Iconpo.svg";
import Telegram from "../../assets/images/telegram.svg";
import Twitter from "../../assets/images/Twiter.svg";
import Medium from "../../assets/images/medium.svg";
import footerLogo from "../../assets/images/footerLogo.png";
import { Link, withRouter } from "react-router-dom";
import { Grid, Divider } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footer}>
        <div className="container-fluid">
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Link to="/" className="footer-title">
              <img src={logo} />
              </Link>
            </Grid>
            <Divider />
          </Grid>
        </div>
      </div>
      <Divider />
      <div className={`footer-hide ${classes.footer}`}>
      <img className="footer-img" src={footerLogo} />
        <div className="">
          <div className="container-fluid footer-hide">
            <Grid container spacing={3}>
              <Grid
                item
                xs={6}
                sm={3}
                md={2}
                
              >
                <h1
                  className="footer-title"
                  style={{ fontWeight: 500, color: "#000000" }}
                >
                  Company
                </h1>
                <Link to="/GADA_Litepaper.pdf" className="footer-title">
                  LITEPAPER
                </Link>
                <Link to="/career.html" className="footer-title">
                  CAREERS
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                
              >
                <h1
                  className="footer-title"
                  style={{ fontWeight: 500, color: "#000000" }}
                >
                  help
                </h1>
                <Link to="/terms-condition.html" className="footer-title">
                  Terms & Conditions
                </Link>
                <Link to="/privacy-policy.html" className="footer-title">
                  Privacy Policy
                </Link>
                <a target="_blank" href="https://form.typeform.com/to/QmP6t7J4" className="footer-title">
                  Business Inquiries
                </a>
                <a target="_blank" href="https://gada-1.gitbook.io/gada/" className="footer-title">
                  FAQ
                </a>
              </Grid>

              <Grid
                item
                xs={6}
                sm={3}
                md={2}
                
              >
                <h1
                  className="footer-title"
                  style={{ fontWeight: 500, color: "#000000" }}
                >
                  socials
                </h1>
                <a
                  target="_blank"
                  href="https://t.me/gadachat"
                  className="footer-title"
                >
                  <img className="mr-2" src={Telegram} /> telegram
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/GADALaunchpad "
                  className="footer-title"
                >
                  <img className="mr-2" src={Twitter} />
                  twitter
                </a>
                <a
                  target="_blank"
                  href="https://medium.com/@gadalaunchpad "
                  className="footer-title"
                >
                  <img className="mr-3" src={Medium} />
                  medium
                </a>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={2}
                
              >
                <h1
                  className="footer-title"
                  style={{ fontWeight: 500, color: "#000000" }}
                >
                  pages
                </h1>
                <Link to="/"  className="footer-title">
                  HOME
                </Link>
                <a href="#" className="footer-title">
                  GADA LIGHT
                </a>
                <Link to="/app/pool" className="footer-title">
                  GADA PRO
                </Link>
                <a href="#" className="footer-title">
                  staking
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
