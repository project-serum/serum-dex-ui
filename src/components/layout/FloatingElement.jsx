import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  padding: 20px;
  background-color: #1a2029;
`;

export default function FloatingElement({ style = undefined, children }) {
  return <Wrapper style={{ ...style }}>{children}</Wrapper>;
}
