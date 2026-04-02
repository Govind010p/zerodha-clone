/* eslint-disable no-irregular-whitespace */
import React from "react";
import "../main.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "#f5f5f5ff" }}>
      <div className="container p-5 mt-5 ">
        <div className="row mb-5">
          <div className="col">
            <img
              style={{ width: "50%", marginBottom: "8px", marginTop: "4px" }}
              src="../../public/media/images/logo.svg"
              alt="logo image"
            />
            <p className="ms-0">
              © 2010 - 2026, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <a href="">
              <i
                class="fa fa-whatsapp mx-2 fs-5 text-black"
                aria-hidden="true"
              ></i>
            </a>
            <a href="">
              <i
                class="fa fa-linkedin mx-2 fs-5 text-black"
                aria-hidden="true"
              ></i>
            </a>
            <a href="">
              <i
                class="fa fa-twitter mx-2 fs-5 text-black"
                aria-hidden="true"
              ></i>
            </a>
            <a href="">
              <i
                class="fa fa-instagram mx-2 fs-5 text-black"
                aria-hidden="true"
              ></i>
            </a>
            <a href="">
              <i
                class="fa fa-telegram mx-2 fs-5 text-black"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div className="col footer-links">
            <p className="ms-0">Company</p>
            <a href="">About</a>
            <br />
            <a href="">Philosophy</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Open source</a>
            <br />
          </div>
          <div className="col footer-links">
            <p className="ms-0">Support</p>
            <a href="">Contact us</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Bulletin</a>
            <br />
            <a href="">Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
            <br />
          </div>
          <div className="col footer-links ">
            <p className="ms-0">Account</p>
            <a href=""> Open demat account</a>
            <br />
            <a href=""> Minor demat account</a>
            <br />
            <a href=""> NRI demat account</a>
            <br />
            <a href=""> Commodity</a>
            <br />
            <a href=""> Dematerialisation</a>
            <br />
            <a href=""> Fund transfer</a>
            <br />
            <a href=""> MTF</a>
            <br />
            <a href=""> Referral program</a>
            <br />
          </div>
        </div>
        <div className="row termAndConditions ">
          <p className="ms-0">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd. 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
