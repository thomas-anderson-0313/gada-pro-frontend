import React from "react";

import LandingTitle from "../../../assets/images/landingtitle.png";
import LogoLight from "../../../assets/images/idea.svg";
import LogoPro from "../../../assets/images/launch.svg";
import MouseLogo from "../../../assets/images/Scrolldown-icon.svg";
import f01 from "../../../assets/images/01.png";
import f02 from "../../../assets/images/02.png";
import f03 from "../../../assets/images/03.png";
import f04 from "../../../assets/images/04.png";
import ConnectLogo from "../../../assets/images/Illustration.png";
import DoneIcon from "@material-ui/icons/Done";
import VisionImg from "../../../assets/images/Saly-39.png";
import VisionBg from "../../../assets/images/Path 113.png";
import FeaturesPro from "../../../assets/images/bgpro.png";
import FeaturesLite from "../../../assets/images/bglite.png";
import FeaturesIcon1 from "../../../assets/images/ficon1.svg";
import FeaturesIcon2 from "../../../assets/images/ficon2.svg";
import FeaturesIcon3 from "../../../assets/images/ficon3.svg";
import FeaturesIcon4 from "../../../assets/images/ficon4.svg";
import FeaturesIcon5 from "../../../assets/images/ficon5.svg";
import FeaturesIcon6 from "../../../assets/images/ficon6.svg";
import bgWrap from "../../../assets/images/BackgroundF.png";
import whyGada from "../../../assets/images/Group 7535.png";
import tokenLogo from "../../../assets/images/Roadmap.png";
import RoadMapLogo from "../../../assets/images/TOKENOMICS.png";
import FooterWrapper from "../../../assets/images/BGF.png";
import { Grid, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

const Index = () => {

  return (
    <div className="landing-wrapper">
      <div>
        <img className="lading-img-title" src={LandingTitle} />
      </div>
      <div className="landing-introduce">
        <div className="introduce-content">
          GADA is ready to democratize fundraising on the Cardano blockchain.
        </div>
        <div className="gada-select d-flex mt-sm-2 mt-xl-4">
          <Link
            to="/app/pool"
            className="btn btn-primary d-flex align-items-center justify-content-end btn-gada"
          >
            <img className="pro-gada-icon" src={LogoPro} />
            <div className="text-btn"> GADA PRO</div>
          </Link>
          <a
            className="btn btn-primary d-flex align-items-center justify-content-end btn-gada"
          >
            <img className="btn-gada-icon" src={LogoLight} />
            <div className="text-btn"> GADA LIGHT</div>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center p-4">
        <img src={MouseLogo} />
      </div>
      <div className="featured">
        <div className="container">
          <Grid container spacing={3} alignItems="center" alignContent="center" justifyContent="center">
            <Grid
              item
              xs={12}
              className="text-center"
            >
              <span className="text-title-content">FEATURED IN</span>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className="text-center"
              style={{ padding: "10px 10px 50px 10px" }}
            >
              <a
                target="_blank"
                href="https://github.com/input-output-hk/essential-cardano/blob/main/essential-cardano-list.md"
              >
                <img src={f01} />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className="text-center"
              style={{ padding: "10px 10px 50px 10px" }}
            >
              <a
                target="_blank"
                href="https://cardanofeed.com/gada-finance-decentralized-launchpad-on-cardano-blockchain-11628.html"
              >
                <img src={f02} />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className="text-center"
              style={{ padding: "10px 10px 50px 10px" }}
            >
              <a
                target="_blank"
                href="https://forum.cardano.org/t/ann-gada-finance-the-first-decentralized-launchpad-on-cardano-blockchain/77670"
              >
                <img src={f03} />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className="text-center"
              style={{ padding: "10px 10px 50px 10px" }}
            >
              <a
                target="_blank"
                href="https://www.cardanocube.io/projects/gada"
              >
                <img src={f04} />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="structure">
        <h1 className="text-title-content text-center">
          GADA'S TIER STRUCTURE
        </h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-12">
              <div style={{ overflowX: "auto", padding: "15px" }}>
                <table
                  className="staking-table"
                  style={{ maxWidth: "80%", marginLeft: "10%" }}
                >
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
            </div>
          </div>
        </div>
      </div>
      <div className="connect-wallet">
        <Grid container spacing={0} className="flex-column-reverse flex-lg-row">
          <Grid
            item
            xs={12}
            md={6}
            className="d-flex justify-content-center flex-column"
          >
            <div className="text-connect mb-4">
              GADA is the first permissionless and community-governed launchpad
              for Cardano.
            </div>
            <div className="text-content">
              GADA empowers projects and ideas with the ability to distribute
              tokens and raise liquidity through its two launchpads – GADA Pro
              and GADA Light.
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-lg-end"
          >
            <img src={ConnectLogo} className="connect-wallet-img" />
          </Grid>
        </Grid>
      </div>
      <div className="vision">
        <h1 className="text-title-content text-center">VISION AND PRIORITIES</h1>
        <Grid container spacing={1} className="flex-column-reverse flex-lg-row">
          <Grid item xs={12} lg={6} className="vision-content text-center">
            <img src={VisionBg} className="vision-img-bg" />
            <img src={VisionImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <h1 className="text-connect mt-3" style={{ color: "#5B6C94" }}>
              Highly secure platform for fundraising
            </h1>
            <div className="mt-2 mb-4">
              <span className="text-content">
                GADA aims to drive the expansion and adoption of the Cardano
                ecosystem by providing a secure and decentralized platform for
                projects seeking funding and incubation and for investors to
                filter the value-added projects as it’s community-driven.
              </span>
            </div>
            <div className="pt-2 mb-4">
              <span className="text-content">
                Currently supporting the Cardano blockchain, but there is more
                to come.
              </span>
            </div>
            <h1 className="text-connect mt-3" style={{ color: "#5B6C94" }}>
              Completely Decentralized & Autonomous
            </h1>
            <div className="mt-2 mb-4">
              <span className="text-content">
                GADA Pro is a launchpad that aims to fundraise Cardano based
                projects, having the need to KYC. Independently if it is a
                project or an idea, GADA Pro’s projects are in a more advanced
                proof of concept stage and might have been funded by venture
                capital or business angels already.
              </span>
            </div>
            <div className="pt-2 mb-4">
              <span className="text-content">
                GADA Light is a launchpad that aims to fundraise Cardano based
                projects and ideas without the need for KYC and KYT, in a full
                automated way end-to-end. A true DeFi launchpad where anyone to
                raise capital.
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="features">
        <div className="container">
          <img src={bgWrap} className="features-margin-pro" />
          <h1 className="text-title-content text-center">
            GADA Pro’s Core Features
          </h1>
          <Card
            elevation={2}
            className="card-features-pro mt-4"
            style={{ backgroundImage: `url(${FeaturesPro})` }}
          >
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <a href="#" className="btn btn-primary btn-features">
                  <img src={FeaturesIcon1} />
                </a>
                <h1
                  className="text-features-title mt-3"
                  style={{ height: "64px" }}
                >
                  Value-Added Projects
                </h1>
                <div className="features-line"></div>
                <div className="mt-4">
                  <span className="text-content ">
                    At GADA Pro, projects are in a more advanced proof of
                    concept stage and might have been funded by venture capital
                    or business angels already. The projects will pass by a
                    thorough review process.
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <a href="#" className="btn btn-primary btn-features">
                  <img src={FeaturesIcon2} />
                </a>
                <h1
                  className="text-features-title mt-3"
                  style={{ height: "64px" }}
                >
                  KYC and Community Due Diligence
                </h1>
                <div className="features-line"></div>
                <div className="mt-4">
                  <span className="text-content ">
                    KYC will be asked to both project owners and investors at
                    GADA Pro. Community due diligence will help to segment the
                    best projects to invest.
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <a href="#" className="btn btn-primary btn-features">
                  <img src={FeaturesIcon3} />
                </a>
                <h1
                  className="text-features-title mt-3"
                  style={{ height: "64px" }}
                >
                  Holistic Analysis of Projects
                </h1>
                <div className="features-line"></div>
                <div className="mt-4">
                  <span className="text-content">
                    GADA's Board of Directors and its advisors will ask
                    extensive information on the projects that apply for
                    fundraising at GADA Pro. An extensive analysis process is
                    completed before the project announcement is done.
                  </span>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
      <div className=" features">
        <div className="container">
          <img src={bgWrap} className="features-margin-lite" />
          <h1 className="text-title-content text-center">
            Gada Light's core features
          </h1>
          <Card
            elevation={2}
            className="card-features-lite mt-4"
            style={{ backgroundImage: `url(${FeaturesLite})` }}
          >
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <a href="#" className="btn btn-primary btn-features">
                  <img src={FeaturesIcon4} />
                </a>
                <h1
                  className="text-features-title mt-3"
                  style={{ height: "64px" }}
                >
                  Permissionless
                </h1>
                <div className="features-line"></div>
                <div className="mt-4">
                  <span className="text-content ">
                    Unlike countless other alternatives, Gada Light was not
                    created to serve as the gatekeeper that controls which
                    projects should be listed for fundraising or not. Aspiring
                    projects are free to hold the fundraising on Gada Light.
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <a href="#" className="btn btn-primary btn-features">
                  <img src={FeaturesIcon5} />
                </a>
                <h1
                  className="text-features-title mt-3"
                  style={{ height: "64px" }}
                >
                  decentralized
                </h1>
                <div className="features-line"></div>
                <div className="mt-4">
                  <span className="text-content ">
                    The future of GADA Light and GADA Pro lies in your hands;
                    the community decides, we listen (or should we say, our
                    smart contracts listen). Token holders will be in the
                    position to vote for ecosystem initiatives, new platform
                    features, and changes to GADA Light and Pro.
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <a href="#" className="btn btn-primary btn-features">
                  <img src={FeaturesIcon6} />
                </a>
                <h1
                  className="text-features-title mt-3"
                  style={{ height: "64px" }}
                >
                  secure and instant dex listing
                </h1>
                <div className="features-line"></div>
                <div className="mt-4">
                  <span className="text-content">
                    After the pool sale finish - either due to the passage of
                    time or due to reaching the hard cap - the liquidity is
                    locked for a specified duration and automatically added to a
                    Cardano DEX. In addition, GADA will gently hold your funds
                    until the pool sale is actually finalized and the liquidity
                    is added to the exchange and then locked.
                  </span>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
      <div className="why-gada">
        <h1 className="text-title-content text-center">Why gada is important</h1>
        <Grid container spacing={3} className="flex-column-reverse flex-lg-row">
          <Grid
            item
            xs={12}
            md={6}
            className="d-flex justify-content-center flex-column"
          >
            <div>
              <span className="text-whygada">
                The Cardano{" "}
                <span style={{ color: "#000000", fontWeight: "500" }}>
                  DeFi ecosystem
                </span>{" "}
                needs funding as Cardano based ideas have been incubating for
                years.
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="d-flex justify-content-center">
            <img src={whyGada} className="connect-wallet-img" />
          </Grid>
        </Grid>
      </div>
      <div className="roadmap">
        <h1 className="text-title-content text-center">THE ROADMAP</h1>
        <div className="roadmap-content text-center">
          <div className="container">
            <img src={RoadMapLogo} />
          </div>
        </div>
      </div>
      <div className="token-omics">
        <img src={bgWrap} className="features-margin-lite" />
        <img src={FooterWrapper} className="token-omics-img" />
        <h1 className="text-title-content text-center">TOKENOMICS</h1>
        <div className="container">
          <Card elevation={2} className="card-tokenomics">
            <img src={tokenLogo} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
