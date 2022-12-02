import React, { useEffect } from "react";
import StyledHeader from "./styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import logo from "../../assets/img/nuitlogo.png"
import facebook from "../../assets/img/facebook.png"
import instagram from "../../assets/img/instagram.png"
import twitter from "../../assets/img/twitter.png"
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
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
       <div className="terms-of-service">
          <div className="service-section-left">
             <div className="service-logo">
             <img src={String(logo)} alt="Logo" className="footer_img" />
             </div>
             <h4 className="service-parag">Suivez-nous sur :</h4>
             <div className="footer-portfolio">
               <ul className="footer-social-media" >
                 
                 <i className="social-media"><img src={String(facebook)} alt="Logo" className="footer_img" /></i>
                 <i className="social-media"><img src={String(instagram)} alt="Logo" className="footer_img" /></i>
                 <i className="social-media "><img src={String(twitter)} alt="Logo" className="footer_img" /></i>
               </ul>
             </div>
          </div>
          <div className="service-section-right">
              <ul className="service-section-bloc">
                <li ><h3 ><a className="footer-subtitle" href="https://">informations</a></h3></li>
                <li><h5 ><a className="subtitle" href="https://">Comment nous travaillons</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Aide</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Confidentialité</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Conditions</a></h5></li>
          
              </ul>
              <ul className="service-section-bloc">
                <li><h3 ><a className="footer-subtitle" href="https://">Découvrir</a></h3></li>
                <li><h5 ><a className="subtitle" href="https://">A propos de nous</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Confiance et Sécurité</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Les normes communautaires</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Témoignages</a></h5></li>
               </ul>
               
              <ul className="service-section-bloc">
               
              </ul>
          </div>
        </div>
       
    </StyledHeader>
  );
};

export default Footer;
