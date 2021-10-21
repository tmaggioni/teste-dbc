import styled from 'styled-components'

export const NavbarStyle = styled.nav`
    width:100%;
    height:64px;
    background:#FFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    margin-bottom:31px;
    .container{
        height:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .nav-left{
        display:flex;
        align-items:center;
        svg{
            &:first-of-type{
                fill:#3fa110;
                margin-right:20px;
            }
        }
    }
    .nav-right{
        display:flex;
        align-items:center;
        font-family: var(--nunito);
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color:var(--green);
        svg {
            margin-left:14px;
        }
    }
   

`