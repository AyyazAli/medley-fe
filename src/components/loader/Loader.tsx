// Loader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a keyframe animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Loader component
const StyledLoader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid rgba(153,157,255,1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;

// Loader component
export const Loader = () => {
  return <StyledLoader />;
};