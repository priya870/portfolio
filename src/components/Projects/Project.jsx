import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  // SiHtml5,
  SiMaterialui,
  SiChakraui,
  SiExpress,
  SiRedux,
  SiJavascript,
} from "react-icons/si";
import { //DiCss3,
   DiMongodb } from "react-icons/di";
// import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        {/* One */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://camo.githubusercontent.com/4e2c1cb144f5396ca9b8adbe3efff73a7a9f301410f3bfc37cefced854fa47a9/68747470733a2f2f692e6962622e636f2f6b67463233315a2f53637265656e73686f742d32303233303132322d3136343232392e706e67"
                  alt="Apple clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Apple - Clone</h2>
              <p>
              world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV,<br/>plus explore accessories, entertainment, and expert device support.
              </p>
              <div>
                <FaReact />
                <SiExpress />
                <DiMongodb />
                <SiMaterialui />
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://blueapple.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/usable-trouble-1944"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
};
