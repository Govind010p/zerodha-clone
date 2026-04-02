import React from "react";
import { useState, useEffect } from "react";
import "../../assets/css/pricing.css";
import '../../assets/css/home.css';


function Brockrage() {
  const [activeTab, setActiveTab] = useState("equity");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container p-md-5 p-1">
      <div className="row">
        <div className="col-md-6 ">
          <ul className="nav nav-underline ">
            {!isMobile && (
              <li className="nav-item fs-3 ">
                <button
                  className={`nav-link fs-3 p-0 ${
                    activeTab === "equity" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("equity")}
                >
                  Equity
                </button>
              </li>
            )}

            {isMobile && (
              <ul className="nav nav-underline">
                <li className="nav-item fs-3 subh4-fontsize-mobile">
                  <button
                    className={`nav-link fs-9 fs-3  p-0 ms-3 ${
                      activeTab === "equity" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("equity-mobile")}
                  >
                    Equity
                  </button>
                </li>
                <li className="nav-item fs-3 ">
                  <button
                    className={`nav-link fs-9 fs-3 p-0  ms-0  ${
                      activeTab === "equity" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("F&O")}
                  >
                    F&O
                  </button>
                </li>
              </ul>
            )}

            <li className="nav-item">
              <button
                className={`nav-link fs-9 fs-3 p-0   ms-md-5  ms-0 ${
                  activeTab === "currency" ? "active" : ""
                }`}
                onClick={() => setActiveTab("currency")}
              >
                Currency
              </button>
            </li>

            <li className="nav-item fs-3">
              <button
                className={`nav-link fs-9 fs-3 p-0 ms-md-5 ms-0 ${
                  activeTab === "commodity" ? "active" : ""
                }`}
                onClick={() => setActiveTab("commodity")}
              >
                Commodity
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row p-md-5 p-4">
        {!isMobile && activeTab === "equity" && (
          <table className="border text-muted fw-medium equity-table">
            <tr className="border">
              <th className="col-2 p-4"></th>
              <th className="col-2 fw-medium me-1">Equity delivery</th>
              <th className="col-2 fw-medium me-1"> Equity intraday</th>
              <th className="col-3 fw-medium me-1">F&O - Futures</th>
              <th className="col-3fw-medium me-1 "> F&O - Options</th>
            </tr>
            <tr>
              <td className="fw-normal text-muted p-3 col-2">Brokerage</td>
              <td className="fw-normal text-muted col-2 me-1">
                Zero Brokerage
              </td>
              <td className="fw-normal text-muted col-2 me-2 p-2">
                {" "}
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="fw-normal text-muted col-3 me-1">
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="fw-normal text-muted col-3">
                Flat Rs. 20 per executed order
              </td>
            </tr>
            <tr>
              <td className="fw-normal text-muted p-3 col-2">STT/CTT</td>
              <td className="fw-normal text-muted col-2 me-1">
                0.1% on buy & sell
              </td>
              <td className="fw-normal text-muted col-2 me-2 p-2">
                {" "}
                0.025% on the sell side
              </td>
              <td className="fw-normal text-muted col-3 me-1">
                0.02% on the sell side
              </td>
              <td className="fw-normal text-muted col-3">
                <ul className="ms-0">
                  <li>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">
                Transaction charges
              </td>
              <td className="fw-normal text-muted col-2 me-1">
                NSE: 0.00297% BSE: 0.00375%
              </td>
              <td className="fw-normal text-muted col-2 me-2 p-2">
                NSE: 0.00297% BSE: 0.00375%
              </td>
              <td className="fw-normal text-muted col-3 me-1">
                NSE: 0.00173% BSE: 0
              </td>
              <td className="fw-normal text-muted col-3">
                NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">GST</td>
              <td className="fw-normal text-muted col-2 me-1">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="fw-normal text-muted col-2 me-2 p-2">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="fw-normal text-muted col-3 me-1">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="fw-normal text-muted col-3">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">SEBI charges</td>
              <td className="fw-normal text-muted col-2 me-1">₹10 / crore</td>
              <td className="fw-normal text-muted col-2 me-2 p-2">
                ₹10 / crore
              </td>
              <td className="fw-normal text-muted col-3 me-1">₹10 / crore</td>
              <td className="fw-normal text-muted col-3">₹10 / crore</td>
            </tr>

            <tr className="last-row">
              <td className="fw-normal text-muted p-3 col-2">Stamp charges</td>
              <td className="fw-normal text-muted col-2 me-1">
                0.015% or ₹1500 / crore on buy side
              </td>
              <td className="fw-normal text-muted col-2 me-2 p-2">
                0.003% or ₹300 / crore on buy side
              </td>
              <td className="fw-normal text-muted col-3 me-1">
                0.002% or ₹200 / crore on buy side
              </td>
              <td className="fw-normal text-muted col-3">
                0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </table>
        )}

        {isMobile && activeTab === "equity-mobile" && (
          <table className="border text-muted fw-medium equity-table">
            <tr className="border">
              <th className="col-2 p-4"></th>
              <th className="col-5 fw-medium">Equity delivery</th>
              <th className="col-5 fw-medium">Equity intraday</th>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">STT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">Transaction charges</td>
              <td>NSE: 0.00297% BSE: 0.00375%</td>
              <td>NSE: 0.00297% BSE: 0.00375%</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr className="last-row">
              <td className="fw-normal text-muted p-3">Stamp charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </table>
        )}

        {isMobile && activeTab === "F&O" && (
          <table className="border text-muted fw-medium equity-table mt-5">
            <tr className="border">
              <th className="col-2 p-4"></th>
              <th className="col-5 fw-medium">F&O – Futures</th>
              <th className="col-5 fw-medium">F&O – Options</th>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">STT / CTT</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul className="ms-0">
                  <li>0.125% of intrinsic value (exercised)</li>
                  <li>0.1% on sell side (premium)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">Transaction charges</td>
              <td>NSE: 0.00173% BSE: 0</td>
              <td>NSE: 0.03503% (premium) BSE: 0.0325%</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3">SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr className="last-row">
              <td className="fw-normal text-muted p-3">Stamp charges</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </table>
        )}

        {activeTab === "currency" && (
          <table className="border text-muted fw-medium Currency-table">
            <tr className="border">
              <th className="col-2 p-4"></th>
              <th className="col-4 fw-md-medium fw me-1 "> Currency futures</th>
              <th className="col-4 fw-md-medium fw me-1 "> Currency options</th>
            </tr>
            <tr>
              <td className="fw-normal text-muted p-3 col-2">Brokerage</td>
              <td className="fw-normal text-muted col-4 me-1">
                0.03% or ₹ 20/executed order whichever is lower
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                ₹ 20/executed order
              </td>
            </tr>
            <tr>
              <td className="fw-normal text-muted p-3 col-2">STT/CTT</td>
              <td className="fw-normal text-muted col-4 me-1">No STT</td>
              <td className="fw-normal text-muted col-4 me-2 p-2">No STT</td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">
                Transaction charges
              </td>
              <td className="fw-normal text-muted col-4 me-1">
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                NSE: 0.0311% <br />
                BSE: 0.001%
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">GST</td>
              <td className="fw-normal text-muted col-4 me-1">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">SEBI charges</td>
              <td className="fw-normal text-muted col-4 me-1">₹10 / crore</td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                ₹10 / crore
              </td>
            </tr>

            <tr className="last-row">
              <td className="fw-normal text-muted p-3 col-2">Stamp charges</td>
              <td className="fw-normal text-muted col-4 me-1">
                0.0001% or ₹10 / crore on buy side
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                0.0001% or ₹10 / crore on buy side
              </td>
            </tr>
          </table>
        )}

        {activeTab === "commodity" && (
          <table className="border text-muted fw-medium Currency-table">
            <tr className="border">
              <th className="col-2 p-4"></th>
              <th className="col-4 fw-medium me-1"> Commodity futures</th>
              <th className="col-4 fw-medium me-1"> Commodity options</th>
            </tr>
            <tr>
              <td className="fw-normal text-muted p-3 col-2">Brokerage</td>
              <td className="fw-normal text-muted col-4 me-1">
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                ₹ 20/executed order
              </td>
            </tr>
            <tr>
              <td className="fw-normal text-muted p-3 col-2">STT/CTT</td>
              <td className="fw-normal text-muted col-4 me-1">
                0.01% on sell side (Non-Agri)
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                0.05% on sell side
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">
                Transaction charges
              </td>
              <td className="fw-normal text-muted col-4 me-1">
                MCX: 0.0021% <br /> NSE: 0.0001%
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                MCX: 0.0418% <br />
                NSE: 0.001%
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">GST</td>
              <td className="fw-normal text-muted col-4 me-1">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr>
              <td className="fw-normal text-muted p-3 col-2">SEBI charges</td>
              <td className="fw-normal text-muted col-4 me-1">
                Agri: ₹1 / crore <br />
                Non-agri: ₹10 / crore
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                ₹10 / crore
              </td>
            </tr>

            <tr className="last-row">
              <td className="fw-normal text-muted p-3 col-2">Stamp charges</td>
              <td className="fw-normal text-muted col-4 me-1">
                0.002% or ₹200 / crore on buy side
              </td>
              <td className="fw-normal text-muted col-4 me-2 p-2">
                0 0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </table>
        )}
        <div className="row text-center p-4">
          <div className="col fs-4">
            <span style={{ color: "#0477adff" }}>
              Calculate your costs upfront&nbsp;
            </span>
            using our brokerage calculator
          </div>
        </div>
      </div>
      <div className="row px-5 py-3 mb-3 ">
        <h3 className="mt-md-5 mb-md-4 p-0 pt-4 pb-3 px-1 pe-4">
          Charges for account opening
        </h3>
        <table className="table text-start border">
          <tr className="border">
            <th className="p-md-3 p-3">Type of account</th>
            <th className="p-md-3 p-3">Charges</th>
          </tr>
          <tr>
            <td className="p-md-3 p-3">Online account</td>
            <td className="p-md-3 p-3">
              <button className="free-btn">Free</button>
            </td>
          </tr>
          <tr>
            <td className="p-md-3 p-3">Offline account</td>
            <td className="p-md-3 p-3">
              <button className="free-btn">Free</button>
            </td>
          </tr>
          <tr>
            <td className="p-md-3 p-3">NRI account (offline only)</td>
            <td className="p-md-3 p-3"> ₹ 500</td>
          </tr>
          <tr>
            <td className="p-md-3 p-3">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td className="p-md-3 p-3"> ₹ 500</td>
          </tr>
        </table>
      </div>
      <div className="row px-5 py-3 mb-4 ">
        <h3 className="mt-md-5 mb-md-4 p-0 pt-4 pb-3 px-1 pe-4">
          Demat AMC (Annual Maintenance Charge)
        </h3>
        <table className="table text-start border">
          <tr className="border">
            <th className="p-md-3 p-3">Value of holdings</th>
            <th className="p-md-3 p-3"> AMC</th>
            <th className="p-md-3 p-3"></th>
          </tr>
          <tr>
            <td className="p-md-3 p-3">Up to ₹4 lakh</td>
            <td className="p-md-3 p-3">
              <button className="free-btn">Free*</button>
            </td>
            <th className="p-md-3 p-3"></th>
          </tr>
          <tr>
            <td className="p-md-3 p-3">₹4 lakh - ₹10 lakh</td>
            <td className="p-md-3 p-3">₹ 100 per year, charged quarterly*</td>
            <th className="p-md-3 p-3"></th>
          </tr>
          <tr>
            <td className="p-md-3 p-3">Above ₹10 lakh</td>
            <td className="p-md-3 p-3"> ₹ 300 per year, charged quarterly</td>
            <th className="p-md-3 p-3"></th>
          </tr>
        </table>
        <p className="m-0 very-small-para">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA, click here.
        </p>
      </div>
      <div className="row px-5 py-3 mb-4">
        <h3 className="mt-md-5 mb-md-4 p-0 pt-4 pb-3 px-1 pe-4">
          Charges for optional value added services
        </h3>
        <table className="table text-start border">
          <tr className="border">
            <th className="p-md-3 p-3">Service</th>
            <th className="p-md-3 p-3">Billing Frquency</th>
            <th className="p-md-3 p-2"> Charges</th>
          </tr>
          <tr>
            <td className="p-md-3 p-3">Tickertape</td>
            <td className="p-md-3 p-3">Monthly / Annual</td>
            <td className="p-md-3 p-2"> Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td className="p-md-3 p-3">Smallcase</td>
            <td className="p-md-3 p-2">Per transaction</td>
            <td className="p-md-3 p-3">Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td className="p-md-3 p-3">Kite Connect</td>
            <td className="p-md-3 p-2"> Monthly</td>
            <td className="p-md-3 p-3"> Connect: 500 | Personal: Free</td>
          </tr>
        </table>
      </div>
      <div className="row px-5 py-3 mb-4 ">
        <h2 className="py-4">Charges explained</h2>
        <div className="col-md-6 col-12">
          <p className="charges-para">Securities/Commodities transaction tax</p>
          <p className="py-2 charges-para-detail">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br />
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="charges-para">Transaction/Turnover Charges</p>
          <p className="py-2 charges-para-detail">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions. <br />
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)BSE has revised
            transaction charges in SS and ST groups to ₹1,00,000 per crore of
            gross turnover. <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022. <br />
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <p className="charges-para">Call & trade</p>
          <p className="py-2 charges-para-detail">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
        </div>
        <div className="col">
          <p className="charges-para">GST</p>
          <p className="py-2 charges-para-detail">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <p className="charges-para">SEBI Charges</p>
          <p className="py-2 charges-para-detail">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <p className="charges-para">DP (Depository participant) charges</p>
          <p className="py-2 charges-para-detail">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity. <br />
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee. <br /> Debit transactions
            of mutual funds & bonds get an additional discount of ₹0.25 on the
            CDSL fee.
          </p>
          <p className="charges-para">Pledging charges</p>
          <p className="py-2 charges-para-detail">
            ₹30 + GST per pledge request per ISIN.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brockrage;
