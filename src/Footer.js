import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <h6>
        This application is coded by ©Zoe Tucker 💁💻 <br /> Opened-source on{" "}
        <a
          href="https://github.com/zoetucker/weather-react-application"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://cocky-bhabha-b5346f.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </h6>
    </div>
  );
}
