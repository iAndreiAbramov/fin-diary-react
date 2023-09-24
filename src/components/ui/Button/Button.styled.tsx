import { BreakPoint } from 'constants/style-variables/breakpoints';
import { FontFamily } from 'constants/style-variables/fonts';
import { TransitionTime } from 'constants/style-variables/sizes';
import { styled } from 'styled-components';

const BasicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: auto;
  height: auto;
  padding: 8px 15px;

  font-family: ${FontFamily.Ubuntu};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;

  transition: all ${TransitionTime.Hover};

  & svg {
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media (max-width: ${BreakPoint.TabletTop}) {
    user-select: none;
  }

  & svg {
    path,
    circle {
      transition: all ${TransitionTime.Hover};
    }
  }

  &:hover,
  &:focus {
    transition: all ${TransitionTime.Hover};

    & svg path,
    circle {
      transition: all ${TransitionTime.Hover};
    }
  }

  &:active {
    transition: all ${TransitionTime.Active};

    & svg path,
    circle {
      transition: all ${TransitionTime.Active};
    }
  }

  &:disabled {
    transition: all ${TransitionTime.Disabled};

    & svg path,
    circle {
      transition: all ${TransitionTime.Disabled};
    }
  }
`;

export const PrimaryButton = styled(BasicButton)`
  background-color: ${({ theme }) => theme.buttonColor.default};
  color: ${({ theme }) => theme.components.button.fontColor.primary};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.components.button.bgColor.primaryHoverFocus};
  }

  &:active {
    background-color: ${({ theme }) => theme.components.button.bgColor.active};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.button.fontColor.disabled};
  }
`;

export const AlterButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.buttonColor.alter};
  color: ${({ theme }) => theme.components.button.fontColor.alter};

  & svg path,
  circle {
    stroke: ${({ theme }) => theme.components.button.fontColor.alter};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.components.button.fontColor.alterHoverFocus};

    & path,
    circle {
      stroke: ${({ theme }) => theme.components.button.fontColor.alterHoverFocus};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.button.fontColor.disabled};
    color: ${({ theme }) => theme.components.button.fontColor.primary};
  }
`;

export const OutlinedButton = styled(BasicButton)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.buttonColor.default};
  border-radius: 16px;

  color: ${({ theme }) => theme.components.button.fontColor.bordered};

  & svg path {
    stroke: ${({ theme }) => theme.components.button.fontColor.bordered};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.components.button.bgColor.primaryHoverFocus};
    color: ${({ theme }) => theme.components.button.bgColor.primaryHoverFocus};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.bgColor.primaryHoverFocus};
    }
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.components.button.bgColor.active};
    color: ${({ theme }) => theme.components.button.bgColor.active};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.bgColor.active};
    }
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.components.button.bgColor.disabled};
    color: ${({ theme }) => theme.components.button.bgColor.disabled};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.bgColor.disabled};
    }
  }
`;

export const BorderlessButton = styled(BasicButton)`
  padding: 0;
  background-color: transparent;

  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.components.button.bgColor.primary};

  & svg path {
    stroke: ${({ theme }) => theme.components.button.bgColor.primary};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.components.button.bgColor.primaryHoverFocus};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.bgColor.primaryHoverFocus};
    }
  }

  &:active {
    color: ${({ theme }) => theme.components.button.fontColor.active};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.fontColor.active};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.components.button.fontColor.disabled};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.fontColor.disabled};
    }
  }
`;

export const SurroundedIcon = styled(OutlinedButton)`
  width: 58px;
  height: 58px;
  border-radius: 50%;

  & svg {
    min-width: 24px;
    min-height: 24px;
  }
`;
