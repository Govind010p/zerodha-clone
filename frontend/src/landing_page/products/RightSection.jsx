import React, { useState, useEffect } from "react";
import "../../assets/css/productsections.css";

function RightSection({
  imageUrl,
  productName,
  productDiscription,
  Link,
  Linkname,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 576; // match your LeftSection

  return (
    <div className="container pb-md-4 mb-md-5 mb-5">
      <div className="row mobile-bordered mx-2 align-items-center">

        <div className="col-md-4 col-12 p-md-3 mt-md-3 mt-5">
          <h2 className="fs-3 ms-4">{productName}</h2>
          <p className="text-start ms-4">{productDiscription}</p>

          {isMobile && (
            <div className="text-center mb-2">
              <img className="image" src={imageUrl} alt="product" />
            </div>
          )}

          {Link && (
            <div className="row p-2 mb-md-2 mb-4">
              <div className="col-12">
                <a className="ms-4" href={Link}>
                  {Linkname} →
                </a>
              </div>
            </div>
          )}
        </div>


        {!isMobile && (
          <div className="col-md-6 ms-md-5 p-md-0 p-2 text-end">
            <img className="image" src={imageUrl} alt="product" />
          </div>
        )}

      </div>
    </div>
  );
}

export default RightSection;
