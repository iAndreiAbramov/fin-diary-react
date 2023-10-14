import { styled } from 'styled-components';

export const FallbackElement = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.globals.bgColor.default};
`;
