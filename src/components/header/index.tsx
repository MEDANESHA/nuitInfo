import React from "react";
import StyledHeader from "./styles";
import  { useEffect } from "react";
import logo from "../../assets/img/nuitlogo.png"
import homeImg from "../../assets/img/background2.png"
import gsap from "gsap";
import vihImg from "../../assets/img/HIV.png"

const Header = () => {
  useEffect(() => {
    // gsap.to(".square", {
    //   x: 100,
    //   stagger: 0.3,
    //   duration: 2,
    // });
    //----------------------
     gsap.to(".vih",{
      rotate:360,
      stagger: 0.3,
      duration: 20,
      repeat:-1
     
  })
    //   ".vih",
    //   {  },
    //   {
    //     translateX: +20,
    //     translateY:+20,
    //     stagger: 0.3,
    //     duration: 2,
    //     repeat:-1
    //   }
    // );
    //----------------------

    const timeline = gsap.timeline();

    timeline
      .to(".header__logo", {
        x: 1100,
        y:300,
        width:120,
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
      
     
      <header className='navbar'>
      
        <div className='navbar__title navbar__item'><img src={String(logo)} alt="Logo" className="header__logo" /></div>
        <div className='navbar__title navbar__item'><img src={String(logo)} alt="Logo" className="header__logo_stable" /></div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
    <main>
    <img src={String(vihImg)} alt="vih" id="vih1" className="vih" />
    <img src={String(vihImg)} alt="vih" id="vih2" className="vih" />
    <img src={String(vihImg)} alt="vih" id="vih3" className="vih" />
      <div className="left">
        <h1>Ensemble, préparons un monde sans SIDA ni VIH</h1>

      </div>
      <div className="right">
      <img src={String(homeImg)} alt="Logo" className="homeImage" />
      </div>
    </main>

      
    

    </StyledHeader>
  );
};

export default Header;
