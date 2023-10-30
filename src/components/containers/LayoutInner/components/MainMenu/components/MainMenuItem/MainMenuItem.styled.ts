import { styled } from 'styled-components';
import { TransitionTime } from 'styles/variables/sizes';

import LinkItem from 'components/ui/LinkItem';

export const MainMenuLink = styled(LinkItem)<{
  $isActive: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px 16px;
  border-radius: 6px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.components.mainMenuItem.bgColor.active : 'transparent'};

  text-decoration: none;
  color: ${({ theme }) => theme.components.mainMenuItem.fontColor.default};
  user-select: none;

  transition: all ${TransitionTime.Hover};

  &:hover {
    color: ${({ theme }) => theme.components.mainMenuItem.fontColor.hoverFocus};

    & svg {
      fill: ${({ theme }) => theme.components.mainMenuItem.fontColor.hoverFocus};
      stroke: ${({ theme }) => theme.components.mainMenuItem.fontColor.hoverFocus};
    }
  }

  li > &:active,
  li > &:focus {
    border: none;
    outline: none;
  }

  & svg {
    fill: ${({ theme }) => theme.components.mainMenuItem.fontColor.default};
    stroke: ${({ theme }) => theme.components.mainMenuItem.fontColor.default};

    transition: all ${TransitionTime.Hover};
  }
`;
