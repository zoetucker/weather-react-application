import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <h6>
        This application is coded by ©Zoe Tucker 💁💻 <br /> and opened-source
        on{" "}
        <a
          href="https://github.com/zoetucker/weather-react-application"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </h6>
    </div>
  );
}
