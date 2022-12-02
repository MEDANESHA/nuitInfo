import styled from "styled-components";

const StyledHeader = styled.header`
body {
  margin: 0;
}

main {
  height:80vh;
  display:flex;
  background-color: #FFF0F0;
}
.navbar__item:hover{
  color:white;
}

.navbar {
  display: flex;
  align-items: center;
  height:4rem;
  position: relative;
  background: #ECECEC;
  color: white;
  font-family: Helvetica;
  font-weight: 300;
}
.header__logo{
  width: 2rem;
  position: absolute;
  left: 10px;
  top: 5px;
 
}
.header__logo_stable{
  width: 2rem;
  position: absolute;
  left: 10px;
  top: 5px;
}

.navbar__title {
  margin-right: auto;
  font-size: 150%;
  padding: 12px 16px;

}

.navbar__item {
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  color:#AD6363
  
  }
}
.right{
  float:right;
  width:50vw;
  height:100%;
}
.left{
width:50vw;
position relative;
}
.left h1{
  font-weight: 700;
  color:#AD6363;
  width:20rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.homeImage{
  width:100%;
}
main .vih{
  position: absolute;
  width: 5rem;
}
#vih1{
top:20%;
left:5%;
}
#vih2{
  top:10%;
  left:50%;
}
#vih3{
  top:60%;
  left:40%;
}
`;

export default StyledHeader;
