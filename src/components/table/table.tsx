'use client'
import styled from "styled-components";

type StyleCellTypes = {
    type?: 'date'
}


export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  padding: 16px;
  border-collapse: collapse;
  margin-bottom: 20px;
  border-radius: 8px;
    `

export const TableRow = styled.tr`
    height: 48px;
    padding: 24px;
    align-items:left;
    &:nth-child(even) {
        background-color: rgba(244, 244, 244, 0.5);
    }
    `

export const TableHead = styled.thead`

`

export const TableBody = styled.tbody`
    align-items: left;
    padding: 24px;
`


export const TableCell = styled.td<StyleCellTypes>`
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: left;
    padding: 12px;
    color: ${({ type }) => (type === 'date' ? '#6F767E' : '#1A1D1F')};
`


export const TableHeadCell = styled.th`
font-size: 12px;
font-weight: 500;
line-height: 12px;
letter-spacing: -0.01em;
text-align: left;
color: #6F767E;
padding: 12px;
`