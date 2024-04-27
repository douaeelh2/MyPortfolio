import React, { useState } from "react";
import '../index.css';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="tooltip-container z-50" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isTooltipVisible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
