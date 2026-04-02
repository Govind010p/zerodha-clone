import { Routes, Route, Navigate } from "react-router-dom";
import WatchList from "./WatchList";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import NavbarDeshboard from "./NavbarDashboard";
import Deshboard from "./Deshboard";
import NavMobile from "./NavMobile";
import WatchListNav from "./WatchListNav";
import { GeneralContextProvider } from "./GeneralContext";
import "../assets/css/DeshboardPage.css";

function DeshboardPage() {
  return (
    <>
      <GeneralContextProvider>
        <div className="div w-auto">
          <div className="row dashboard-layout">
            <div className="col-md-3 watchlist-scroll display-none-mobile pe-0">
                <WatchList />
            </div>
            <div className="col-md-9 border border-end-0 border-bottom-0 ps-md-0">
              <div className="div sticky-at-top">
                <NavbarDeshboard />
              </div>
              <div className="div container display-none-desktop display-on-mobile">
                <WatchListNav></WatchListNav>
              </div>
              <div className="div navmobile-fixed">
                <NavMobile></NavMobile>
              </div>
              <div className="div page-content">
                <Routes>
                  <Route index element={<Deshboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="holdings" element={<Holdings />} />
                  <Route path="positions" element={<Positions />} />
                  <Route path="watchlist" element={<WatchList />} />
                  <Route path="funds" element={<Funds />} />
                  <Route path="apps" element={<Apps />} />

                  {/* default redirect */}
                  <Route path="*" element={<Navigate to="" replace />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </GeneralContextProvider>
    </>
  );
}

export default DeshboardPage;
