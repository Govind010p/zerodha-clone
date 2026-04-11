import React, { useState, useEffect, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WatchlistActions = ({ uid }) => {
  const [userInfo, setUserinfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const generalContext = useContext(GeneralContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://zerodha-clone-lkju.onrender.com/api/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUserinfo(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        setUserinfo(null);
        setLoading(false);
      });
  }, []);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    if (loading) return;

    if (!userInfo) {
      navigate("/login");
      return;
    }
    generalContext.openSellWindow(uid);
  };

  return (
    <div className="div watchlist-actions" key={uid}>
      <span className="">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          onClick={handleBuyClick}
          slots={{ transition: Grow }}
        >
          <button className="btn btn-primary buy">B</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="sell (S)"
          placement="top"
          arrow
          onClick={handleSellClick}
          slots={{ transition: Grow }}
        >
          <button className="btn btn-danger sell">S</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="chart"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="btn btn-primary analitics">
            <i class="fa fa-line-chart" aria-hidden="true"></i>
          </button>
        </Tooltip>
      </span>
      <Tooltip
        title="delete"
        placement="top"
        arrow
        slots={{ transition: Grow }}
      >
        <button className="btn btn-primary delete">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </Tooltip>
      <Tooltip title="more" placement="top" arrow slots={{ transition: Grow }}>
        <button className="btn btn-primary delete">
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
      </Tooltip>
    </div>
  );
};

export default WatchlistActions;
