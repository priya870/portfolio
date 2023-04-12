import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={` ${themename} section `}>
        <a
          href="https://github.com/priya870"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className={` ${themename} footer`}>Designed By Priya Lovelin</h3>
        </a>
      </div>
    </>
  );
};
