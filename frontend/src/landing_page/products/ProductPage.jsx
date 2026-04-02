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
        imageUrl="/media/images/kite.png"
        productName="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Link1="/"
        Link1name="Try Demo"
        Link2="/"
        Link2name="Learn more"
        googlePlay="#"
        appStore="#"
      ></LeftSection>

      <RightSection
        imageUrl="/media/images/console.png"
        productName="Console"
        productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Link="/"
        Linkname="Learn more"
      ></RightSection>

      <LeftSection
        imageUrl="/media/images/coin.png"
        productName="Coin"
        productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Link1="/"
        Link1name="Coin"
        googlePlay="#"
        appStore="#"
      ></LeftSection>

      <RightSection
        imageUrl="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Link="/"
        Linkname="Kite Connect "
      ></RightSection>
      <br />
      <br />
      <LeftSection
        imageUrl={"/media/images/varsity.png"}
        productName={"Varsity mobile"}
        productDiscription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      ></LeftSection>

      <Univers></Univers>
    </>
  );
}

export default ProductPage;
