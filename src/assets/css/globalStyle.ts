import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 /* html{
    --exo: 'Exo 2'
    --nunito: 'Nunito';
  } */
  html{
      --exo:'Exo 2';
      --nunito:'Nunito';
      --green: #3FA110;
    }
  *{
    
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: var(--exo);
  }
 
  body {
    background:#E5E5E5;
  }
  .container{
    width:100%;
    max-width:1072px;
    padding:0 10px;
    margin:0 auto;
  }
`