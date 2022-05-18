import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header/index";
import SideBar from "containers/SideBar/index";
import Footer from "components/Pool/Footer";
import Tour from "components/Tour/index";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import { isIOS, isMobile } from "react-device-detect";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";
import { Link, Element, animateScroll as scroll } from 'react-scroll'
const Vertical = (props) => {
  const { drawerType } = useSelector(({ settings }) => settings);

  const drawerStyle = drawerType.includes(FIXED_DRAWER)
    ? "fixed-drawer"
    : drawerType.includes(COLLAPSED_DRAWER)
    ? "collapsible-drawer"
    : "mini-drawer";

  //set default height and overflow for iOS mobile Safari 10+ support.
  if (isIOS && isMobile) {
    document.body.classList.add("ios-mobile-view-height");
  } else if (document.body.classList.contains("ios-mobile-view-height")) {
    document.body.classList.remove("ios-mobile-view-height");
  } 

  const handleToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  
  return (
    <div className={`app-container ${drawerStyle}`}>
      <Tour />
      <SideBar />
      <div className="app-main-container">
        <Element name="firstInsideContainer" className="app-header">
          <Header />
        </Element>
        <main className="app-main-content-wrapper">
          <div className="app-main-content">{props.children}</div>
          <Footer />
        </main>
        <div
          className={`back-to-top text-end  ${
            scrolling ? "d-block" : "d-none"
          }`}
        >
          <div className="container-fluid">
            <div className={`back-to-top-inner mb-3 `}>
              <Link to="firstInsideContainer" spy={true} smooth={true} duration={1000} >
              <IconButton >
                <ArrowUpwardIcon style={{ color: "#ffff", fontSize: 40 }} />
              </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Vertical);
