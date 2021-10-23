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
            .item{
                margin-right:10px;
                width:100%;
                display:flex;
                align-items:flex-end;
            }
        }
    }
    .table-committees{
        width:100%;
        margin-top:50px;
        table{
            thead{
                th{
                    padding:10px;
                    
                }
            }
        }
    }
`