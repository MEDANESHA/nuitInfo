import styled from "styled-components";
//import background from "../../assets/img/background3.png"
const StyledHeader = styled.div`
  height: 100vh;
  

  .square {
    width: 150px;
    height: 150px;
    background-color: rgba(255,255,255,0.8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    -webkit-box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 15%);
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 15%);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    width: 23rem;
    height: 23rem;

    
}
.square:hover {

  transform:scale(1.1);
}
.square p{

  transform: rotate(-50deg) translate(-4rem,7rem);
    font-size: 1.2rem;
}
.square p:not(:last-child){

  margin-left:-1rem;
}
.square h1{
  transform: rotate(-50deg) translate(-2rem,6rem);
    color: #d13b2b;
    font-size: 1.8rem;
    margin: 1rem;
    position: absolute;
 
}
.advices{
  display:flex;
  position: absolute;
  top: 60%;
  left: 44%;
  transform: translate(-50%, -50%);
}
.advices .cart__logo{
  width:6rem;
  transform: rotate(-50deg) translate(-6rem,-5rem);
    position: absolute;
}
  }
  .feature-box {
    width:25rem;
    background-color: rgba(white, .8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(black, .15);
   

    }
    .feature-box__text{
      
      color: #d13b2b;
    width: 60%;
    float: center;
    /* margin-bottom: 0rem; */
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    
    .container{
      background-color: #ffe5e5;
      height:120vh;
      position:relative;
      overflow: hidden;


    }

}
`;

export default StyledHeader;
