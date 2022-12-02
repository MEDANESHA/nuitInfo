import React, { useEffect } from "react";
import StyledHeader from "./styles";
import gsap from "gsap";
import vihImg from "../../assets/img/HIV.png"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from "../../assets/img/nuitlogo.png"
import syringe from "../../assets/img/syringe.png"
import medicament from "../../assets/img/medicament.png"
import maternite from "../../assets/img/maternite.png"
const Header = () => {
  useEffect(() => {
    // gsap.to(".square", {
    //   x: 100,
    //   stagger: 0.3,
    //   duration: 2,
    // });
    //----------------------
    // gsap.fromTo(
    //   ".square",
    //   { x: -100 },
    //   {
    //     x: 100,
    //     stagger: 0.3,
    //     duration: 2,
    //   }
    // );
    //----------------------

    const timeline = gsap.timeline();

    timeline
      .to(".square", {
        x: 100,
        stagger: 0.3,
        duration: 2,
      })
      .to(".square", {
        rotate: 50,
        duration: 1,
        
      });
  }, []);

  return (
    <StyledHeader>
      <div className="container">

      
       <div className="feature-box">
              
              <h2 className="feature-box__text">
              Parce que chaque vie compte, voici quelques conseils pour assurer votre sanité
              </h2>
            </div>
            <div className="advices">
                <div className="square"><img src={syringe} alt="Logo" className="cart__logo" /><h1>Conseil 1</h1><p>Évitez de partager le matériel servant à l'injection de la drogue Si vous utilisez des drogues injectables</p> </div>
                <div className="square"><img src={maternite} alt="Logo" className="cart__logo" /><h1>Conseil 2</h1><p>Si vous êtes enceinte ou prévoyez le devenir, vous et votre partenaire devriez subir un test de dépistage des infections transmissibles sexuellement et par le sang .</p></div>
                <div className="square"><img src={medicament} alt="Logo" className="cart__logo" /><h1>Conseil 3</h1><p>Prendre des médicaments pour aider à prévenir l’infection après une situation où l’on a peut-être été en contact avec le VIH.</p></div>
               
            </div>
      
      </div>
    </StyledHeader>
  );
};

export default Header;
