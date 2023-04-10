import React from 'react';
import { categories } from './Category.styled';

import { ReactComponent as Rolls } from '../../assets/category/rolls.svg';
import { ReactComponent as Sushi } from '../../assets/category/sushi.svg';
import { ReactComponent as Sets } from '../../assets/category/sets.svg';
import { ReactComponent as Bowls } from '../../assets/category/bowls.svg';
import { ReactComponent as Drinks } from '../../assets/category/drinks.svg';
import { ReactComponent as Sausec } from '../../assets/category/sauces.svg';

export default function Category() {
  return (
    <categories.container>
      <categories.ul>
        <categories.li>
          <categories.link to="/rolls">
            <Rolls />
            <categories.p>Роллы</categories.p>
          </categories.link>
        </categories.li>
        <categories.li>
          <categories.link to="/sushi">
            <Sushi />
            <categories.p>Суши</categories.p>
          </categories.link>
        </categories.li>
        <categories.li>
          <categories.link to="/sets">
            <Sets />
            <categories.p>Сеты</categories.p>
          </categories.link>
        </categories.li>
        <categories.li>
          <categories.link to="/bowls">
            <Bowls />
            <categories.p>Боулы</categories.p>
          </categories.link>
        </categories.li>
        <categories.li>
          <categories.link to="/drinks">
            <Drinks />
            <categories.p>Напитки</categories.p>
          </categories.link>
        </categories.li>
        <categories.li>
          <categories.link to="/sausec">
            <Sausec />
            <categories.p>Соусы</categories.p>
          </categories.link>
        </categories.li>
      </categories.ul>
    </categories.container>
  );
}
