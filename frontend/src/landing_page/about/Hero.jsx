import React from "react";
import "../../assets/css/about.css";
import "../../assets/css/home.css";

function Hero() {
  return (
    <div className="container">

      {/* Hero Heading */}

      <div className="row justify-content-center text-center">

        <div className="col-lg-9">

          <h2 className="display-5 fw-bold mt-5">
            Building the Future of Trading Education
          </h2>

          <p className="lead text-muted mt-4 mb-5 ms-0">
            Tradvise combines modern web technologies, real-time market
            integration, and intuitive user experiences to help aspiring
            investors learn, practice, and analyze the stock market in a
            completely risk-free environment.
          </p>

        </div>

      </div>

      <hr className="my-5" />

      {/* About */}

      <div className="row gy-5 mb-5">

        <div className="col-lg-6 about-page-para">

          <h3 className="mb-4">
            Our Vision
          </h3>

          <p className="ms-0">
            Tradvise was developed as a Bachelor of Technology (Computer
            Science & Engineering) major project with the vision of making
            stock market learning more practical, interactive, and accessible.
            Instead of relying only on theoretical concepts, users can
            experience realistic trading simulations, monitor live market
            movements, and understand portfolio management through a modern
            digital platform.
          </p>

          <p className="ms-0">
            By combining real-time financial data with an intuitive user
            interface, Tradvise bridges the gap between classroom learning and
            real-world investing, enabling users to build confidence before
            participating in actual financial markets.
          </p>

        </div>

        <div className="col-lg-6 about-page-para">

          <h3 className="mb-4">
            Technology & Innovation
          </h3>

          <p className="ms-0">
            The platform is built using the MERN Stack (MongoDB, Express.js,
            React.js, and Node.js) with JWT authentication, Socket.io,
            WebSockets, and REST APIs to deliver a fast, scalable, and secure
            user experience. Live market updates, portfolio analytics, and
            trading simulations work together to create an engaging financial
            learning ecosystem.
          </p>

          <p className="ms-0">
            Tradvise has been designed with future expansion in mind, including
            AI-powered investment insights, predictive analytics, personalized
            learning modules, and advanced portfolio optimization features.
            Our mission is to create an intelligent platform where technology
            empowers smarter financial decision-making.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;