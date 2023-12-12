'use client'
import styled from "styled-components";

interface ChipProps {
    title: string
    type: string | 'Completed' | 'Pending'
}

type ChipType = {
    type?: string | 'Completed' | 'Pending'
}

const Chip = styled.span<ChipType>`
    padding: 2px 8px 2px 8px;
    border-radius: 6px;
    background-color: ${({ type }) => type === 'Completed'
        ? '#60CA57'
        : type === 'Pending'
            ? 'rgba(111, 118, 126, 0.4)'
            : ''};
`

const StatusChip = (props: ChipProps) => {
    return (
        <Chip type={props.type}>{props.title}</Chip>
    );
}

export default StatusChip;