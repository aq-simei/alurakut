import styled from 'styled-components'

export const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  grid-gap: 10px;
  padding: 16px;

  .profileArea{
    display: none;
    @media(min-width:860px){
      display: block;
    }
    img{
        border-radius: 8px;
    }
  }
  @media(min-width:860px){
    max-width: 1110px;
    display: grid;
    grid-template-columns: 160px 1fr 312px ;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
  }
`;
