import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Moment from "moment";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link, useRouteMatch } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import LogoWhite from "assets/images/Gada Logo White.svg";
import Web from "assets/images/web.svg";
import WebWrap from "assets/images/webwrap.svg";
import Twitter from "assets/images/Twitter.svg";
import TelegramIcon from "@material-ui/icons/Telegram";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#fff",
  },
  itemCard: {
    backgroundColor: "#2E3875",
    color: "#ffff",
    borderRadius: 15,
  },
  header: {
    fontSize: 25,
    color: "#ffff",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  textHeader: {
    fontSize: 20,
    color: "#fff",
  },
  token: {
    color: "#fff",
    fontSize: 16,
    marginRight: 8,
    overflow: "hidden",
    maxWidth: "50%",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
  },
  chip: {
    backgroundColor: "#FFFF",
    fontSize: 14,
    minWidth: 120,
    color: "#0080FF",
  },
  text: {
    fontSize: 14,
    color: "#ffff",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  chipIcon: {
    fontSize: 10,
  },
  iconCopy: {
    fontSize: 16,
    color: "#fff",
  },
  iconImg: {
    width: 18,
    height: 18,
    objectFit: "contain",
    cursor: "pointer",
    objectPosition: "center",
    borderRadius: "50%",
  },
  totalSup: {
    fontSize: 16,
    color: "#fff",
  },
  imgLogo: {
    width: "100%",
    objectFit: "cover",
  },
  total: {
    fontSize: 45,
    color: "#fff",
    lineHeight: "36px",
    fontWeight: 700,
  },
  footer: {
    fontSize: 11,
    color: "#fff",
    marginBottom: 0,
  },
  footer__card: {
    background: "#0080FF",
  },
  wrapperRateProgress: {
    position: "relative",
    margin: "0px 20px",
  },
  rateProgress: {
    position: "absolute",
    display: "inline-block",
    padding: "4px 5px",
    background: "#0080FF",
    color: "#fff",
    borderRadius: 5,
    transform: "translate(-25px)",
    "&::before": {
      position: "absolute",
      content: '""',
      width: 10,
      height: 10,
      background: "#0080FF",
      zIndex: 999,
      top: 23,
      left: 13,
      transform: "rotate(45deg)",
    },
  },
  rate: {
    margin: "0px 20px 30px 20px",
    display: "flex",
    onClick: "flex-end",
  },
  iconWeb: {
    color: "#ffff",
    fontSize: 18,
  },
  iconPa: {
    color: "#ffff",
    fontSize: 36,
  },
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 17,
    borderRadius: 10,
    margin: "40px 20px 5px 20px",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#0080FF",
  },
}))(LinearProgress);
const Item = ({ pool, type, handleGetListPool, total }) => {
  // let match = useRouteMatch();
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [pageClose, setPageClose] = useState(0);
  const [pageComing, setPageComing] = useState(0);
  const [count, setCount] = useState(0);

  const handlePagination = async (value) => {
    if (type === "open") {
      const el = total > (page + 1) * 3;

      value
        ? page !== 0
          ? setPage(page - 1)
          : setCount(0)
        : el
        ? setPage(page + 1)
        : setCount(0);
      value
        ? page !== 0
          ? await handleGetListPool(type, page - 1)
          : setCount(0)
        : el
        ? await handleGetListPool(type, page + 1)
        : setCount(0);
    }
    if (type === "closed") {
      const el = total > (pageClose + 1) * 3;

      value
        ? pageClose !== 0
          ? setPageClose(pageClose - 1)
          : setCount(0)
        : el
        ? setPageClose(pageClose + 1)
        : setCount(0);
      value
        ? pageClose !== 0
          ? await handleGetListPool(type, pageClose - 1)
          : setCount(0)
        : el
        ? await handleGetListPool(type, pageClose + 1)
        : setCount(0);
    }
    if (type === "upcoming") {
      const el = total > (pageComing + 1) * 3;

      value
        ? pageComing !== 0
          ? setPageComing(pageComing - 1)
          : setCount(0)
        : el
        ? setPageComing(pageComing + 1)
        : setCount(0);
      value
        ? pageComing !== 0
          ? await handleGetListPool(type, pageComing - 1)
          : setCount(0)
        : el
        ? await handleGetListPool(type, pageComing + 1)
        : setCount(0);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center pool-title-app">
        {type === "open" ? (
          <span className={classes.header}>OPEN POOLS</span>
        ) : type === "closed" ? (
          <span className={classes.header}>CLOSED POOLS</span>
        ) : (
          <span className={classes.header}>UPCOMING POOLS</span>
        )}
      </div>
      <Grid container className={classes.root} spacing={3}>
        {pool.length === 0 && (
          <div className="coming-son">
            <span className="coming-son-text">coming soon</span>
          </div>
        )}
        {pool &&
          pool.map((item) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={item._id}>
              <Card className={classes.itemCard}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      {item.logo ? (
                        <img
                          className={classes.imgLogo}
                          src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${item.logo}`}
                        />
                      ) : (
                        <div className="slider_img">
                          <img src={LogoWhite} />
                        </div>
                      )}
                    </Grid>
                    <Grid item xs={9}>
                      <div className="text_content">
                        <h5 className="text-white mb-0">{item.projectName}</h5>
                        <div className="d-flex align-items-center mt-2">
                          <div className="socials d-flex align-items-center">
                            <a
                              target="_blank"
                              href={item.website}
                              className="mr-2"
                              style={{ position: "relative" }}
                            >
                              {item.websiteIcon ? (
                                <img
                                  className={classes.iconImg}
                                  src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${item.websiteIcon}`}
                                />
                              ) : (
                                <>
                                  <img src={WebWrap} />
                                  <img className="socials-web" src={Web} />
                                </>
                              )}
                            </a>
                            <a
                              href={item.twitter}
                              target="_blank"
                              className="mr-2"
                            >
                              {!item.twitterIcon ? (
                                <img src={Twitter} />
                              ) : (
                                <img
                                  className={classes.iconImg}
                                  src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${item.twitterIcon}`}
                                />
                              )}
                            </a>
                            <a
                              href={item.telegram}
                              target="_blank"
                              className="mr-2"
                            >
                              {!item.telegramIcon ? (
                                <TelegramIcon />
                              ) : (
                                <img
                                  className={classes.iconImg}
                                  src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${item.telegramIcon}`}
                                />
                              )}
                            </a>
                          </div>
                          <Button
                            component={Link}
                            to={`/app/pool/${item._id}`}
                            variant="contained"
                            style={{ background: "#0080FF", color: "#fff" }}
                            disableElevation
                          >
                            RESEARCH
                          </Button>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <span className={classes.totalSup}> Fundraise Goal </span>
                      <div className="mt-1">
                        <span className={classes.total}>{item.raise} ADA</span>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className="footer_text text-white">
                        <p className={classes.footer}> Swap rate</p>
                        <div className="pool-text-footer">
                          {" "}
                          {item.swapRate}{" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className="footer_text text-white">
                        <p className={classes.footer}>Min Allocation </p>
                        <div className="pool-text-footer">
                          {" "}
                          {item.minAllocation}{" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className="footer_text text-white">
                        <p className={classes.footer}> Max Allocation </p>
                        <div className="pool-text-footer">
                          {" "}
                          {item.maxAllocation}{" "}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
                <div className={classes.wrapperRateProgress}>
                  <div
                    className={classes.rateProgress}
                    style={{
                      left: `${Number(
                        (item.total ? item.soldAmount / item.total : 0) *
                          item.pricepertoken *
                          100 +
                          1
                      ).toFixed(2)}%`,
                    }}
                  >
                    {Number(
                      (item.total ? item.soldAmount / item.total : 0) * item.pricepertoken * 100
                    ).toFixed(2)}
                    %
                  </div>
                </div>
                <BorderLinearProgress
                  variant="determinate"
                  value={parseFloat(Number(
                    (item.total ? item.soldAmount / item.total : 0) * item.pricepertoken * 100 +
                      1
                  ).toFixed(2))}
                />
                {/* <div className={classes.rate}>{item.raise}/USD</div> */}
                <div
                  className={`slider_item_footer radius15-bottom mt-4 pt-2 w-100`}
                >
                  <div className="row mx-0">
                    <div className="col">
                      <div className="footer_text text-white">
                        <p className={classes.footer}> Private sale </p>
                        <h5 style={{ whiteSpace: "nowrap" }}>
                          {item.forPrivateSale}
                        </h5>
                      </div>
                    </div>
                    <div className="col">
                      <div className="footer_text text-white">
                        <p className={classes.footer}> Start time </p>
                        <h5 style={{ whiteSpace: "nowrap" }}>
                          {Moment(item.startTime).format("DD MMM YYYY ")}
                        </h5>
                      </div>
                    </div>
                    <div className="col">
                      <div className="footer_text text-white">
                        <p className={classes.footer}> End time </p>
                        <h5>{Moment(item.endTime).format("DD MMM YYYY ")}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
      </Grid>
      <div className="d-flex justify-content-center mt-2">
        <IconButton onClick={() => handlePagination(true)}>
          <ChevronLeftIcon
            className={classes.iconPa}
          />
        </IconButton>
        <IconButton onClick={() => handlePagination(false)}>
          <ChevronRightIcon
            className={classes.iconPa} />
        </IconButton>
      </div>
    </>
  );
};

export default Item;
