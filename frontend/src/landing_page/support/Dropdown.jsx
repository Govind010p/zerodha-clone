import React from "react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function CreateTicket({
  DrapdownTitle,
  dropdownIcon,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link1label,
  link2label,
  link3label,
  link4label,
  link5label,
  link6label,
}) {
  const [dropdownkey, setDropdownKey] = useState("close");

  // it is the states of element dropdown for the transitions using the motion and Am=nimatePresence
  const shutterVariants = {
    closed: {
      height: 0,
      clipPath: "inset(0 0 100% 0)",
    },
    open: {
      height: "auto",
      clipPath: "inset(0 0 0% 0)",
      opacity: 1,
    },
  };

  return (
    <div className="container">
      <div
        className="row hover-scale mt-md-4 mt-3"
        onClick={() => {
          setDropdownKey(() => {
            if (dropdownkey === "close") {
              return "active";
            } else {
              return "close";
            }
          });
        }}
      >
        <div className="col">
          <div className="div d-flex border p-md-3 p-3">
            <div className="d-flex align-items-center">
              {dropdownIcon}
              <h5 className="d-flex align-items-center ">{DrapdownTitle}</h5>
            </div>
            <div className="div ms-auto ">
              <motion.i
                class="fa fa-angle-down text-primary fs-md-1 fs-2 me-md-3 me-1"
                animate={{ rotate: dropdownkey === "active" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              ></motion.i>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <AnimatePresence>
        {dropdownkey === "active" && (
          <motion.div
            className="row mb-md-4 mb-3"
            variants={shutterVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{
              height: { duration: 0.45, ease: "easeInOut" },
              clipPath: { duration: 0.45, ease: "easeInOut" },
              opacity: { delay: 0.1, duration: 0.2 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="col">
              <div className="div d-flex border border-top-0 p-md-3 p-3">
                <div className="d-flex align-items-center">
                  <ul>
                    {link1 && (
                      <li className="p-2 text-primary ms-md-2 ms-1 ps-md-3 ps-3">
                        <a href={link1}>{link1label}</a>
                      </li>
                    )}

                    {link2 && (
                      <li className="p-2 text-primary ms-md-2 ms-1 ps-md-3 ps-3">
                        <a href={link2}>{link2label}</a>
                      </li>
                    )}

                    {link3 && (
                      <li className="p-2 text-primary ms-md-2 ms-1 ps-md-3 ps-3">
                        <a href={link3}>{link3label}</a>
                      </li>
                    )}
                    {link4 && (
                      <li className="p-2 text-primary ms-md-2 ms-1 ps-md-3 ps-3">
                        <a href={link4}>{link4label}</a>
                      </li>
                    )}
                    {link5 && (
                      <li className="p-2 text-primary ms-md-2 ms-1 ps-md-3 ps-3">
                        <a href={link5}>{link5label}</a>
                      </li>
                    )}
                    {link6 && (
                      <li className="p-2 text-primary ms-md-2 ms-1 ps-md-3 ps-3">
                        <a href={link6}>{link6label}</a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreateTicket;
