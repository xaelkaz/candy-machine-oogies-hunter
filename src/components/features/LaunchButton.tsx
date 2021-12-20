import React from "react";
import Countdown from 'react-countdown';

const LaunchContent = [
  {
    icon: "85",
    packName: "Dimond Plan",
    features: ["Unlimited Email", "5gb Hosting & Domain", "Email & Live chat."],
    price: "17th December 16:00P UTC",
    trialText: "17th December 16:00 UTC",
    activeClass: "active",
  }
];

const LaunchButton = () => {
  return (
    <div className="row align-items-center">
        <div className="col-md-12">
            <div className={`pr-table-wrapper text-center active`}>
              <div className="price">17th December 16:00P UTC</div>
              <button
                className="trial-button hover-reverse-gr-bg-one"
              >
                {" "}
                START BUILDING
              </button>
            </div>
            {/* /.pr-table-wrapper */}
        </div>
    </div>
  );
};

export default LaunchButton;
