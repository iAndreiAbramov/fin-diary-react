import React from 'react';

import { GetRoute } from 'utils/routes/get-route';

import * as S from './PageNotFound.styled';

const PageNotFound: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Text as="h1">Страница не существует</S.Text>
      <S.Link name="Перейти к приложению" linkTo={GetRoute.Dashboard()} />
    </S.Wrapper>
  );
};

export default PageNotFound;
