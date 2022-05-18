import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../app/routes/Pool/styles";
import Moment from "moment";
import Card from "@material-ui/core/Card";
import { TableContainer } from "@material-ui/core";
const TokenSale = ({ poolItem }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} lg={8}>
        <TableContainer>
          <Card className={classes.cardToken} elevation={1}>
            <div
              className={`d-flex justify-content-between align-items-center ${classes.cardItem}`}
            >
              <div className={classes.text}>Sale Date</div>
              <div style={{ color: "#5B6C94" }} className={classes.text}>
                {Moment(poolItem.saleDate).format("YYYY MMM DD ")}
              </div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center ${classes.cardItem}`}
            >
              <div className={classes.text}>Sale Start Time (UTC)</div>
              <div style={{ color: "#5B6C94" }} className={classes.text}>
                {Moment(poolItem.startTime).format("YYYY MMM DD ")}
              </div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center ${classes.cardItem}`}
            >
              <div className={classes.text}>Sale End Time (UTC)</div>
              <div style={{ color: "#5B6C94" }} className={classes.text}>
                {Moment(poolItem.endTime).format("YYYY MMM DD ")}
              </div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center ${classes.cardItem}`}
            >
              <div className={classes.text}>Token Distribution (UTC)</div>
              <div style={{ color: "#5B6C94" }} className={classes.text}>
                {poolItem.tokenDistribution}
              </div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center ${classes.cardItem}`}
            >
              <div className={classes.text}>Initial Market Cap</div>
              <div style={{ color: "#5B6C94" }} className={classes.text}>
                {poolItem.initialMarketCap}
              </div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center ${classes.cardItem}`}
            >
              <div className={classes.text}>Initial Token Circulation</div>
              <div style={{ color: "#5B6C94" }} className={classes.text}>
                {poolItem.initialTokenCirculation}
              </div>
            </div>
          </Card>
        </TableContainer>
      </Grid>
    </>
  );
};

export default TokenSale;
