import React, { useEffect } from "react";
import StyledHeader from "./styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import video from "../../assets/img/video"

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    gsap.to(".square-2", {
      x: 100,
      y: -10,
      rotate: 50,
      scrollTrigger: {
        trigger: ".square-2",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <StyledHeader>
      <div className="global">
        <div className="left"></div>
        <div className="right">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          
            Your browser is not supported!
          </video>
        </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
