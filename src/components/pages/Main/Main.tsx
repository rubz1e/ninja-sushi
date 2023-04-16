import React from 'react';
import { mains } from './Main.styled';
import { MainCategoryList } from './CategoryItem/MainCategoryList';

export default function Main() {
  return (
    <mains.container>
      <mains.Itop>
        <mains.p>Суши</mains.p>
        <mains.link to="/sushi">Смотреть все</mains.link>
      </mains.Itop>
      <MainCategoryList categoryName="Суши" getElement="sushi" />
      <mains.ICategory>
        <mains.Itop>
          <mains.p>Роллы</mains.p>
          <mains.link to="/rolls">Смотреть все</mains.link>
        </mains.Itop>
        <MainCategoryList categoryName="Роллы" getElement="rolls" />
      </mains.ICategory>
      <mains.ICategory>
        <mains.Itop>
          <mains.p>Сеты</mains.p>
          <mains.link to="/sets">Смотреть все</mains.link>
        </mains.Itop>
        <MainCategoryList categoryName="Сеты" getElement="sets" />
      </mains.ICategory>
      <mains.ICategory>
        <mains.Itop>
          <mains.p>Закуски</mains.p>
          <mains.link to="/bowls">Смотреть все</mains.link>
        </mains.Itop>
        <MainCategoryList categoryName="Закуски" getElement="bowls" />
      </mains.ICategory>
      <mains.ICategory>
        <mains.Itop>
          <mains.p>Напитки</mains.p>
          <mains.link to="/drinks">Смотреть все</mains.link>
        </mains.Itop>
        <MainCategoryList categoryName="Напитки" getElement="drinks" />
      </mains.ICategory>
    </mains.container>
  );
}
