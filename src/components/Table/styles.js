import styled from 'styled-components';

export const Container = styled.div``;

export const PTable = styled.table`
    width: 500px;
    border-collapse: collapse;

    th{
        padding: 10px;
        background: #bcbcbc;
        text-aling: left;
    }

    tbody{
        width: 100%;

        tr{
            text-aling:left;
            border-bottom: 1px solid #bcbcbc;

            td{
                padding: 10px;
                text-aling: left;
            }
        }
    }
`;

export const Pagination = styled.div`
    display: flex;
    min-width: 500px;
`;