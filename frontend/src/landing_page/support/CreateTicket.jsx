import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

//   imp -  "text-primary fs-md-1 fs-3 me-md-3 me-3" pass this style with every icon class name

function CreateTicket() {
  return (
    <div className="container py-md-5 py-3 px-md-3 ">
      <div className="row">
        <div className="col-md-8 col-12">
          <Dropdown
            DrapdownTitle="Account Opening"
            dropdownIcon={
              <i
                class="fa fa-plus-circle text-primary fs-md-1 fs-3 me-md-3 me-3"
                aria-hidden="true"
              ></i>
            }
            link1="#"
            link2="#"
            link3="#"
            link4="#"
            link5="#"
            link1label="Resident individual"
            link2label="Minor"
            link3label="Non Resident Indian (NRI)"
            link4label="Company, Partnership, HUF and LLP"
            link5label="Glossary"
          ></Dropdown>
          <Dropdown
            DrapdownTitle="Your Zerodha Account "
            dropdownIcon={
              <i
                class="fa fa-user-circle text-primary fs-md-1 fs-3 me-md-3 me-3"
                aria-hidden="true"
              ></i>
            }
            link1="#"
            link2="#"
            link3="#"
            link4="#"
            link5="#"
            link1label="Your Profile"
            link2label="Account modification"
            link3label="Client Master Report (CMR) and Depository Participant (DP)"
            link4label="Nomination"
            link5label="Transfer and conversion of securities"
          ></Dropdown>
          <Dropdown
            DrapdownTitle="Kite"
            dropdownIcon={
              <i
                class="fa fa-handshake-o text-primary fs-md-1 fs-2 me-md-3 me-3"
                aria-hidden="true"
              ></i>
            }
            link1="#"
            link2="#"
            link3="#"
            link4="#"
            link5="#"
            link6="#"
            link1label="IPO"
            link2label="Trading FAQs"
            link3label="Margin Trading Facility (MTF) and Margins"
            link4label="Charts and orders"
            link5label="Alerts and Nudges"
            link6label="General"
          ></Dropdown>
          <Dropdown
            DrapdownTitle="&nbsp; Funds"
            dropdownIcon={
              <i
                class="fa fa-inr text-primary fs-md-1 fs-2 me-md-3 me-3"
                aria-hidden="true"
              ></i>
            }
            link1="#"
            link2="#"
            link3="#"
            link4="#"
            link1label="Add money"
            link2label="Withdraw money"
            link3label="Add bank accounts"
            link4label="eMandates"
          ></Dropdown>
          <Dropdown
            DrapdownTitle="Console"
            dropdownIcon={
              <i
                class="fa fa-cogs text-primary fs-md-1 fs-2 me-md-3 me-3"
                aria-hidden="true"
              ></i>
            }
            link1="#"
            link2="#"
            link3="#"
            link4="#"
            link5="#"
            link6="#"
            link1label="Portfolio"
            link2label="Corporate actions"
            link3label="Funds statement"
            link4label="Reports"
            link5label="Profile"
            link6label="Segments"
          ></Dropdown>
          <Dropdown
            DrapdownTitle="Coin"
            dropdownIcon={
              <i
                class="fa fa-circle-o-notch text-primary fs-md-1 fs-2 me-md-3 me-3"
                aria-hidden="true"
              ></i>
            }
            link1="#"
            link2="#"
            link3="#"
            link4="#"
            link5="#"
            link1label="Mutual funds"
            link2label="National Pension Scheme (NPS)"
            link3label="Features on Coin"
            link4label="Payments and Orders"
            link5label="General"
          ></Dropdown>
        </div>
        <div className="col-md-4 px-md-4 px-3 py-md-4 py-5 text-start">
          <div>
            <ul
              className="px-md-4 px-4 py-md-2 py-4 text-primary text-decoration-underline"
              style={{
                backgroundColor: "#ff91001a",
                borderLeft: "6px solid #ff9100",
                fontSize: "0.8rem",
                listStyleType: "disc",
              }}
            >
              <li className="ms-md-1 ms-1 ps-md-3 ps-3 mb-md-3 md mb-4 mt-md-4 mt-3">
                <a className="" href="">
                  Evening session of MCX to remain closed on January 1, 2026
                </a>
              </li>
              <li className="ms-md-1 ms-1 ps-md-3 ps-3 mb-md-3">
                <a href="">
                  Adjustment of F&O contracts of KOTAKBANK on account of Split
                </a>
              </li>
            </ul>
          </div>
          <div className="div mt-md-5 mt-5">
            <h5 className="p-3 mb-0" style={{ backgroundColor: "#cccccc97" }}>
              &nbsp;&nbsp;Quick links
            </h5>
            <ul className="border px-md-5 px-5 py-md-3 py-3">
              <li className="px-md-2 text-primary py-md-2 px-2 py-2">
                <Link aria-current="page" to="#">
                  Track account opening
                </Link>
              </li>
              <li className="px-md-2 text-primary py-md-2 px-2 py-2">
                <Link aria-current="page" to="#">
                  Track segment activation
                </Link>
              </li>
              <li className="px-md-2 text-primary py-md-2 px-2 py-2">
                <Link aria-current="page" to="#">
                  Intraday margins
                </Link>
              </li>
              <li className="px-md-2 text-primary py-md-2 px-2 py-2">
                <Link aria-current="page" to="#">
                  Kite user manual
                </Link>
              </li>
              <li className="px-md-2 text-primary py-md-2 px-2 py-2">
                <Link aria-current="page" to="#">
                  Learn how to create a ticket
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row px-md-4 mt-md-5 px-5">
        <div className="col-12 border border-top-5">
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

//text-primary fs-md-1 fs-2 me-md-3 me-1
