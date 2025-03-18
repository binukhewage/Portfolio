"use client";

import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <button className={`swiper-button-prev ${btnStyles}`}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={`swiper-button-next ${btnStyles}`}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;