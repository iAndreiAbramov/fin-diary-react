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
    cursor: default;

    & svg path,
    circle {
      transition: all ${TransitionTime.Disabled};
    }
  }
`;

export const PrimaryButton = styled(BasicButton)`
  background-color: ${({ theme }) => theme.components.button.primary.bgColor.default};
  color: ${({ theme }) => theme.components.button.primary.fontColor.default};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.components.button.primary.bgColor.hoverFocus};
  }

  &:active {
    background-color: ${({ theme }) => theme.components.button.primary.bgColor.active};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.button.primary.bgColor.disabled};
    color: ${({ theme }) => theme.components.button.primary.fontColor.disabled};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.primary.fontColor.disabled};
      fill: ${({ theme }) => theme.components.button.primary.fontColor.disabled};
    }
  }
`;

export const AlterButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.components.button.alter.bgColor.default};
  color: ${({ theme }) => theme.components.button.alter.fontColor.default};

  & svg path,
  circle {
    stroke: ${({ theme }) => theme.components.button.alter.fontColor.default};
    fill: ${({ theme }) => theme.components.button.alter.fontColor.default};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.components.button.alter.fontColor.hoverFocus};
    background-color: ${({ theme }) => theme.components.button.alter.bgColor.hoverFocus};

    & svg path,
    circle {
      stroke: ${({ theme }) => theme.components.button.alter.fontColor.hoverFocus};
      fill: ${({ theme }) => theme.components.button.alter.fontColor.hoverFocus};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.components.button.alter.fontColor.disabled};
    background-color: ${({ theme }) => theme.components.button.alter.bgColor.disabled};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.alter.fontColor.disabled};
      fill: ${({ theme }) => theme.components.button.alter.fontColor.disabled};
    }
  }
`;

export const OutlinedButton = styled(BasicButton)`
  background-color: transparent;

  color: ${({ theme }) => theme.components.button.outlined.fontColor.default};
  border: 2px solid ${({ theme }) => theme.components.button.outlined.borderColor.default};

  & svg path {
    stroke: ${({ theme }) => theme.components.button.outlined.fontColor.default};
    fill: ${({ theme }) => theme.components.button.outlined.fontColor.default};
  }

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.components.button.outlined.borderColor.hoverFocus};
    color: ${({ theme }) => theme.components.button.outlined.fontColor.hoverFocus};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.outlined.fontColor.hoverFocus};
      fill: ${({ theme }) => theme.components.button.outlined.fontColor.hoverFocus};
    }
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.components.button.outlined.borderColor.active};
    color: ${({ theme }) => theme.components.button.outlined.fontColor.active};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.outlined.fontColor.active};
      fill: ${({ theme }) => theme.components.button.outlined.fontColor.active};
    }
  }

  &:disabled {
    border: 2px solid ${({ theme }) => theme.components.button.outlined.borderColor.disabled};
    color: ${({ theme }) => theme.components.button.outlined.fontColor.disabled};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.outlined.fontColor.disabled};
      fill: ${({ theme }) => theme.components.button.outlined.fontColor.disabled};
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
  color: ${({ theme }) => theme.components.button.borderless.fontColor.default};

  & svg path {
    stroke: ${({ theme }) => theme.components.button.borderless.fontColor.default};
    fill: ${({ theme }) => theme.components.button.borderless.fontColor.default};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.components.button.borderless.fontColor.hoverFocus};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.borderless.fontColor.hoverFocus};
      fill: ${({ theme }) => theme.components.button.borderless.fontColor.hoverFocus};
    }
  }

  &:active {
    color: ${({ theme }) => theme.components.button.borderless.fontColor.active};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.borderless.fontColor.active};
      fill: ${({ theme }) => theme.components.button.borderless.fontColor.active};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.components.button.borderless.fontColor.disabled};

    & svg path {
      stroke: ${({ theme }) => theme.components.button.borderless.fontColor.disabled};
      fill: ${({ theme }) => theme.components.button.borderless.fontColor.disabled};
    }
  }
`;

export const SurroundedIcon = styled(OutlinedButton)`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  & svg {
    min-width: 24px;
    min-height: 24px;
  }
`;
