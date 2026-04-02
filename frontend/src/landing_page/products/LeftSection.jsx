import React, { useState, useEffect } from "react";
import "../../assets/css/productsections.css";

function LeftSection({
  imageUrl,
  productName,
  productDiscription,
  Link1,
  Link1name,
  Link2,
  Link2name,
  googlePlay,
  appStore,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 576; // MATCH col-md

  return (
    <div className="container pb-md-4 mb-md-5 mb-5">
      <div className="row mobile-bordered mx-2 ">
        {!isMobile && (
          <div className="col-md-6 ms-md-5 p-md-0 p-2">
            <img className="image" src={imageUrl} alt="product" />
          </div>
        )}
        <div className="col-md-4 col-12 p-md-3 mt-md-3 mt-5">
          <h2 className="fs-3 ms-4 order-1 order-md-0">{productName}</h2>
          <p className="text-start ms-4 order-2 order-md-0">
            {productDiscription}
          </p>

          {isMobile && (
            <div className="text-center mb-md-3 mb-5">
              <img className="image" src={imageUrl} alt="product" />
            </div>
          )}

          {(Link1 || Link2) && (
            <div className="row p-md-2 p-2 mb-md-3 mb-4 ">
              {Link1 && (
                <div className="col-md-6 col-6">
                  <a className="ms-3" href={Link1}>
                    {Link1name} →
                  </a>
                </div>
              )}
              {Link2 && (
                <div className="col-md-6 col-6">
                  <a className="ms-3" href={Link2}>
                    {Link2name} →
                  </a>
                </div>
              )}
            </div>
          )}
          <div className="row p-2 ms-1 mb-md-2 mb-4">
            <div className="col-md-6 col-6">
              <a href={googlePlay}>
                <img src="/media/images/googlePlayBadge.svg" />
              </a>
            </div>
            <div className="col-md-6 col-6">
              <a href={appStore}>
                <img src="/media/images/appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
