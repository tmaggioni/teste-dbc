import styled from 'styled-components'

export const AppStyle = styled.div`
    .filters{
        display:flex;
        flex-direction:column;
        margin-top:33px;
        .row{
            width:100%;
            display:flex;
            justify-content:flex-start;
            margin-bottom:20px;
            @media(max-width:1024px){
                    flex-direction: column;
                    align-items:center;
                    margin-bottom:0;
                }
            .item{
                margin-right:10px;
                width:100%;
                display:flex;
                align-items:flex-end;
                @media(max-width:1024px){
                    margin-bottom:10px;
                    justify-content:center;
                }
                &.button-content{
                    @media(max-width:1024px){
                        margin-top:30px
                    }
                }
            }
        }
    }
    .table-committees{
        width:100%;
        margin-top:50px;
        @media(max-width:1024px){
            margin-top:30px;
            margin-bottom:30px;
                }
        table{
            thead{
                th{
                    padding:10px;
                    
                }
            }
        }
    }
`