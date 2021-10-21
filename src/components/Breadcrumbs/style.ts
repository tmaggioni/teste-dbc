import styled from 'styled-components'

import  Arrow  from '../../assets/icons/arrow.png';

export const BreadcrumbStyle = styled.div`
   display:flex;
   align-items:center;
   margin-top:20px;
   a{
    font-family: var(--exo);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    text-decoration:none;
    color: var(--green);
    margin-right:30px;
    position:relative;
    &:after{
        content:"";
        background: url(${Arrow});
        width:16px;
        height:16px;
        position:absolute;
        right:-23px;
        top:50%;
        transform:translateY(-50%);
    }
   }
   span{
    font-family:var(--exo);
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #828A82;
   }
`