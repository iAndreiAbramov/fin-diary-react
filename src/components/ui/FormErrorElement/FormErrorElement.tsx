import React from 'react';

import * as S from './FormErrorElement.styled';

const FormErrorElement: React.FC<{ errorText: string }> = ({ errorText }) => {
  return (
    <S.ErrorContainer as="div" $hasError={!!errorText}>
      <S.ErrorText as="span">{errorText}</S.ErrorText>
    </S.ErrorContainer>
  );
};

export default FormErrorElement;
