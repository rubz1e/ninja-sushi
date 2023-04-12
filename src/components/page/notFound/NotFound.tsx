import React from 'react';

import { notFounds } from './NotFound.styled';

import NotFoundFirst from '../../../assets/notFound.svg';

export default function NotFound() {
  return (
    <notFounds.errorContainer>
      <notFounds.error>
        <img src={NotFoundFirst} alt="" />
        <notFounds.h2>Ошибка 404.</notFounds.h2>
        <notFounds.h3>Что-то пошло не так.</notFounds.h3>
        <notFounds.p>Страница, которую вы ищете, недействительна или находится на этапе разработки.</notFounds.p>
        <div>
          <notFounds.link to="/home">Вернуться на главную</notFounds.link>
        </div>
      </notFounds.error>
    </notFounds.errorContainer>
  );
}
