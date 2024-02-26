import styled from "styled-components";

export const Container = styled.div` 
display: grid;
grid-area: 
"header"
"page";

`;

export const Back = styled.div`
grid-area: "header";

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTES};
width: 100%;
height: 144px;
padding: 60px 144px;

> a {
    display: flex;
    align-items: center;
    gap: 4px;
    color:${({ theme }) => theme.COLORS.PINK};
}
`;

export const Page = styled.div`
grid-area: "page";
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 525px;

 .imgUser {
    width: 186px;
    height: 186px;
    border-radius: 93px;
    margin-top: -100px;
    position: relative;
}
.inputsOne {
    width:100%;
    margin: 64px 0 24px;
}
.profileSave {
    margin-top: 24px;
    width: 100%;
    height: 48px;
    justify-content: center;
    border: none;
    background:${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
}



`;
export const Avatar = styled.div`
position: relative;
margin: -124px auto 32px;

width: 186px;
height: 186px;

> img {
   border-radius: 50%;
   width: 186px;
   height: 186px;

}

> label {
  width:48px;
  height:48px;

  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius:50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 7px;
  right: 7px;

  cursor: pointer;
}

 input {
   display: none;
}
 svg {
   width: 20px;
   height: 20px;
   color: ${({ theme }) => theme.COLORS.BLACK};

 }  


`;