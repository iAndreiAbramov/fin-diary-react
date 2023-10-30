import { styled } from 'styled-components';

import { TextItem } from 'components/atoms/TextItem';
import LinkItem from 'components/ui/LinkItem';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  height: 100vh;

  text-transform: uppercase;
  font-size: 24px;
`;

export const Text = styled(TextItem)`
  font-size: 32px;
`

export const Link = styled(LinkItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 6px 12px;
  border: ${({ theme }) => `1px solid ${theme.components.button.outlined.borderColor.default}`};
  border-radius: 6px;
  
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.components.button.outlined.fontColor.default};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.components.button.outlined.fontColor.hoverFocus};
    border: ${({ theme }) => `1px solid ${theme.components.button.outlined.borderColor.hoverFocus}`};
  }
`;
