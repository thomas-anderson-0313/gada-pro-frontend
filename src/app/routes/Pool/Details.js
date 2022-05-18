import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useParams } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { getPoolDetail, editPoolUser } from "../../../service/pool";
import { useStyles } from "./styles";
import Description from "components/Pool/Description";
import TokenSale from "components/Pool/TokenSale";
import IconEnter from "../../../assets/images/enterpool.svg";
import IconBuy from "../../../assets/images/rocket.png";
import Close from "../../../assets/images/close.png";
import Cloud from "../../../assets/images/cloud.png";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

import WhiteList from "components/Pool/WhiteList";

function calculateTimeLeft(date) {
  let difference = (Date.parse(new Date(date)) - Date.parse(new Date())) / 1000;
  if (difference <= 0) return false;
  let timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference >= 365.25 * 86400) {
    timeLeft.years = Math.floor(difference / (365.25 * 86400));
    difference -= timeLeft.years * 365.25 * 86400;
  }
  if (difference >= 86400) {
    timeLeft.days = Math.floor(difference / 86400);
    difference -= timeLeft.days * 86400;
  }
  if (difference >= 3600) {
    timeLeft.hours = Math.floor(difference / 3600);
    difference -= timeLeft.hours * 3600;
  }
  if (difference >= 60) {
    timeLeft.minutes = Math.floor(difference / 60);
    difference -= timeLeft.minutes * 60;
  }
  timeLeft.seconds = difference;

  if (!timeLeft.years) {
    delete timeLeft.years;
  }

  return timeLeft;
}

// =======================to use wasm module=====================================
let walletApi;
const loadExternal = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

