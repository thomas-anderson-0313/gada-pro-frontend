import React, { useState, useEffect } from "react";
import { listPool } from "../../../service/pool";
import Container from "@material-ui/core/Container";
import PoolItem from "../../../components/Pool";
import bgpool2 from "../../../assets/images/bgpool2.png";
import bgpool from "../../../assets/images/bgpool.png";

const Pool = () => {
  const [page, setPage] = useState(0);
  const [poolClose, setPoolClose] = useState("");
  const [poolComing, setPoolComing] = useState("");
  const [poolOpen, setPoolOpen] = useState("");
  const [totalOpen, setTotalOpen] = useState("");
  const [totalClose, setTotalClose] = useState("");
  const [totalComing, setTotalComing] = useState("");
  const handleGetListPool = async (type, page) => {
    localStorage.setItem("isDetail", false);
    try {
      const res = await listPool(page, 3, type);
      if (type === "closed") {
        setPoolClose(res.data.data.pools);
        setTotalClose(res.data.data.total);
      }
      if (type === "open") {
        setPoolOpen(res.data.data.pools);
        setTotalOpen(res.data.data.total);
      }
      if (type === "upcoming") {
        setPoolComing(res.data.data.pools);
        setTotalComing(res.data.data.total);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetListPool("closed", page);
    handleGetListPool("open", page);
    handleGetListPool("upcoming", page);
  }, []);
  return (
    <div className="pool-wrapper">
      <img className="pool-bg-1" src={bgpool2} />
      <img className="pool-bg-2" src={bgpool} />
      <Container fixed>
        <PoolItem
          pool={poolOpen}
          total={totalOpen}
          type={"open"}
          handleGetListPool={handleGetListPool}
        />
        <PoolItem
          pool={poolComing}
          type={"upcoming"}
          total={totalComing}
          handleGetListPool={handleGetListPool}
        />
        <PoolItem
          pool={poolClose}
          type={"closed"}
          total={totalClose}
          handleGetListPool={handleGetListPool}
        />
      </Container>
    </div>
  );
};

export default Pool;
