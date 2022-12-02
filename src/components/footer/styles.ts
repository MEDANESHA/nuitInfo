import styled from "styled-components";

const StyledHeader = styled.div`


  .square-2 {
    width: 150px;
    height: 150px;
    background-color: black;
   
  }
  .global .right{
    background
  }
  .bg-video__content{
    width: 100%;
    margin-top: 4rem;
  }
  .terms-of-service{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #4f4e4e;
    display: flex;
    width:100%;
  }
  .service-section-left{
   width :30%;
   padding:20px 40px; 
   display:flex;
   flex-direction: column;
   align-items: center;
  }
 
  .service-logo img{
    width: 4rem;
  }
  .service-parag{
    color:white;
  }
  .footer-social-media{
     display: flex;
     justify-content: space-between;  
     width: 230px;
     height: 60px;
     list-style: none;
     padding:0;
     margin:20px;
    background-color:  #4f4e4e;
   }
   .footer-text{
     color:white;
     font-size:17px;
     margin-right:100px;
     margin-top:30px;
   }
   .social-media{
     color: white;
     width:46px;
     height: 38px;
     font-size:21px;
     font-size:23px;
     text-align: center;
     padding-top:10px;
     cursor:pointer;
     background-color:transparent;
   }
 
  .service-section-right{
    display:flex;
    width :70%;
    justify-content: space-around;
    margin-top: 5rem;
  
  }
  .service-section-bloc{
    text-decoration: none;
    list-style: none;
  }
  .service-section-bloc li{
    padding:5px;
  }
  .footer-subtitle{
  color: #33bfe0;
  list-style-type: none;
  }
  .subtitle{
  color: white;
  list-style-type: none;
  }
  a:link 
  { 
  text-decoration:none; 
  }

 
  li:link,
  li:visited {
        color: gray;
        background-color: gray;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        transition: all .2s;
    }

    li:hover,
    li:active {
        color: red;
        box-shadow: 0 1rem 2rem rgba(black, .4);
        transform: rotate(5deg) scale(1.3);
    }
  
`;

export default StyledHeader;
