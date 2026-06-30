import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import WatchList from "../src/deshboard_page/WatchList";
import Orders from "../src/deshboard_page/Orders";
import Holdings from "../src/deshboard_page/Holdings";
import Positions from "../src/deshboard_page/Positions";
import Funds from "../src/deshboard_page/Funds";
import Apps from "../src/deshboard_page/Apps";
import NavbarDeshboard from "../src/deshboard_page/NavbarDashboard";
import Deshboard from "../src/deshboard_page/Deshboard";
import NavMobile from "../src/deshboard_page/NavMobile";
import WatchListNav from "../src/deshboard_page/WatchListNav";
import { GeneralContextProvider } from "../src/deshboard_page/GeneralContext";
import ChatBox from "./deshboard_page/ChatBox";
import "../src/assets/css/DeshboardPage.css";
import "../src/assets/css/chat.css";
import { X } from "lucide-react";
import chatLogo from "../src/assets/images/5962463.png";

export default function DashboardLayout() {
  const [ChatboxOpen, setCharboxOpen] = useState(false);

  return (
    <div className="div w-auto">
      <div className="row dashboard-layout">
        <div className="col-md-3 watchlist-scroll display-none-mobile pe-0">
          <GeneralContextProvider>
            <WatchList />
          </GeneralContextProvider>
        </div>
        <div className="col-md-9 border border-end-0 border-bottom-0 ps-md-0">
          <div className="div sticky-at-top">
            <NavbarDeshboard />
          </div>

          <div className="div container display-none-desktop display-on-mobile">
            <WatchListNav />
          </div>
          <div className="div navmobile-fixed">
            <NavMobile />
          </div>
          <div className={`chat-box ${ChatboxOpen ? "chat-box-open" : ""}`}>
              <ChatBox />
          </div>
          <div className=" page-content flex row">
            <div className={ChatboxOpen ? "div col-8" : "div"}>
              <Routes>
                <Route index element={<Deshboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />

                <Route
                  path="/watchlist"
                  element={
                    <GeneralContextProvider>
                      <WatchList />
                    </GeneralContextProvider>
                  }
                />
                <Route path="/funds" element={<Funds />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="*" element={<Navigate to="" replace />} />
              </Routes>
            </div>
          </div>
          <div
            className={ChatboxOpen ? "display-none-desktop" : ""}
            onClick={() => setCharboxOpen(true)}
          >
            <img src={chatLogo} alt="chatLogo" className="logo" />
          </div>
          <div
            className={
              ChatboxOpen ? "cross cross-open" : "display-none-desktop"
            }
            onClick={() => setCharboxOpen(false)}
          >
            <X></X>
          </div>
        </div>
      </div>
    </div>
  );
}
