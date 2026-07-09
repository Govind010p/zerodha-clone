import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Univers from "./Univers";

function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <LeftSection
        imageUrl="/media/images/markerAi.png"
        productName="Real-Time Market Intelligence"
        productDiscription="Stay connected to live stock prices through WebSocket-powered market updates. Monitor price movements, market trends, and trading activity with synchronized real-time data across the platform."
        Link1="/"
        Link1name="Explore Market"
        Link2="/"
        Link2name="Learn more"
        googlePlay="#"
        appStore="#"
      ></LeftSection>

      <RightSection
        imageUrl="/media/images/console.png"
        productName="Virtual Portfolio Management"
        productDiscription="Build and manage virtual investment portfolios, track performance, analyze profits and losses, and gain meaningful insights through interactive analytics dashboards."
        Link="/"
        Linkname="Learn more"
      ></RightSection>

      <LeftSection
        imageUrl="/media/images/Aichat.png"
        productName="AI Investment Assistant"
        productDiscription="Future-ready intelligent assistance that will provide market insights, trend analysis, portfolio recommendations, and personalized investment guidance using artificial intelligence."
        Link1="/"
        Link1name="AI chat"
        googlePlay="#"
        appStore="#"
      ></LeftSection>

      <RightSection
        imageUrl="/media/images/kiteconnect.png"
        productName="Connect API"
        productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Link="/"
        Linkname="tradvise Connect "
      ></RightSection>
      <br />
      <br />
      <LeftSection
        imageUrl={"/media/images/tech.png"}
        productName={"Scalable Platform Architecture"}
        productDiscription={
          "Built using the MERN Stack with JWT authentication, Socket.io, WebSockets, and cloud deployment, delivering a secure, scalable, and high-performance trading simulation platform."
        }
      ></LeftSection>

      <Univers></Univers>
    </>
  );
}

export default ProductPage;
