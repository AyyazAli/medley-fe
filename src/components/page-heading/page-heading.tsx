'use client'
import styled from "styled-components";

const Title = styled.h3`
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: left;
`

const PageHeading = (props: { pageTitle: String }) => {
    return (
        <Title>{props.pageTitle}</Title>
    )
}


export default PageHeading;