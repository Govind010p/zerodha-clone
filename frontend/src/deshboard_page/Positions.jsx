import React from "react";
import "../assets/css/position.css";
import "../assets/css/holdings.css";

//  ***####  FOR THE FUTURE SCOPE WE COMMENT THIS FEATURES AND THE PART OF THE CODE ####***


// import axios from "axios";

function Positions() {
  // const [positions, setPositions] = useState([]);
  // const [selected, setSelected] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002/allPositions", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setPositions(res.data);
  //     });
  // }, []);

  // const handleRowSelection = (index) => {
  //   setSelected((prev) =>
  //     prev.includes(index)
  //       ? selected.filter((i) => i !== index)
  //       : [...prev, index],
  //   );
  // };

  // const handleAllSelected = (e) => {
  //   if (e.target.checked) {
  //     setSelected(positions.map((_, i) => i));
  //   } else {
  //     setSelected([]);
  //   }
  // };

  return (
    // <div className="div">
    //   {positions.length > 0 && (
    //     <div className="div container" style={{ height: "90vh" }}>
    //       <div className="row px-md-5 px-3 py-md-0 py-1">
    //         <h4>Positions({positions.length})</h4>
    //       </div>
    //       <div className="div border mt-md-2 mt-2"></div>
    //       <div className="row px-md-4 py-md-3 display-none-mobile">
    //         <table className="px-md-0 py-md-3 border">
    //           <thead className="border-0">
    //             <tr className="px-md-0 py-md-5">
    //               <th className="ps-md-4 py-md-2 border-0 text-muted fw-normal">
    //                 <input
    //                   type="checkbox"
    //                   checked={selected.length === positions.length}
    //                   onChange={handleAllSelected}
    //                 />
    //               </th>
    //               <th className="ps-md-4 py-md-2 border-0 text-muted fw-normal">
    //                 Product
    //               </th>
    //               <th className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                 Instrument
    //               </th>
    //               <th className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                 Qty.
    //               </th>
    //               <th className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                 Avg.
    //               </th>
    //               <th className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                 LTP
    //               </th>
    //               <th className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                 P&L
    //               </th>
    //               <th className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                 Chg.
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {positions.map((stock, index) => {
    //               const curValue = stock.price * stock.qty;
    //               const profit = curValue - stock.avg * stock.qty;
    //               const isProfit = curValue - stock.avg * stock.qty >= 0.0;
    //               const profClass = isProfit ? "profit" : "loss";

    //               return (
    //                 <tr key={index} className="px-md-0 py-md-5 border">
    //                   <td className="ps-md-4 py-md-2 border-0 text-muted fw-normal">
    //                     <input
    //                       type="checkbox"
    //                       checked={selected.includes(index)}
    //                       onChange={() => handleRowSelection(index)}
    //                     />
    //                   </td>
    //                   <td className="ps-md-2 py-md-2 border-0 text-muted fw-normal">
    //                     {stock.product}
    //                   </td>
    //                   <td className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                     {stock.name}
    //                   </td>
    //                   <td className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                     {stock.qty}
    //                   </td>
    //                   <td className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                     {stock.avg}
    //                   </td>
    //                   <td className="ps-md-3 py-md-2 border-0 text-muted fw-normal">
    //                     {stock.price}
    //                   </td>
    //                   <td
    //                     className={`ps-md-3 py-md-2 border-0 text-muted fw-normal ${profClass}`}
    //                   >
    //                     {profit.toFixed(2)}
    //                   </td>
    //                   <td
    //                     className={`ps-md-3 py-md-2 border-0 text-muted fw-normal ${profClass}`}
    //                   >
    //                     {stock.net}
    //                   </td>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>

    //         <div className="div mt-4">
    //           <button
    //             className="btn btn-primary"
    //             disabled={selected.length === 0}
    //           >
    //             Exit {selected.length} position
    //           </button>
    //         </div>
    //       </div>

    //       {/* mobile */}
    //       <div className="d-md-none mt-3">
    //         {positions.map((stock, index) => {
    //           const curValue = stock.price * stock.qty;
    //           const profit = curValue - stock.avg * stock.qty;
    //           const profClass = profit >= 0 ? "profit" : "loss";

    //           return (
    //             <div key={index} className="border rounded px-3 py-2 mb-2">
    //               <div className="d-flex justify-content-between align-items-center small text-muted">
    //                 <div>
    //                   <span className="me-2 pill-bg p-1 border rounded small px-2">
    //                     {stock.product}
    //                   </span>
    //                   <span>Qty. {stock.qty}</span>
    //                 </div>
    //                 <div>LTP {stock.price.toFixed(2)}</div>
    //               </div>

    //               <div className="d-flex justify-content-between align-items-center mt-1">
    //                 <div className="fw-semibold">
    //                   {stock.name}
    //                   <span className="text-muted small ms-1">NSE</span>
    //                 </div>

    //                 <div className={`fw-semibold ${profClass}`}>
    //                   {profit.toFixed(2)}
    //                 </div>
    //               </div>

    //               <div className="d-flex justify-content-between align-items-center small mt-1">
    //                 <div className="text-muted">₹{stock.avg.toFixed(2)}</div>

    //                 <div className={`${profClass}`}>{stock.net}</div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   )}

    // </div>
          <div className="div" style={{ paddingTop: "20%" }}>
        <div className="container mt-5 d-flex text-center justify-content-center h-100 align-content-center">
          <div className="row mb-5">
            <div className="col">
              <form action="#">
                <h3>No active Postions found </h3>
                <p>Open The F&O or Equity Intraday Account </p>
                <button className="btn btn-primary">
                  Activate F&O or Intraday
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Positions;
