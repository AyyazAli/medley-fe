'use client'

import { Fragment } from "react";
import styled from "styled-components";

const Title = styled.p`
    display: inline;
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-left: 16px;
`
const Tag = styled.div`
    width: 16px;
    height: 32px;
    border-radius: 4px;
    background: rgba(153, 157, 255, 1);    
`
const InlineContent = styled.div`
    display: -webkit-inline-box;
`
const WidgetTitle = (props: { title: String }) => {
    return (
        <Fragment>
            <InlineContent>
                <Tag />
                <Title>{props.title}</Title>
            </InlineContent>
        </Fragment>
    )
}

export default WidgetTitle;