function convertTZ(date, tzString) {
  if (!date) return date;
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

const Details = () => {
  const addressname = useSelector((state) => state.addresslabel.addressLabel);

  const { pathname } = useLocation();
  const classes = useStyles();
  const [poolItem, setPoolItem] = useState({});
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(convertTZ(poolItem.saleDate, "Europe/Amsterdam"))
  );
  const [tabDes, setTabDes] = useState(true);
  const [tabToken, setTabToken] = useState(false);
  const [tabWhiteList, setTabWhiteList] = useState(false);
  const [open, setOpen] = useState(false);
  const [isStarted, setStarted] = useState(false);
  const [isEnded, setEnded] = useState(false);
  const [gadaAmount, setGadaAmount] = useState(0);
  const [balance, setBalance] = useState();
  const [transaction, setTransaction] = useState();
  const [witnesses, setWitnesses] = useState();
  const [whiteListedStatu, setWhiteListStatu] = useState(false);
  useEffect(() => {
    if (!("q" in window)) {
      loadExternal("../../../../bundle.js").then(async () => {
        let apiKey = {
          0: "testnetRvOtxC8BHnZXiBvdeM9b3mLbi8KQPwzA", // testnet
          1: "mainnetGHf1olOJblaj5LD8rcRudajSJGKRU6IL", // mainnet
        };
        const S = await window.q.Cardano();
        if (window.localStorage.getItem("handleConnect") === "nami") {
          walletApi = new window.q.default(S, window.cardano, apiKey);
        }
        if (window.localStorage.getItem("handleConnect") === "gero") {
          walletApi = new window.q.default(
            S,
            window.cardano.gerowallet,
            apiKey
          );
        }
      });
    }
  }, [window.localStorage.getItem("handleConnect"), addressname]);

  const getBalance = async () => {
    if (walletApi) {
      await walletApi.getBalance().then((result) => {
        setBalance(result.lovelace);
      });
    }
  };

  const buildTransaction = async () => {
    if (walletApi) {
      const recipients = [
        {
          address:
            "addr_test1qp0jaxt3tz8wxdwwv33mnqslwt5p9m2sqweem59yswm0hxv08gd5gfnvue26m962qkt32wxje6lh64y5ulkc24djgx0qu9v7rm",
          // "addr1q9cw4nn7lv6jvrpxvdmkcl9x3sn3yuyrmzrj5twekxeewhjaewuq2nwj709pv6ne6pdlslh6pzl289j8a3vzn2flcmls6fvgg6",
          amount: poolItem.swapRate ? gadaAmount / poolItem.swapRate : 0,
        },
      ];
      let utxos = await walletApi.getUtxosHex();
      const myAddress = await walletApi.getAddress();

      let netId = await walletApi.getNetworkId();
      const t = await walletApi.transaction({
        PaymentAddress: myAddress,
        recipients: recipients,
        metadata: null,
        utxosRaw: utxos,
        networkId: netId.id,
        ttl: 3600,
        multiSig: null,
      });
      setTransaction(t);
    }
  };

  const signTransaction = async () => {
    const temp = { ...poolItem };
    temp.id = temp["_id"];
    setPoolItem({
      ...temp,
      soldAmount: Number(temp.soldAmount) + Number(gadaAmount),
    });
    if (walletApi) {
      const witnesses = await walletApi.signTx(transaction);
      setWitnesses(witnesses);
    }
  };

  useEffect(() => {
    if (!!transaction) {
      signTransaction();
    }
  }, [transaction]);

  const submitTransaction = async () => {
    updateSoldAmount();
    if (walletApi) {
      let netId = await walletApi.getNetworkId();
      const txHash = await walletApi.submitTx({
        transactionRaw: transaction,
        witnesses: [witnesses],

        networkId: netId.id,
      });
      handleClose();
      setGadaAmount(null);
      setTransaction(null);
      setWitnesses(null);
    }
  };

  useEffect(() => {
    if (!!witnesses) {
      submitTransaction();
    }
  }, [witnesses]);

  useEffect(() => {
    handleGetPool();
    getBalance();
  }, [addressname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(poolItem.saleDate));
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  });

  const handleClickOpen = () => {
    if (!addressname) {
      NotificationManager.warning(
        "You need to connect wallet.",
        "Warning",
        3000
      );
    } else {
      if (whiteListedStatu === true) {
        setOpen(true);
        getBalance();
      } else {
        NotificationManager.error("you are not whitelisted.", "Error", 3000);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  let { id } = useParams();

  const handleGetPool = async () => {
    try {
      const res = await getPoolDetail(id);
      const WhiteListers = res.data.data.whiteList;
      const currentDate = new Date();
      if (currentDate >= new Date(res.data.data.saleDate)) {
        setStarted(true);
      }
      if (currentDate > new Date(res.data.data.endTime)) {
        setEnded(true);
      }
      let whitelisted = 0;

      for (let i = 0; i <= WhiteListers.length - 1; i++) {
        if (addressname && addressname === WhiteListers[i]) {
          whitelisted += 1;
        } else {
          whitelisted += 0;
        }
      }
      if (whitelisted === 1) {
        setWhiteListStatu(true);
      } else {
        setWhiteListStatu(false);
      }
      setPoolItem(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSoldAmount = async () => {
    try {
      const res = await editPoolUser(poolItem);
      if (res.data.data) {
        handleGetPool();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addLeadingZeros = (value) => {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };
  const handleTabDes = () => {
    setTabToken(false);
    setTabDes(true);
    setTabWhiteList(false);
  };
  const handleTabToken = () => {
    setTabToken(true);
    setTabDes(false);
    setTabWhiteList(false);
  };
  const handleTabWhiteList = () => {
    setTabWhiteList(true);
    setTabToken(false);
    setTabDes(false);
  };

  const handleBuyTx = async () => {
    if (
      walletApi &&
      (balance / 1000000 < gadaAmount / poolItem.swapRate ||
        typeof balance === "undefined" ||
        balance === 0)
    ) {
      NotificationManager.error("Insufficient funds error", "Error", 3000);
      return;
    }
    if (
      !gadaAmount ||
      gadaAmount <= 0 ||
      poolItem.minAllocation > gadaAmount * poolItem.pricepertoken ||
      poolItem.maxAllocation < gadaAmount * poolItem.pricepertoken
    ) {
      NotificationManager.error("invalid allocation error", "Error", 3000);
      return;
    } else {
      await buildTransaction();
    }
  };

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (timeLeft[interval] !== 0 && !timeLeft[interval]) {
      return false;
    }
    return (
      <>
        <div class="ps--countdown__item">
          <div class="ps--countdown__value days">
            {addLeadingZeros(timeLeft[interval])}
          </div>
          <div class="ps--countdown__title">{interval}</div>
        </div>
        <span class="ps--countdown__divider">:</span>
      </>
    );
  });
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img
          src={Close}
          width={50}
          style={{
            position: "fixed",
            marginTop: "-20px",
            marginLeft: "480px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
        <div className="card-buy-wrapper">
          <div className="card-buy-header">
            <img
              src={IconBuy}
              height={200}
              style={{ position: "fixed", marginTop: "-120px" }}
            />
            <img src={Cloud} width={500} style={{ marginTop: "50px" }} />
          </div>

          <div className="p-4 d-flex flex-column  justify-content-center">
            <span
              style={{ color: "#000000", fontSize: 22 }}
              style={{ color: "#000000", fontSize: 16 }}
              className="text-center"
            >
              Price
            </span>
            <span
              style={{ color: "#5B6C94", fontSize: 21 }}
              className="text-center mb-2"
            >
              {poolItem.swapRate ? gadaAmount / poolItem.swapRate : 0} ADA
            </span>
            <TextField
              margin="dense"
              id="outlined-basic"
              variant="outlined"
              defaultValue="0.00"
              label="GADA amount"
              type="number"
              value={gadaAmount}
              onChange={(e) => setGadaAmount(e.target.value)}
            />
            <span
              style={{ color: "#5B6C94", fontSize: 15 }}
              className="text-center mt-1"
            >
              Min {poolItem.minAllocation} Allocation and Max{" "}
              {poolItem.maxAllocation} Allocation
            </span>
          </div>
          <div
            className={`d-flex align-items-center justify-content-center btn-primary  ${classes.button}`}
            onClick={handleBuyTx}
          >
            BUY
          </div>
        </div>
      </Dialog>
      <div className={`container ${classes.root}`}>
        <div className="d-flex flex-row-reverse flex-md-row align-items-center pool-details-title">
          <img
            className="logo-gada"
            src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${poolItem.logo}`}
          />
          <div className="ml-md-4 mr-2 mr-md-0">
            <div className="pool-title">{poolItem.projectName}</div>
            <h2 className="pool-subtitle">{poolItem.projectSubtitle}</h2>
          </div>
        </div>
        <Grid
          container
          spacing={6}
          className="flex-column-reverse flex-md-row"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={7} lg={8} className="d-flex flex-column ">
            <div style={{ maxWidth: "100%" }}>
              <img
                className={classes.imgLogo}
                src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${poolItem.heroImg}`}
              />
            </div>
            <div className="tab-line mt-sm-2">
              <div style={{ position: "relative" }}>
                <div
                  className={`tab-item ${classes.text}`}
                  onClick={handleTabDes}
                >
                  DESCRIPTION
                </div>
                {tabDes && <div className={classes.tabLine}></div>}
              </div>
              <div style={{ position: "relative" }}>
                {" "}
                <div
                  className={`tab-item ${classes.text}`}
                  onClick={handleTabToken}
                >
                  TOKEN SALE
                </div>
                {tabToken && <div className={classes.tabLine}></div>}{" "}
              </div>
              {poolItem.typeOfSale !== "public" ? (
                <div style={{ position: "relative" }}>
                  {" "}
                  <div
                    className={`tab-item ${classes.text}`}
                    onClick={handleTabWhiteList}
                  >
                    WHITELIST
                  </div>
                  {tabWhiteList && <div className={classes.tabLine}></div>}{" "}
                </div>
              ) : null}
            </div>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Card className={classes.card} elevation={3}>
              <CardContent className={classes.cardContent}>
                <h5 className={classes.text}>Fundraise Goal</h5>
                <h3 className={classes.total}>${poolItem.total}</h3>
                <div className="d-flex justify-content-between align-items-center">
                  <div className={classes.text}>Allocation</div>
                  <div className={classes.tpa}>
                    ₳{poolItem.maxAllocation} MAX
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className={classes.text}>Price Per Token</div>
                  <div className={classes.tpa}>${poolItem.pricepertoken}</div>
                </div>
              </CardContent>
              {isEnded ? (
                <>
                  <a
                    className={`d-flex align-items-center justify-content-center btn-enter-pool  ${classes.button}`}
                  >
                    <img src={IconEnter} />{" "}
                    <span className="ml-3">Sale ended</span>
                  </a>
                </>
              ) : (
                <>
                  {isStarted ? (
                    <>
                      <a
                        className={`d-flex align-items-center justify-content-center btn-enter-pool  ${classes.button}`}
                        onClick={!isEnded ? handleClickOpen : () => {}}
                      >
                        <img src={IconEnter} />{" "}
                        <span className="ml-3">ENTER POOL</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <div className={classes.saleBox}>
                        <div
                          style={{ color: "#ffff", letterSpacing: 6 }}
                          className={`d-flex justify-content-center ${classes.text}`}
                        >
                          SALE STARTS IN
                        </div>
                        <div className="ps--countdown mt-sm-2">
                          {timerComponents}
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={8}>
          {tabDes && <Description poolItem={poolItem} />}

          {tabToken && <TokenSale poolItem={poolItem} />}
          {tabWhiteList && <WhiteList poolItem={poolItem} />}
        </Grid>
      </div>
    </>
  );
};

export default Details;
