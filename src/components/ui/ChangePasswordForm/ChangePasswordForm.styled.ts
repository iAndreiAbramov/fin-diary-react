import { styled } from 'styled-components';

import Button from 'components/ui/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  max-width: 380px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  height: 80px;
`;

export const SubmitButton = styled(Button)`
  height: 48px;
  margin-top: 24px;
`;
