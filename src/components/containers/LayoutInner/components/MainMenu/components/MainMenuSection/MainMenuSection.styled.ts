import { styled } from 'styled-components';

import { TextItem } from 'components/atoms/TextItem';

export const MainMenuSectionWrapper = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 12px;
  }
`;

export const SectionTitle = styled(TextItem)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  padding: 4px 0 4px 24px;
`;
