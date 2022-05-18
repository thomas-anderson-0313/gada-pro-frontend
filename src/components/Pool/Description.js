import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../app/routes/Pool/styles";
import { Card } from "@material-ui/core";
import gada from "../../assets/images/Group 7551.png";
import gadaPro from "../../assets/images/Group 7572.png";
import liteLeft from "../../assets/images/Icon.svg";
import TableContainer from "@material-ui/core/TableContainer";
import DoneIcon from "@material-ui/icons/Done";

import {
  lite,
  vesting,
  funds,
  gadas,
  investors,
  investorsPercent,
} from "./data";

const Description = ({ poolItem }) => {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (poolItem.teams) {
      setTeams(JSON.parse(poolItem.teams));
    }
  }, [poolItem]);

  return (
    <>
      <Grid item xs={12}>
        <div style={{ marginTop: "4%" }}>
          <div className={classes.textDescription}>Highlights</div>
        </div>
        <div className={classes.desWrapper}>
          <ul>
            <span className="pool-subtitle mt-2 mt-md-4 ">
              {poolItem.projectHighlights}
            </span>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div>
          <div className={classes.textDescription}>Product</div>
        </div>
        <div className={classes.desWrapper}>
          <span
            className="pool-subtitle mt-2 mt-md-4"
          >
            {poolItem.productDescription}
          </span>
        </div>
      </Grid>
      {poolItem.productImage ? (
        <Grid item xs={12}>
          <img className="description-img"
            src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${poolItem.productImage}`}
          />
        </Grid>
      ) : (
        <>
          <Grid item xs={12} md={6}>
            <img className={classes.gadaImage} src={gada} />
            <div className="text-center pool-subtitle mt-4">
              <span>GADA LIGHT</span>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className={classes.gadaImage} src={gadaPro} />
            <div className="text-center pool-subtitle mt-4">
              <span>GADA PRO</span>
            </div>
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <div>
          <div className={classes.textDescription}>Solution</div>
          <div className={classes.desWrapper}>
            <ul>
              <span className="pool-subtitle mt-2 mt-md-4 ">
                {poolItem.solution}
              </span>
            </ul>
          </div>
        </div>
        <div className={classes.desWrapper}>
          {poolItem.solutionImage ? (
            <img className="description-img"
              src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${poolItem.solutionImage}`}
            />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className="d-flex flex-column">
                  <div
                    className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                  >
                    <img className="mr-4" src={liteLeft} />
                    <span style={{ color: "#fff" }} className={classes.lite}>
                      GADA LIGHT
                    </span>
                  </div>
                  <div className={classes.liteWrap}>
                    {lite.map((item, i) => (
                      <div key={i}
                        className={`d-flex align-items-center justify-content-start ${classes.liteItem}`}
                      >
                        <span className={classes.textSolution}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="d-flex flex-column">
                  <div
                    className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                  >
                    <img className="mr-4" src={liteLeft} />
                    <span style={{ color: "#fff" }} className={classes.lite}>
                      GADA LIGHT
                    </span>
                  </div>
                  <div className={classes.liteWrap}>
                    {lite.map((item,  i) => (
                      <div key={i}
                        className={`d-flex align-items-center justify-content-start ${classes.liteItem}`}
                      >
                        <span className={classes.textSolution}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
            </Grid>
          )}
        </div>
      </Grid>
      <Grid item xs={12}>
        <div>
          <div className={classes.textDescription}>Business Model</div>
        </div>
        <div className={classes.desWrapper}>
          <ul>
            <span
              style={{ listStyleType: "decimal" }}
              className="pool-subtitle mt-2 mt-md-4"
            >
              {poolItem.businessModel}
            </span>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12}>
        {poolItem.businessModelImage ? (
          <img
          className="description-img"
            src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${poolItem.businessModelImage}`}
          />
        ) : (
          <TableContainer>
            <Card style={{ minWidth: 1140 }} className="p-3">
              <div className="d-flex justify-content-end align-items-end">
                <div
                  style={{ width: "83.5%" }}
                  className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                >
                  <span style={{ color: "#fff" }} className={classes.lite}>
                    FEE STRUCTURE
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-end">
                  <div className={classes.feeWrap}>
                    <span
                      style={{ fontWeight: "bold" }}
                      className={classes.textFee}
                    >
                      Pool creation & marketing
                    </span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span
                      style={{ fontWeight: "bold" }}
                      className={classes.textFee}
                    >
                      ADA raised
                    </span>
                  </div>
                  <div
                    style={{ height: "9rem" }}
                    className={`d-flex align-items-center ${classes.feeWrap}`}
                  >
                    <span
                      style={{ fontWeight: "bold" }}
                      className={classes.textFee}
                    >
                      Type of sale available
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}></span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>{"< $100.000"}</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>250 ADA</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>5%</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>Private placements</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>Whitelists</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>
                      First come, first served
                    </span>
                  </div>
                </div>
                <div className={`d-flex flex-column ${classes.feeItem}`}>
                  <div
                    className={`d-flex align-items-center justify-content-center ${classes.feeWrap}`}
                  >
                    <span
                      style={{ fontWeight: "bold" }}
                      className={classes.textFee}
                    >
                      GADA Pro
                    </span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>
                      {"$100.000 ≥ x ≤ $500.000"}
                    </span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>250 ADA</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>3%</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>Private placements</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>Whitelists</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>
                      First come, first served
                    </span>
                  </div>
                </div>
                <div className={`d-flex flex-column ${classes.feeItem}`}>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}></span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>{"< $100.000"}</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>250 ADA</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>5%</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>Private placements</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>Whitelists</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>
                      First come, first served
                    </span>
                  </div>
                </div>
                <div className={`d-flex flex-column ${classes.feeItem}`}>
                  <div
                    className={`d-flex align-items-center justify-content-center ${classes.feeWrap}`}
                  >
                    <span
                      style={{ fontWeight: "bold" }}
                      className={classes.textFee}
                    >
                      GADA Light
                    </span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>{"< $100.000"}</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>250 ADA</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>5%</span>
                  </div>
                  <div
                    style={{ height: "9rem" }}
                    className={`d-flex align-items-center ${classes.feeWrap}`}
                  >
                    <span className={classes.textFee}>
                      Type of sale available
                    </span>
                  </div>
                </div>
                <div className={`d-flex flex-column ${classes.feeItem}`}>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}></span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>{"< $100.000"}</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>250 ADA</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>5%</span>
                  </div>
                  <div
                    style={{ height: "9rem" }}
                    className={`d-flex align-items-center ${classes.feeWrap}`}
                  >
                    <span className={classes.textFee}>
                      Type of sale available
                    </span>
                  </div>
                </div>
                <div className={`d-flex flex-column ${classes.feeItem}`}>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}></span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>{"< $100.000"}</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>250 ADA</span>
                  </div>
                  <div className={classes.feeWrap}>
                    <span className={classes.textFee}>5%</span>
                  </div>
                  <div
                    style={{ height: "9rem" }}
                    className={`d-flex align-items-center ${classes.feeWrap}`}
                  >
                    <span className={classes.textFee}>
                      Type of sale available
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </TableContainer>
        )}
      </Grid>
      <Grid item xs={12}>
        <div>
          <div className={classes.textDescription}>market</div>
        </div>
        <div className={classes.desWrapper}>
          <ul>
            <span
              style={{ listStyleType: "decimal" }}
              className="pool-subtitle mt-2 mt-md-4"
            >
              {poolItem.market}
            </span>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div>
          <div className={classes.textDescription}>Investors</div>
        </div>
        <div>
          {poolItem.investorsImage ? (
            <img className="description-img"
              src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${poolItem.investorsImage}`}
            />
          ) : (
            <TableContainer>
              <Card style={{ minWidth: 1140, height: "auto" }} className="p-3">
                <div className="d-flex justify-content-between">
                  <div
                    className={`d-flex flex-column  flex-g ${classes.investorsCol}`}
                  >
                    <div
                      className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                    >
                      <span style={{ color: "#fff" }} className={classes.lite}>
                        TOTAL SUPPLY OF $GADA
                      </span>
                    </div>
                    {investors.map((item, i) => (
                      <div key={i} className={classes.investorsItem}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`d-flex flex-column  ${classes.investorsCol}`}
                  >
                    <div
                      style={{ opacity: 0, visibility: "hidden" }}
                      className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                    >
                      <span className={classes.lite}>
                      </span>
                    </div>
                    {investorsPercent.map((item, i) => (
                      <div key={i} className={classes.investorsItem}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`d-flex flex-column  ${classes.investorsCol}`}
                  >
                    <div
                      className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                    >
                      <span style={{ color: "#fff" }} className={classes.lite}>
                        $GADA
                      </span>
                    </div>
                    {gadas.map((item, i) => (
                      <div key={i} className={classes.investorsItem}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`d-flex flex-column  ${classes.investorsCol}`}
                  >
                    <div
                      className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                    >
                      <span style={{ color: "#fff" }} className={classes.lite}>
                        PRICE
                      </span>
                    </div>
                    {funds.map((item, i) => (
                      <div key={i} className={classes.investorsItem}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`d-flex flex-column ${classes.investorsCol}`}>
                    <div
                      className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                    >
                      <span style={{ color: "#fff" }} className={classes.lite}>
                        FUNDS
                      </span>
                    </div>
                    {funds.map((item, i) => (
                      <div key={i} className={classes.investorsItem}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`d-flex flex-column  ${classes.investorsCol}`}
                  >
                    <div
                      className={`btn-primary d-flex align-items-center justify-content-center ${classes.button}`}
                    >
                      <span style={{ color: "#fff" }} className={classes.lite}>
                        VESTING
                      </span>
                    </div>
                    {vesting.map((item, i) => (
                      <div key={i} className={classes.investorsItem}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TableContainer>
          )}
          <div className={classes.desWrapper} style={{ marginTop: "4%" }}>
            <span className="pool-subtitle mt-2 mt-md-4">
              {poolItem.investors}
            </span>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div>
          <div className={classes.textDescription}>Team</div>
        </div>
        <div className="d-flex flex-wrap justify-content-center justify-content-md-between">
          {teams &&
            teams.map((item) => (
              <Card className="card-team">
                <div className="d-flex w-100 h-100 flex-column align-items-center justify-content-between pt-4">
                  <div>
                    <img className="description-img"
                      src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${item.img}`}
                    />
                  </div>
                  <div style={{ fontSize: 16 }}>{item.name}</div>
                  <div style={{ fontSize: 10, color: "#98A0A6" }}>
                    {item.role}
                  </div>
                  <a target="_blank" href={item.link} className="btn w-100 mb-0 btn-primary">
                    View LinkedIn
                  </a>
                </div>
              </Card>
            ))}
        </div>
        <div
          style={{ marginTop: "4%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <span className="pool-subtitle mt-2 mt-md-4">{poolItem.team}</span>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div>
          <div className={classes.textDescription}>Token Utility</div>
        </div>
        <div className={classes.desWrapper}></div>
        {poolItem.tokenUtilityImages ? (
          <img className="description-img"
            src={`${process.env.REACT_APP_BASE_URL}api/v1/file/${poolItem.tokenUtilityImages}`}
          />
        ) : (
          <div style={{ overflowX: "auto", padding: "15px" }}>
            <table className="staking-table">
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td className="staking-td">
                    <div className="caption">
                      <div className="caption-heading">Tier I</div>{" "}
                      <div className="caption-number">
                        <div className="caption-number-inside">1</div>
                      </div>
                    </div>
                  </td>
                  <td className="staking-td">
                    <div className="caption">
                      <div className="caption-heading">Tier II</div>{" "}
                      <div className="caption-number">
                        <div className="caption-number-inside">2</div>
                      </div>
                    </div>
                  </td>
                  <td className="staking-td">
                    <div className="caption">
                      <div className="caption-heading">Tier III</div>{" "}
                      <div className="caption-number">
                        <div className="caption-number-inside">3</div>
                      </div>
                    </div>
                  </td>
                  <td className="staking-td">
                    <div className="caption">
                      <div className="caption-heading">Tier IV</div>{" "}
                      <div className="caption-number">
                        <div className="caption-number-inside">4</div>
                      </div>
                    </div>
                  </td>
                  <td className="staking-td">
                    <div className="caption">
                      <div className="caption-heading">Tier V</div>{" "}
                      <div className="caption-number">
                        <div className="caption-number-inside">5</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="rounded_corner">
                  <td className="staking-table-heading">
                    Gada Staking Requirements
                  </td>
                  <td>100 GADA</td>
                  <td>500 GADA</td>
                  <td>1.000 GADA</td>
                  <td>4.000 GADA</td>
                  <td>10.000 GADA</td>
                </tr>
                <tr className="rounded_corner">
                  <td className="staking-table-heading">Pool Weight</td>
                  <td>05</td>
                  <td>10</td>
                  <td>20</td>
                  <td>65</td>
                  <td>100</td>
                </tr>
                <tr className="rounded_corner">
                  <td className="staking-table-heading">
                    Guaranteed Allocation
                  </td>
                  <td>
                    <DoneIcon htmlColor="#049E42" />
                  </td>
                  <td>
                    <DoneIcon htmlColor="#049E42" />
                  </td>
                  <td>
                    <DoneIcon htmlColor="#049E42" />
                  </td>
                  <td>
                    <DoneIcon htmlColor="#049E42" />
                  </td>
                  <td>
                    <DoneIcon htmlColor="#049E42" />
                  </td>
                </tr>
                <tr className="rounded_corner">
                  <td className="staking-table-heading">Lock-up Period</td>
                  <td>7 days after staking</td>
                  <td>7 days after staking</td>
                  <td>5 days after staking</td>
                  <td>5 days after staking</td>
                  <td>5 days after staking</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div
          style={{ marginTop: "4%", marginBottom: "4%" }}
          className="pool-subtitle mt-2 mt-md-4"
        >
          {poolItem.tokenUtility}
        </div>
      </Grid>
    </>
  );
};

export default Description;
