import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Logo from "assets/images/Gada Logo Blue.svg";
import CloseIcon from "@material-ui/icons/Close";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LinkIcon from "@material-ui/icons/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import DoneIcon from "@material-ui/icons/Done";

/* added notification manager*/
import { NotificationManager } from "react-notifications";

/* for typeform popup */
import { Popup } from "react-typeform-embed";

import Nami from "../../../../assets/images/nami-light.svg";
import Gero from "../../../../assets/images/gerowallet.png";
import Yoroi from "../../../../assets/images/yoroi.svg";
import IconConnect from "../../../../assets/images/icon-conect.svg";
import InstallIcon from "../../../../assets/images/InstallIcon.svg";
import {
  ADDRESS_LABEL,
  FORMAT_ADDRESS_LABEL,
} from "../../../../constants/ActionTypes";

let nami;
let gero;
const loadExternal = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

const useStyles = makeStyles({
  drawerPaper: {
    background: "#0080FF",
    color: "#fff",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  icon: {
    color: "#0080FF",
  },
  textList: {
    fontSize: 18,
  },
});

const GERO_EXTENSION_URL = 'https://chrome.google.com/webstore/detail/gerowallet/bgpipimickeadkjlklgciifhnalhdjhe';
const NAMI_EXTENSION_URL = 'https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo';
const YOROI_EXTENSION_URL = 'https://chrome.google.com/webstore/detail/yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb';

function formatAddress(address) {
  if (address?.length <= 16) return address;
  return address.substr(0, 8) + "..." + address.substr(address.length - 8);
}
const Index = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [modalflag, setModalFlag] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const dispatch = useDispatch();
  const addressname = useSelector((state) => state.addresslabel.addressLabel);
  const [isGeroWalletInstalled, setGeroWalletInstalled] = useState(false);
  const [isNamiWalletInstalled, setNamiWalletInstalled] = useState(false);
  const [isYoroiWalletInstalled, setYoroiWalletInstalled] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openGadaPro = Boolean(anchorEl);
  const handleClickProMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseProMenu = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  useEffect(() => {
    if (!("p" in window)) {
      loadExternal("../../../../../wasm.js").then(async () => {
        const S = await window.p.Cardano();
        if (window.cardano) {
          nami = new window.p.NamiWalletApi(S, window.cardano);
          gero = new window.p.NamiWalletApi(S, window.cardano.gerowallet);

          setGeroWalletInstalled(!!window.cardano.gerowallet);
          setNamiWalletInstalled(!!window.cardano.nami);
          setYoroiWalletInstalled(!!window.cardano.yoroi);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem("handleConnect") === "nami") {
      if (window.localStorage.getItem("addr")) {
        setConnected(true);
        let walletAddress = window.localStorage.getItem("addr");
        dispatch({ type: ADDRESS_LABEL, payload: walletAddress.toString() });
      }
    }
    else if (window.localStorage.getItem("handleConnect") === "gero") {
      if (window.localStorage.getItem("addr")) {
        setConnected(true);
        let walletAddress = window.localStorage.getItem("addr");
        dispatch({ type: ADDRESS_LABEL, payload: walletAddress.toString() });
      }
    }
    else if (window.localStorage.getItem("handleConnect") === "yoroi") {
      if (window.localStorage.getItem("addr")) {
        setConnected(true);
        let walletAddress = window.localStorage.getItem("addr");
        dispatch({ type: ADDRESS_LABEL, payload: walletAddress.toString() });
      } else {
        dispatch({ type: ADDRESS_LABEL, payload: ''.toString() });
      }
    }
    else {
      setConnected(false);
    }
    setUserAddress(formatAddress(addressname));
  }, [!window.localStorage.getItem("handleConnect"), addressname]);

  /**************connect nami wallet *********************/

  const NamiConnect = async () => {
    try {
      if (!isNamiWalletInstalled) {
        window.open(NAMI_EXTENSION_URL, '_blank').focus();
        return;
      }
      const result = await window.cardano.enable().catch(() => {
        NotificationManager.error("Nami request denied.", "Error", 3000);
      });
      if (result) {
        NotificationManager.success(
          "Connected Nami Wallet Successfully.",
          "Success",
          3000
        );

        if (nami) {
          await nami.getAddress().then((newAddress) => {
            var walletaddress =
              newAddress.slice(0, 8) + "..." + newAddress.slice(-8);
            setUserAddress(walletaddress);
            window.localStorage.setItem("addr", newAddress.toString());
            window.localStorage.setItem("handleConnect", "nami");
            dispatch({ type: ADDRESS_LABEL, payload: newAddress.toString() });
          });
        }
        setConnected(result);
      }
    } catch (error) {
      NotificationManager.error(error.message, "Error", 3000);
    }
    setModalFlag(false);
  };

  const GeroConnect = async () => {
    try {
      if (!isGeroWalletInstalled) {
        window.open(GERO_EXTENSION_URL, '_blank').focus();
        return;
      }

      const result = await window.cardano.gerowallet.enable().catch(() => {
        NotificationManager.error("Gero request denied.", "Error", 3000);
      });
      if (result) {
        NotificationManager.success(
          "Connected Gero Wallet Successfully.",
          "Success",
          3000
        );

        if (gero) {
          await gero.getAddress().then((newAddress) => {
            var walletaddress =
              newAddress.slice(0, 5) + "..." + newAddress.slice(-5);
            setUserAddress(walletaddress);
            window.localStorage.setItem("addr", newAddress.toString());
            window.localStorage.setItem("handleConnect", "gero");
            dispatch({ type: ADDRESS_LABEL, payload: newAddress.toString() });
          });
        }
        setConnected(result);
      }
    } catch (error) {
      NotificationManager.error(error.message, "Error", 3000);
    }
    setModalFlag(false);
  };

  /**************connect Yoroi wallet *********************/
  const YoroiConnect = async () => {

    if (!isYoroiWalletInstalled) {
      window.open(YOROI_EXTENSION_URL, '_blank').focus();
      return;
    }

    window.cardano.yoroi
      .enable()
      .then(async (result) => {
        NotificationManager.success(
          "Connected Yoroi Wallet Successfully.",
          "Success",
          3000
        );
        let walletaddress = 'Yoroi Wallet';

        setUserAddress(walletaddress);
        setConnected(result);

        window.localStorage.setItem("handleConnect", "yoroi");
        window.localStorage.setItem("addr", walletaddress.toString());

        dispatch({ type: ADDRESS_LABEL, payload: walletaddress });
      })
      .catch(() => {
        NotificationManager.error("Yoroi request denied.", "Error", 3000);
      });
    setModalFlag(false);
  };
  const handleModal = () => {
    if (addressname) dispatch({ type: FORMAT_ADDRESS_LABEL, payload: "" });
    if (connected && window.localStorage.getItem("handleConnect")) {
      window.localStorage.removeItem("handleConnect");
      window.localStorage.removeItem("addr");
      setConnected(!connected);
    } else {
      setModalFlag(true);
    }
  };
  return (
    <AppBar className="app-main-header" elevation={1}>
      <div className="app-toolbar container-fluid app-headers">
        <div className="row app-toolbar align-items-center header-wrap">
          <div className="col-lg-5 col-sm-12">
            {props.location.pathname === "/app/landing-page" && (
              <img src={Logo} />
            )}
            {props.location.pathname !== "/app/landing-page" && (
              <div className="d-flex align-items-center">
                <Link
                  to="/"
                  className="menu-items text-uppercase home-item"
                  onClick={() => localStorage.setItem("isDetail", false)}
                > 
                  <img src={Logo} alt="logo" /> 
                  <span style = {{marginLeft: "10px", textDecoration: "none"}}>GADA Finance</span>
                </Link> 
              </div>
            )}
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className=" d-flex justify-content-between align-items-center">
              <div>
                <Button
                  style={{
                    color: "#000000",
                    fontSize: "16px",
                    lineHeight: "25px",
                    textDecoration: "none",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickProMenu}
                >
                  GADA PRO
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={openGadaPro}
                  onClose={handleCloseProMenu}
                  TransitionComponent={Fade}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleCloseProMenu}>
                    <Link to="/app/pool" className="menu-items">
                      Launchpad
                    </Link>
                  </MenuItem>
                  <Popup id="uGMATIi3" size={80}>
                    <MenuItem onClick={handleCloseProMenu}>
                      Apply for IDO
                    </MenuItem>
                  </Popup>
                </Menu>
              </div>
              <a
                href="#"
                className="menu-items text-uppercase"
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  lineHeight: "25px",
                  textDecoration: "none",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                GADA LIGHT
              </a>
              <a
                href="#"
                className="menu-items text-uppercase"
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  lineHeight: "25px",
                  textDecoration: "none",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                STAKING
              </a>
              <button
                className="btn btn-primary btn-connect mt-3"
                onClick={() => {
                  handleModal();
                }}
              >
                <img src={IconConnect} />
                <span
                  style={{
                    maxWidth: "200px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {connected ? userAddress : "CONNECT WALLET"}
                </span>
              </button>
            </div>
          </div>
        </div>
        {modalflag && (
          <div className="ModalContainer">
            <div className="header">Connect your wallet</div>
            <div className="headerDetail">
              Please select a wallet to connect to this dapp:
            </div>
            <div className="Modalcontent">
              <button className="Cardbutton" onClick={NamiConnect}>
                <img src={Nami} alt="Nami" width="100px" height="auto" />
                NamiWallet
                <a
                  href="https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo"
                  target="_blank"
                >
                  <span>install</span>
                  <img
                    src={InstallIcon}
                    width="20px"
                    height="20px"
                    alt="install"
                  />
                </a>
              </button>
              <button className="Cardbutton" onClick={GeroConnect}>
                <img src={Gero} alt="Gero" width="100px" height="auto" />
                GeroWallet
                <a
                  href="https://chrome.google.com/webstore/detail/gerowallet/bgpipimickeadkjlklgciifhnalhdjhe"
                  target="_blank"
                >
                  <span>install</span>
                  <img
                    src={InstallIcon}
                    width="20px"
                    height="20px"
                    alt="install"
                  />
                </a>
              </button>
              {/*<button className="Cardbutton" onClick={YoroiConnect}>*/}
              {/*  <img src={Yoroi} alt="Yoroi" width="100px" height="auto" />*/}
              {/*  YoroiWallet*/}
              {/*  <a*/}
              {/*    href="https://chrome.google.com/webstore/detail/yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb"*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    <span>install</span>*/}
              {/*    <img*/}
              {/*      src={InstallIcon}*/}
              {/*      width="20px"*/}
              {/*      height="20px"*/}
              {/*      alt="install"*/}
              {/*    />*/}
              {/*  </a>*/}
              {/*</button>*/}
            </div>
            <div className="Modalfooter">
              <button
                className="btn btn-primary btn-close mt-3"
                onClick={() => {
                  setModalFlag(false);
                }}
              >
                <div style={{ textAlign: "center" }}>close</div>
              </button>
            </div>
          </div>
        )}
        <div className="row app-toolbar align-items-center justify-content-between menu-mobile">
          <IconButton
            className={classes.icon}
            aria-label="open"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            {" "}
            <img style={{ width: 30 }} src={Logo} />{" "}
          </Link>
          <IconButton style={{ opacity: 0 }} aria-label="open">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.list}>
          <div className="d-flex justify-content-end ">
            <IconButton
              className={classes.icon}
              aria-label="open"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            <ListItemLink href="/app/pool" className="menu-items">
              <ListItemText primary="GADA PRO" />
            </ListItemLink>
            <ListItemLink href="#" className="menu-items">
              <ListItemText primary="GADA LIGHT" />
            </ListItemLink>
            <ListItemLink href="#" className="menu-items">
              <ListItemText primary="STAKING" />
            </ListItemLink>
            {/* <ListItemLink className="menu-items" onClick={() => handleModal()}>
              <ListItemText primary="CONNECT WALLET" />
            </ListItemLink> */}
          </List>
          <div
            className="menu-items"
            style={{
              color: "white",
              padding: "8px 16px",
              fontSize: "16px",
              fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            }}
            onClick={() => {
              handleModal();
              handleClose();
            }}
          >
            CONNECT WALLET
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default withRouter(Index);
