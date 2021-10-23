import styled from 'styled-components'

interface SituationStyleProps {
    value:string;
}

export const SituationStyle = styled.div<SituationStyleProps>`
    max-width:115px;
    padding:5px 10px;
    display:flex;
    height:30px;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    background:${(props) => {
        if(props.value == 'vigente'){
            return '#d7e6c8';
        }
        if(props.value == 'inativo'){
            return '#ccd3cd';
        }
        if(props.value == 'encerrado'){
            return 'transparent';
        }
    }};
    color:${(props) => {
        if(props.value == 'vigente'){
            return '#49a51c';
        }
        if(props.value == 'inativo'){
            return '#5a645a';
        }
        if(props.value == 'encerrado'){
            return '#c07574';
        }
    }};
    border:${(props) => {
        if(props.value == 'encerrado'){
            return '1px solid #c07574';
        }
    }};
    svg{
        margin-right:5px;
        path{
            fill:${(props) => props.value == 'encerrado' ? '#c07574' : ''};
        }
    }
`